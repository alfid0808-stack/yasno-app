/* Состояние пользователя, интервальное повторение и проверка импорта.
   Чистые функции: работают в браузере (window.YasnoStore) и в Node (tools/unit.js). */
(function(root){
"use strict";
const STATE_VERSION = 4;
const CONTENT_VERSION = "2026.10.7";
const ERR_CATS = ["negation","article","be","auxiliary","agreement","perfect","irregular","verb-form","tense","preposition","word-order","missing-word","lexical"];
const LOG_MAX = 3000;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
/* Числовое сравнение версий: 2026.10.10 корректно считается новее 2026.10.3. */
const versionParts = v => String(v || "").split(/[^0-9]+/).filter(Boolean).map(Number);
function versionLt(a, b){
  const A = versionParts(a), B = versionParts(b), n = Math.max(A.length, B.length);
  for (let i = 0; i < n; i++){ const x = A[i] || 0, y = B[i] || 0; if (x !== y) return x < y; }
  return false;
}
const num = (v, lo, hi, d) => { v = Number(v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
const int = (v, lo, hi, d) => Math.round(num(v, lo, hi, d));
/* Календарная проверка: 2026-02-31 и 2026-99-99 отбрасываются (дата должна пройти круг туда-обратно). */
const date = (v, d = null) => {
  if (typeof v !== "string" || !DATE_RE.test(v)) return d;
  const [y, m, day] = v.split("-").map(Number), t = new Date(Date.UTC(y, m - 1, day));
  return t.getUTCFullYear() === y && t.getUTCMonth() === m - 1 && t.getUTCDate() === day && y >= 2000 && y <= 2100 ? v : d;
};
const bool = (v, d) => typeof v === "boolean" ? v : d;
const strs = (a, maxN, maxLen) => Array.isArray(a) ? a.filter(x => typeof x === "string" && x.trim() && x.length <= maxLen).slice(0, maxN) : [];

function freshState(){
  return { v: STATE_VERSION, cv: CONTENT_VERSION, xp: 0, goal: 30, hist: {}, streak: { count: 0, best: 0, last: null },
    items: {}, accepted: {}, candidates: {}, lessons: {}, log: [], errs: {}, stats: { rec: { n: 0, ok: 0 }, prod: { n: 0, ok: 0 }, speak: { n: 0, ok: 0 } }, perfect: 0,
    theme: "auto", speakOff: false, sound: true, rate: 0.95, trustMine: false, updated: 0 };
}

/* Любые данные (localStorage, импорт файла) проходят через whitelist: неизвестные поля отбрасываются,
   числа и даты проверяются, ключи фраз сверяются с курсом. ctx = { validIds:Set, legacy:{старый id → постоянный}, validLessons:Set } */
function sanitize(raw, ctx){
  const S = freshState();
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return S;
  const ver = int(raw.v, 0, 1000, 0);
  const resetIds = new Set();
  let needsSave = ver !== STATE_VERSION || String(raw.cv || "") !== CONTENT_VERSION;
  const mapId = id => ctx.validIds.has(id) ? id : (ver < 3 && ctx.legacy && ctx.legacy[id]) || null;
  S.xp = int(raw.xp, 0, 1e7, 0);
  S.goal = [10, 20, 30, 50].includes(Number(raw.goal)) ? Number(raw.goal) : 30;
  S.theme = ["auto", "light", "dark"].includes(raw.theme) ? raw.theme : "auto";
  S.speakOff = bool(raw.speakOff, false); S.sound = bool(raw.sound, true); S.trustMine = bool(raw.trustMine, false);
  S.rate = [0.7, 0.95, 1.1].includes(Number(raw.rate)) ? Number(raw.rate) : 0.95;
  S.perfect = int(raw.perfect, 0, 1e6, 0);
  S.updated = int(raw.updated, 0, 8.64e15, 0);
  const st = raw.streak || {};
  S.streak = { count: int(st.count, 0, 1e5, 0), best: int(st.best, 0, 1e5, 0), last: date(st.last) };
  if (raw.hist && typeof raw.hist === "object") for (const k of Object.keys(raw.hist).slice(0, 4000)) if (date(k)) S.hist[k] = int(raw.hist[k], 0, 1e5, 0);
  if (raw.items && typeof raw.items === "object") for (const k of Object.keys(raw.items)) {
    const id = mapId(k), r = raw.items[k]; if (!id || !r || typeof r !== "object") continue;
    S.items[id] = { ease: num(r.ease, 1.3, 2.8, 2.3), int: int(r.int, 0, 3650, 0), reps: int(r.reps, 0, 100, 0), due: date(r.due, "2000-01-01"),
      lapses: int(r.lapses, 0, 9999, 0), rec: int(r.rec, 0, 99999, 0), prod: int(r.prod, 0, 99999, 0), ok: int(r.ok, 0, 99999, 0) };
    /* v2 повышал интервал за узнавание: такие фразы возвращаем на проверку самостоятельным ответом */
    const it = S.items[id];
    if (ver < 3) { it.rec = Math.max(it.rec, it.reps); it.reps = 0; it.int = 0; it.due = "2000-01-01"; }
    /* Ревизия фразы: если смысл фразы изменился после того, как её учили, прогресс по ней сбрасывается до «к повторению».
       Отпечаток (h) хранится в записи; для записей без отпечатка используется список фраз, исправленных в версии курса. */
    /* ctx.hash[id] = { h: отпечаток смысла, v: отпечаток вариантов }. Сравниваем только внутри одной версии алгоритма;
       при смене алгоритма полагаемся на REVISED, чтобы не сбросить прогресс по всем 1200 фразам. */
    const cur = ctx.hash && ctx.hash[id], hv = ctx.hashVersion || 1;
    const str = x => typeof x === "string" && x.length <= 32 ? x : null;
    const rawH = str(r.h), rawV = str(r.hvar), rawHv = int(r.hv, 1, 99, 1), same = rawHv === hv;
    const revisedAt = ctx.revised && ctx.revised[id];
    const meaningChanged = (same && rawH && cur && rawH !== cur.h) || (!!revisedAt && versionLt(raw.cv, revisedAt));
    const recheckAt = ctx.recheck && ctx.recheck[id];
    const variantsChanged = !meaningChanged && ((same && rawV && cur && rawV !== cur.v) || (!!recheckAt && versionLt(raw.cv, recheckAt)));
    if (meaningChanged) {
      it.reps = 0; it.int = 0; it.due = "2000-01-01"; resetIds.add(id);
      S.revisedReset = (S.revisedReset || 0) + 1; needsSave = true;
    } else if (variantsChanged) {
      it.due = "2000-01-01"; resetIds.add(id); S.recheck = (S.recheck || 0) + 1; needsSave = true;
    }
    if (cur) { if (rawH !== cur.h || rawV !== cur.v || rawHv !== hv) needsSave = true; it.h = cur.h; it.hvar = cur.v; it.hv = hv; }
  }
  /* Локальные пользовательские варианты для изменённой карточки тоже сбрасываются:
     иначе исправленная ошибка могла бы продолжить считаться правильной. */
  for (const [field, target] of [["accepted", S.accepted], ["candidates", S.candidates]])
    if (raw[field] && typeof raw[field] === "object") for (const k of Object.keys(raw[field])) { const id = mapId(k); if (id && !resetIds.has(id)) { const a = strs(raw[field][k], 5, 200); if (a.length) target[id] = a; } }
  if (raw.lessons && typeof raw.lessons === "object") for (const k of Object.keys(raw.lessons)) {
    if (!ctx.validLessons.has(k)) continue; const l = raw.lessons[k] || {};
    S.lessons[k] = { n: int(l.n, 0, 99999, 1), best: int(l.best, 0, 100, 0) };
  }
  if (Array.isArray(raw.log)) S.log = raw.log.slice(-LOG_MAX).filter(e => Array.isArray(e) && date(e[0]) && (e[1] === 0 || e[1] === 1) && (e[2] === 0 || e[2] === 1)).map(e => [e[0], e[1], e[2]]);
  if (raw.errs && typeof raw.errs === "object") for (const c of ERR_CATS) if (raw.errs[c] != null) S.errs[c] = int(raw.errs[c], 0, 1e7, 0);
  const stats = raw.stats || {};
  for (const kind of ["rec", "prod", "speak"]) { const s = stats[kind] || {}; S.stats[kind] = { n: int(s.n, 0, 1e7, 0), ok: int(s.ok, 0, 1e7, 0) }; S.stats[kind].ok = Math.min(S.stats[kind].ok, S.stats[kind].n); }
  /* v2 учитывал «правильно с первой попытки» вперемешку с узнаванием: переносим как узнавание, а не как самостоятельный ответ */
  if (ver < 3) { S.stats.rec = { n: int(raw.answered, 0, 1e7, 0), ok: int(raw.correct, 0, 1e7, 0) }; S.stats.rec.ok = Math.min(S.stats.rec.ok, S.stats.rec.n); }
  S.cv = CONTENT_VERSION;
  Object.defineProperty(S, "_needsSave", { value: needsSave, writable: true, enumerable: false });
  return S;
}

/* ----- Интервальное повторение (упрощённый SM-2).
   Меняется ТОЛЬКО по результату самостоятельного письменного ответа (письмо / диктовка). Речь в SRS не участвует: распознавание речи слишком неточный измеритель.
   Узнавание (выбор, пропуск, сборка из слов) лишь отмечает, что фраза показана: rec++.
   Повтор засчитывается только когда фраза «созрела» (due <= today). ----- */
function newRecord(today){ return { ease: 2.3, int: 0, reps: 0, due: today, lapses: 0, rec: 0, prod: 0, ok: 0 }; }
function srsRecognize(S, id, today){ const r = S.items[id] || (S.items[id] = newRecord(today)); r.rec++; return r; }
function srsProduce(S, id, ok, today, addDays){
  const r = S.items[id] || (S.items[id] = newRecord(today));
  logAttempt(S, today, ok, r.reps >= 1 && r.due <= today);
  r.prod++; if (ok) r.ok++;
  if (ok){
    if (r.due <= today){
      r.reps += 1;
      r.int = r.reps === 1 ? 1 : r.reps === 2 ? 3 : Math.round(Math.max(r.int, 1) * r.ease);
      r.ease = Math.min(2.8, r.ease + 0.05);
      r.due = addDays(today, r.int);
    }
  } else { r.reps = 0; r.int = 1; r.lapses += 1; r.ease = Math.max(1.3, r.ease - 0.2); r.due = addDays(today, 1); }
  return r;
}
/* Журнал самостоятельных ответов: [дата, верно 0/1, это было плановое повторение 0/1]. По нему считается удержание. */
function logAttempt(S, d, ok, review){ S.log.push([d, ok ? 1 : 0, review ? 1 : 0]); if (S.log.length > LOG_MAX) S.log.splice(0, S.log.length - LOG_MAX); }
/* Удержание за N дней: доля верных ответов на плановых повторениях (фраза уже была выучена и «созрела»). */
function retention(S, sinceDate){ const ev = S.log.filter(e => e[2] === 1 && e[0] >= sinceDate); return ev.length ? { n: ev.length, ok: ev.filter(e => e[1] === 1).length } : { n: 0, ok: 0 }; }
function addError(S, cat){ if (ERR_CATS.includes(cat)) S.errs[cat] = (S.errs[cat] || 0) + 1; }
/* Стадия фразы: introduced → recognized → recalled → reviewed → consolidated */
/* consolidated — только когда интервал дорос до 3 недель; два успешных повтора — это ещё «повторено», а не «закреплено» */
function stage(r){ if (!r) return "new"; if (r.reps >= 2 && r.int >= 21) return "consolidated"; if (r.reps >= 2) return "reviewed"; if (r.reps >= 1) return "recalled"; if (r.rec > 0) return "recognized"; return "introduced"; }

root.YasnoStore = { STATE_VERSION, CONTENT_VERSION, freshState, sanitize, srsRecognize, srsProduce, logAttempt, retention, addError, ERR_CATS, newRecord, stage, versionLt };
})(typeof window !== "undefined" ? window : globalThis);
