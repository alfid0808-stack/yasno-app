(function(){
"use strict";

/* =========================== DATA =========================== */
const PER_LESSON = 8;
const UNITS = window.UNITS_RAW;
UNITS.forEach(u => { u.lessons = Math.ceil(u.items.length / PER_LESSON); u.items.forEach((it,i) => { it.id = it.pid; it.legacy = u.id + "-" + i; it.unit = u.id; }); });
const ITEM = {}; UNITS.forEach(u => u.items.forEach(it => { if (!it.id || ITEM[it.id]) throw new Error("Нет постоянного ID или дубль: " + it.legacy); ITEM[it.id] = it; }));
const LEGACY = {}; UNITS.forEach(u => u.items.forEach(it => LEGACY[it.legacy] = it.id));
const LESSON_KEYS = new Set(); UNITS.forEach(u => { for (let k = 0; k < u.lessons; k++) LESSON_KEYS.add(u.id + ":" + k); });
const Store = window.YasnoStore;
const HASH_VERSION = window.YasnoEngine.CONTENT_HASH_VERSION;
const HASH = {}; Object.values(ITEM).forEach(it => HASH[it.id] = { h: window.YasnoEngine.contentHash(it), v: window.YasnoEngine.variantsHash(it) });
/* Фразы, смысл которых исправлен в данной версии курса: прогресс по ним сбрасывается у тех, кто учил старый вариант. */
const REVISED = {};
["p0025","p0030","p0031","p0032","p0039","p0044","p0047","p0057","p0060","p0063","p0089","p0125","p0140","p0155","p0156","p0158","p0168","p0186","p0237","p0240","p0249","p0278","p0287","p0327","p0328","p0446"].forEach(id => REVISED[id] = "2026.10.3");
/* В 2026.10.4 изменён смысл задания (русская фраза или основной эталон): убраны остатки грамматики, которую A1 ещё не прошёл. */
["p0029","p0084","p0091","p0092","p0334","p0341","p0580"].forEach(id => REVISED[id] = "2026.10.4");
/* Изменён только набор допустимых ответов: фраза ставится на перепроверку без потери интервала. */
const RECHECK = {};
["p0081","p0096","p0138","p0141","p0142","p0193","p0207","p0254","p0470","p0333","p1049","p1088"].forEach(id => RECHECK[id] = "2026.10.5");
const CTX = { validIds: new Set(Object.keys(ITEM)), legacy: LEGACY, validLessons: LESSON_KEYS, hash: HASH, hashVersion: HASH_VERSION, revised: REVISED, recheck: RECHECK };
const UNIT = {}; UNITS.forEach(u => UNIT[u.id] = u);
const TOTAL_ITEMS = Object.keys(ITEM).length;
const TASK_FORMS = 7; /* на каждую фразу: выбор перевода, пропуск, сборка, на слух (выбор), перевод письменно, диктовка, пары */

/* Жёсткая структурная самопроверка курса. Ошибочный контент не должен тихо уходить пользователю. */
(function validateCourse(){
  const errors = [], E = window.YasnoEngine;
  for (const u of UNITS){
    if (u.items.length !== 16) errors.push(`${u.id}: ожидается 16 фраз, найдено ${u.items.length}`);
    for (const it of u.items){
      if (!/^p\d{4}$/.test(it.id)) errors.push(`${u.id}: некорректный постоянный ID ${it.id}`);
      if (!it.ru || !Array.isArray(it.en) || !it.en.length || !it.en[0]) errors.push(`${it.id}: пустой русский или английский текст`);
      if (!it.key || !E.splitKey(it.en[0], it.key)) errors.push(`${it.id}: ключ «${it.key}» не найден в основном эталоне`);
      const official = it.en.flatMap(E.expansions);
      if (new Set(official).size !== official.length) errors.push(`${it.id}: дубли официальных вариантов после нормализации`);
      const key = E.expansions(it.key)[0], opts = it.opts.map(x => E.expansions(x)[0]);
      if (opts.includes(key) || new Set(opts).size !== opts.length) errors.push(`${it.id}: конфликт вариантов задания с пропуском`);
    }
  }
  if (errors.length) throw new Error("Ошибка QA контента:\n" + errors.slice(0, 20).join("\n") + (errors.length > 20 ? `\n…и ещё ${errors.length - 20}` : ""));
})();

/* =========================== HELPERS =========================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pretty = s => s.replace(/'/g, "’");
const pad = n => String(n).padStart(2, "0");
const fmt = d => d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate());
const today = () => fmt(new Date());
const addDays = (s, n) => { const [y,m,d] = s.split("-").map(Number); return fmt(new Date(y, m-1, d+n)); };
function shuffle(a){ a = a.slice(); for (let i = a.length-1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; }
function plural(n, a, b, c){ const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? a : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? b : c; }
const tokens = s => s.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);

/* =========================== STATE =========================== */
const LS_KEY = "yasno-v2";
const BACKUP_MAX_BYTES = 10 * 1024 * 1024;
const freshState = Store.freshState;
let S = freshState(), storageBlocked = false;
const storageAlert = message => {
  const el = document.getElementById("storageAlert"); if (!el) return;
  el.textContent = message || ""; el.classList.toggle("hidden", !message);
};
try {
  const raw = localStorage.getItem(LS_KEY);
  if (raw) { try { S = Store.sanitize(JSON.parse(raw), CTX); } catch(e){ storageBlocked = true; storageAlert("Сохранённый прогресс повреждён и не будет перезаписан автоматически. Загрузите резервную копию или явно сбросьте прогресс в настройках."); } }
} catch(e){ storageAlert("Браузер не даёт доступ к локальному хранилищу. Прогресс этой сессии может не сохраниться — скачайте резервную копию."); }
function save(force = false){
  S.updated = Date.now();
  if (storageBlocked && !force){ storageAlert("Запись прогресса заблокирована, чтобы не затереть повреждённую копию. Загрузите резервную копию или явно сбросьте прогресс в настройках."); return false; }
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); S._needsSave = false; storageBlocked = false; storageAlert(""); return true; }
  catch(e){ storageAlert("Не удалось сохранить прогресс в браузере. Не закрывайте страницу до сохранения резервной копии в настройках."); return false; }
}
if (S._needsSave && !storageBlocked) save(); /* один раз сохраняем безопасно мигрированное состояние и новые отпечатки */
const trustMine = () => !!S.trustMine;
const todayXP = () => S.hist[today()] || 0;
function addXP(n){
  S.xp += n; S.hist[today()] = todayXP() + n;
  const t = today();
  if (S.streak.last !== t){
    S.streak.count = (S.streak.last === addDays(t, -1)) ? S.streak.count + 1 : 1;
    S.streak.last = t;
    S.streak.best = Math.max(S.streak.best || 0, S.streak.count);
  }
}
const streakNow = () => { const t = today(); return (S.streak.last === t || S.streak.last === addDays(t,-1)) ? S.streak.count : 0; };

/* Интервальное повторение: js/store.js. Меняется только по самостоятельным письменным ответам (перевод, диктовка); речь — отдельная практика. */
const dueIds = () => Object.keys(S.items).filter(id => ITEM[id] && S.items[id].due <= today());
const strength = u => Math.round(u.items.filter(it => (S.items[it.id]?.reps || 0) >= 2).length / u.items.length * 100);
const seenCount = u => u.items.filter(it => S.items[it.id]).length;
const lessonDone = (u, k) => !!S.lessons[u.id + ":" + k];
const unitDone = u => Array.from({length:u.lessons}, (_,k) => lessonDone(u,k)).every(Boolean);
function nextLesson(){
  for (const u of UNITS) for (let k = 0; k < u.lessons; k++) if (!lessonDone(u,k)) return { u, k, fresh:true };
  const weakest = UNITS.slice().sort((a,b) => strength(a) - strength(b))[0];
  return { u: weakest, k: 0, fresh:false };
}

/* =========================== ПРОВЕРКА ОТВЕТОВ (движок: js/engine.js) =========================== */
const E = window.YasnoEngine;
const { expansions, closest, similarity, wordDiff, diagnose, splitKey, assess } = E;
const accepted = it => E.accepted(it, trustMine() ? S.accepted[it.id] : null);
const isOfficialCorrect = (it, ans) => E.isCorrect(it, ans, null);
const isLocalCorrect = (it, ans) => !!trustMine() && !isOfficialCorrect(it, ans) && E.isCorrect(it, ans, S.accepted[it.id] || []);
const isCorrect = (it, ans) => isOfficialCorrect(it, ans) || isLocalCorrect(it, ans);

const Native = () => window.YasnoNative && window.YasnoNative.isNative ? window.YasnoNative : null;
const NATIVE_REMINDER_KEY = "yasno-native-reminder";
const nativeHaptic = kind => { const n = Native(); if (n) n.haptic(kind).catch(() => {}); };
const getNativeReminder = () => { try { return localStorage.getItem(NATIVE_REMINDER_KEY) || ""; } catch(e){ return ""; } };
async function setNativeReminder(time){
  const n = Native(); if (!n) return false;
  const result = await n.setDailyReminder(time);
  if (result && result.ok){
    try { if (time) localStorage.setItem(NATIVE_REMINDER_KEY, time); else localStorage.removeItem(NATIVE_REMINDER_KEY); } catch(e){}
    announce(time ? "Напоминание установлено на " + time : "Напоминание выключено.");
    return true;
  }
  announce("Не удалось включить напоминание.");
  return false;
}

/* =========================== ЗВУК =========================== */
let VOICE = null, actx = null;
const canTTS = "speechSynthesis" in window;
function pickVoice(){
  if (!canTTS) return;
  const vs = speechSynthesis.getVoices().filter(v => /^en(-|_)/i.test(v.lang));
  const pref = [/Samantha|Daniel|Karen|Moira|Serena/i, /Google US|Google UK|Natural|Aria|Jenny/i];
  VOICE = pref.map(p => vs.find(v => p.test(v.name))).find(Boolean) || vs.find(v => /en-US/i.test(v.lang)) || vs[0] || null;
}
if (canTTS){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, mult = 1){
  if (!canTTS) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = VOICE?.lang || "en-US"; if (VOICE) u.voice = VOICE; u.rate = (S.rate || 0.95) * mult;
    speechSynthesis.speak(u);
  } catch(e){}
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function tone(seq){
  if (!S.sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === "suspended") actx.resume();
    let t = actx.currentTime;
    for (const [f, d, type] of seq){
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type || "sine"; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.start(t); o.stop(t + d + 0.02); t += d * 0.8;
    }
  } catch(e){}
}
const sfx = {
  ok:() => { tone([[660,.12],[880,.18]]); nativeHaptic("success"); },
  bad:() => { tone([[220,.22,"triangle"]]); nativeHaptic("error"); },
  win:() => { tone([[523,.12],[659,.12],[784,.12],[1047,.28]]); nativeHaptic("success"); }
};

/* =========================== SHELL / NAV =========================== */
const app = $("#app"), dock = $("#dock"), dockIn = $("#dockIn"), nav = $("#nav");
let SCREEN = "home", L = null, answer = null, locked = false, checkEnabled = false;
const TABS = [["home","📚","Учиться"],["review","🔁","Повторение"],["stats","📊","Статистика"],["settings","⚙️","Настройки"]];
function renderNav(){
  const due = dueIds().length;
  nav.innerHTML = `<div class="brand">Ясно</div>` + TABS.map(([id,ic,t]) => `<button data-t="${id}" class="${SCREEN === id ? "on" : ""}" ${SCREEN === id ? 'aria-current="page"' : ""}><span class="ic">${ic}</span><span>${t}</span>${id === "review" && due ? `<span class="dot">${due}</span>` : ""}</button>`).join("");
  $$("button", nav).forEach(b => b.onclick = () => go(b.dataset.t));
}
function go(name){ SCREEN = name; ({ home:renderHome, review:renderReview, stats:renderStats, settings:renderSettings })[name](); window.scrollTo(0, 0); }
window.addEventListener("yasno:native-review", () => { dueIds().length ? startReview() : go("home"); });
const announce = msg => { const lv = $("#live"); if (lv){ lv.textContent = ""; setTimeout(() => { lv.textContent = msg; }, 30); } };
function syncVisualViewport(){
  const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  document.documentElement.style.setProperty("--vvh", Math.max(240, h) + "px");
}
function prepareFeedback(){
  const a = document.activeElement;
  if (a && (a.matches("input,textarea,select") || a.isContentEditable)) a.blur();
  syncVisualViewport();
  document.body.classList.add("feedback-open");
  dock.scrollTop = 0;
  setTimeout(syncVisualViewport, 80);
}
function hideDock(){ dock.className = "dock hidden"; dockIn.innerHTML = ""; document.body.classList.remove("feedback-open"); }
function applyTheme(){
  if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme);
  const dark = S.theme === "dark" || (S.theme === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  const m = $('meta[name="theme-color"]:not([media])'); if (m) m.content = dark ? "#0F1626" : "#EEF2F8";
  const n = Native(); if (n) n.configureStatusBar(S.theme).catch(() => {});
}
function chrome(){
  document.body.classList.remove("in-lesson"); hideDock(); renderNav(); L = null;
}
function topbar(){ return `<div class="top"><div class="logo">Ясно</div><div class="chips"><span class="chip" title="Дней подряд">🔥 ${streakNow()}</span><span class="chip" title="Очки">⭐ ${S.xp}</span></div></div>`; }

/* =========================== HOME =========================== */
function renderHome(){
  SCREEN = "home"; chrome();
  const nx = nextLesson(), due = dueIds().length, pct = Math.min(100, Math.round(todayXP() / S.goal * 100));
  const first = !Object.keys(S.lessons).length;
  let lastLevel = "";
  app.innerHTML = topbar() + `<div class="fade-in">
    <h1 class="display" style="font-size:clamp(24px,6vw,32px);line-height:1.15;margin:0 0 8px">${first ? "Английский, в котором понятно почему" : "С возвращением. Продолжим?"}</h1>
    <p class="note" style="font-size:16px;margin:0 0 18px">${first ? `${UNITS.length} тем · ${TOTAL_ITEMS} фраз · ${TOTAL_ITEMS * TASK_FORMS} вариантов заданий. Грамматика, лексика и речевые конструкции A1–C1: правила по-русски, разбор типичных ошибок и повторение в нужный момент.` : `Сегодня ${todayXP()} из ${S.goal} очков. ${due ? `К повторению: ${due}.` : "Повторять пока нечего — время нового."}`}</p>
    <div class="goal"><span>🎯</span><div class="bar"><i style="width:${pct}%"></i></div><small>${todayXP()} / ${S.goal}</small></div>
    <div class="actions">
      <button class="action primary" id="go"><span class="em">▶</span><div><b>${nx.fresh ? (seenCount(nx.u) ? "Продолжить урок" : "Начать урок") : "Закрепить слабую тему"}</b><span>${nx.u.title} · урок ${nx.k+1}</span></div></button>
      <button class="action" id="rev" ${due ? "" : "disabled"}><span class="em">🔁</span><div><b>Повторение</b><span>${due ? `${due} ${plural(due,"фраза","фразы","фраз")}` : "На сегодня всё"}</span></div></button>
      <button class="action" id="prac" ${Object.keys(S.items).length >= 4 ? "" : "disabled"}><span class="em">🎧</span><div><b>Тренировка</b><span>10 фраз: в основном слабые и просроченные</span></div></button>
    </div>
    <div class="units">${UNITS.map((u,i) => {
      const lv = u.level !== lastLevel ? `</div><div class="level">${(lastLevel = u.level)} · ${({A1:"Начальный",A2:"Элементарный",B1:"Средний",B2:"Выше среднего",C1:"Продвинутый"})[u.level]}</div><div class="units">` : "";
      const s = strength(u);
      return lv + `<button class="unit ${unitDone(u) ? "done" : ""} ${nx.fresh && nx.u === u ? "cur" : ""}" data-u="${u.id}"><span class="num">${i+1}</span>
        <div><b>${u.title}</b><small>${seenCount(u)} из ${u.items.length} фраз${u.draft ? " · новая" : ""}</small><div class="mbar"><i style="width:${s}%"></i></div></div>
        <span class="lessons" aria-label="Пройдено уроков">${Array.from({length:u.lessons}, (_,k) => `<i class="dotl ${lessonDone(u,k) ? "on" : ""}"></i>`).join("")}</span></button>`; }).join("")}</div>
  </div>`;
  $("#go").onclick = () => startLesson(nx.u, nx.k);
  $("#rev").onclick = startReview;
  $("#prac").onclick = startPractice;
  $$(".unit").forEach(b => b.onclick = () => openUnit(UNIT[b.dataset.u]));
}
let sheetSeq = 0;
function sheet(html, onMount){
  const opener = document.activeElement, sid = "sh" + (++sheetSeq);
  const bg = document.createElement("div"); bg.className = "sheet-bg";
  bg.innerHTML = `<div class="sheet fade-in" role="dialog" aria-modal="true" aria-labelledby="${sid}" tabindex="-1">${html}</div>`;
  const h = bg.querySelector("h3"); if (h) h.id = sid;
  document.body.appendChild(bg);
  /* фокус не уходит за пределы диалога; при закрытии возвращается туда, откуда диалог открыли */
  bg.addEventListener("keydown", e => {
    if (e.key === "Escape"){ e.stopPropagation(); close(); return; }
    if (e.key !== "Tab") return;
    const f = $$("button, textarea, input, select, a[href]", bg).filter(x => !x.disabled && x.offsetParent !== null); if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]){ e.preventDefault(); f[f.length-1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length-1]){ e.preventDefault(); f[0].focus(); }
  });
  const close = () => { bg.remove(); if (opener && opener.focus && document.body.contains(opener)) opener.focus({preventScroll:true}); };
  bg.addEventListener("click", e => { if (e.target === bg) close(); });
  onMount && onMount(bg, close);
  if (!bg.contains(document.activeElement)){ const f = $("button, textarea, input, select, a[href]", bg) || $(".sheet", bg); f && f.focus({preventScroll:true}); }
  return close;
}
function openUnit(u){
  sheet(`<h3>${u.title}</h3><p class="sub">${u.level} · повторено 2+ раз: ${strength(u)}%</p>
    ${u.draft ? `<p class="note">Новая тема: проверена автоматически, вычитка носителем языка ещё не проведена. Если ответ кажется верным, а засчитан как ошибка, — нажмите «Сообщить: мой вариант допустим».</p>` : ""}
    <div class="rule">${u.rule.map(p => `<p>${p}</p>`).join("")}</div>
    ${u.examples.map(([e,r]) => `<div class="ex"><div>${pretty(e)}</div><span>${r}</span></div>`).join("")}
    <div class="trap">⚠️ ${u.trap}</div>
    <div class="col">${Array.from({length:u.lessons}, (_,k) => `<button class="btn ${k === 0 ? "main" : "ghost"}" data-k="${k}">Урок ${k+1}${lessonDone(u,k) ? " · пройден ✓" : ""}</button>`).join("")}<button class="btn ghost" id="cl">Закрыть</button></div>`,
    (bg, close) => { $$("[data-k]", bg).forEach(b => b.onclick = () => { close(); startLesson(u, +b.dataset.k); }); $("#cl", bg).onclick = close; const f = $("[data-k]", bg); f && f.focus({preventScroll:true}); });
}
function confirmSheet(text, yes, cb){
  sheet(`<h3>${text}</h3><div class="col" style="margin-top:16px"><button class="btn bad" id="y">${yes}</button><button class="btn ghost" id="n">Остаться</button></div>`,
    (bg, close) => { $("#y", bg).onclick = () => { close(); cb(); }; $("#n", bg).onclick = close; $("#n", bg).focus({preventScroll:true}); });
}

/* =========================== REVIEW / STATS / SETTINGS =========================== */
function renderReview(){
  SCREEN = "review"; chrome();
  const ids = dueIds(), byUnit = {};
  ids.forEach(id => { const u = ITEM[id].unit; byUnit[u] = (byUnit[u] || 0) + 1; });
  const hard = Object.keys(S.items).filter(id => ITEM[id] && S.items[id].lapses > 0).sort((a,b) => S.items[b].lapses - S.items[a].lapses).slice(0, 6);
  app.innerHTML = topbar() + `<div class="fade-in"><h2 class="sec">Повторение</h2>
    <div class="card"><b style="font-size:20px">${ids.length ? `${ids.length} ${plural(ids.length,"фраза","фразы","фраз")} к повторению` : "На сегодня всё повторено"}</b>
      <p class="note">${ids.length ? "Фразы возвращаются, когда пора: трудные — чаще, выученные — реже." : "Загляните завтра — или потренируйтесь на случайных фразах."}</p>
      <div class="col"><button class="btn main" id="rev" ${ids.length ? "" : "disabled"}>Начать повторение</button><button class="btn ghost" id="prac" ${Object.keys(S.items).length >= 4 ? "" : "disabled"}>Тренировка · 10 фраз</button></div></div>
    ${Object.keys(byUnit).length ? `<div class="card"><b>Ждут повторения по темам</b>${Object.entries(byUnit).map(([u,n]) => `<div class="kv"><span>${UNIT[u].title}</span><b>${n}</b></div>`).join("")}</div>` : ""}
    ${hard.length ? `<div class="card"><b>Самые трудные фразы</b>${hard.map(id => `<div class="kv"><span>${esc(pretty(ITEM[id].en[0]))}<small class="note" style="display:block">${ITEM[id].ru}</small></span><b>×${S.items[id].lapses}</b></div>`).join("")}</div>` : ""}</div>`;
  $("#rev").onclick = startReview; $("#prac").onclick = startPractice;
}
const BADGES = [
  ["🌱","Первый шаг","Пройти урок", s => Object.keys(s.lessons).length >= 1],
  ["🔥","3 дня подряд","Серия 3 дня", s => (s.streak.best || 0) >= 3],
  ["🔥","Неделя","Серия 7 дней", s => (s.streak.best || 0) >= 7],
  ["🌋","Месяц","Серия 30 дней", s => (s.streak.best || 0) >= 30],
  ["⭐","100 очков","Набрать 100", s => s.xp >= 100],
  ["🏅","500 очков","Набрать 500", s => s.xp >= 500],
  ["🏆","2000 очков","Набрать 2000", s => s.xp >= 2000],
  ["📚","50 фраз","Изучить 50 фраз", s => Object.keys(s.items).length >= 50],
  ["🎓","200 фраз","Изучить 200 фраз", s => Object.keys(s.items).length >= 200],
  ["🧠","Крепкая память","20 фраз закреплено", s => Object.values(s.items).filter(r => Store.stage(r) === "consolidated").length >= 20],
  ["💎","Без ошибок","Урок на 100%", s => s.perfect >= 1],
  ["🎯","Цель дня","Выполнить дневную цель", s => Object.values(s.hist).some(v => v >= s.goal)]
];
function renderStats(){
  SCREEN = "stats"; chrome();
  const days = Array.from({length:7}, (_,i) => addDays(today(), i-6)), vals = days.map(d => S.hist[d] || 0), max = Math.max(10, ...vals);
  const wd = d => ["вс","пн","вт","ср","чт","пт","сб"][new Date(d + "T12:00:00").getDay()];
  const learned = Object.keys(S.items).length, recs = Object.values(S.items), strong = recs.filter(r => r.reps >= 2).length, solid = recs.filter(r => Store.stage(r) === "consolidated").length;
  const overdue = recs.filter(r => r.reps >= 1 && r.due < today()).length, ints = recs.filter(r => r.reps >= 1).map(r => r.int), meanInt = ints.length ? Math.round(ints.reduce((x,y) => x + y, 0) / ints.length) : 0;
  const ret = d => { const r = Store.retention(S, addDays(today(), -(d - 1))); return r.n ? `${Math.round(r.ok / r.n * 100)}% из ${r.n}` : "—"; };
  const CAT = { negation:"отрицание", article:"артикли", be:"глагол be", auxiliary:"вспомогательные глаголы", agreement:"согласование (-s, has/have)", perfect:"Present Perfect", irregular:"неправильные глаголы", "verb-form":"форма глагола (-ing)", tense:"время глагола", preposition:"предлоги", "word-order":"порядок слов", "missing-word":"пропущено слово", lexical:"выбор слова" };
  const topErr = Object.entries(S.errs).sort((a,b) => b[1] - a[1]).slice(0, 5);
  const pct2 = s => s.n ? Math.round(s.ok / s.n * 100) + "%" : "—";
  app.innerHTML = topbar() + `<div class="fade-in"><h2 class="sec">Статистика</h2>
    <div class="card"><b>Очки за неделю</b><div class="week">${days.map((d,i) => `<div class="${i === 6 ? "today" : ""}">${vals[i] || ""}<i style="height:${Math.round(vals[i]/max*84)}px"></i>${wd(d)}</div>`).join("")}</div></div>
    <div class="card">
      <div class="kv"><span>Серия</span><b>🔥 ${streakNow()} · рекорд ${S.streak.best || 0}</b></div>
      <div class="kv"><span>Всего очков</span><b>${S.xp}</b></div>
      <div class="kv"><span>Фраз встречено</span><b>${learned} из ${TOTAL_ITEMS}</b></div>
      <div class="kv"><span>Повторено успешно 2+ раз</span><b>${strong}</b></div>
      <div class="kv"><span>Закреплено (интервал ≥ 3 недель)</span><b>${solid}</b></div>
      <div class="kv"><span>Просрочено к повторению</span><b>${overdue}</b></div>
      <div class="kv"><span>Средний интервал</span><b>${meanInt} дн.</b></div>
      <div class="kv"><span>Удержание за 7 дней</span><b>${ret(7)}</b></div>
      <div class="kv"><span>Удержание за 30 дней</span><b>${ret(30)}</b></div>
      <div class="kv"><span>Уроков пройдено</span><b>${Object.keys(S.lessons).length} из ${UNITS.reduce((n,u) => n + u.lessons, 0)}</b></div>
      <div class="kv"><span>Самостоятельные ответы (письмо, диктовка)</span><b>${pct2(S.stats.prod)} из ${S.stats.prod.n}</b></div>
      <div class="kv"><span>Узнавание (выбор, пропуск, сборка)</span><b>${pct2(S.stats.rec)} из ${S.stats.rec.n}</b></div>
      <div class="kv"><span>Устная практика (не влияет на повторение)</span><b>${pct2(S.stats.speak)} из ${S.stats.speak.n}</b></div></div>
    ${topErr.length ? `<div class="card"><b>Частые ошибки</b>${topErr.map(([c,n]) => `<div class="kv"><span>${CAT[c] || c}</span><b>${n}</b></div>`).join("")}<p class="note">Удержание — доля верных ответов на плановых повторениях, когда фраза уже была выучена.</p></div>` : ""}
    <h2 class="sec">Достижения</h2><div class="badges">${BADGES.map(([e,t,d,f]) => `<div class="bdg ${f(S) ? "on" : ""}"><span class="e">${e}</span><b>${t}</b><span>${d}</span></div>`).join("")}</div></div>`;
}
function renderSettings(){
  SCREEN = "settings"; chrome();
  const seg = (key, vals) => `<div class="seg" data-k="${key}">${vals.map(([v,l]) => `<button data-v="${v}" class="${String(S[key]) === String(v) ? "on" : ""}">${l}</button>`).join("")}</div>`;
  const native = Native(), reminder = native ? getNativeReminder() : "";
  const reminderSeg = native ? `<div class="seg" id="nativeReminder">${[["","Выкл"],["09:00","09:00"],["18:00","18:00"],["20:00","20:00"]].map(([v,l]) => `<button data-v="${v}" class="${reminder === v ? "on" : ""}">${l}</button>`).join("")}</div>` : "";
  app.innerHTML = topbar() + `<div class="fade-in"><h2 class="sec">Настройки</h2><div class="card">
    <div class="set"><div>Цель на день<small>очков</small></div>${seg("goal", [[10,"10"],[20,"20"],[30,"30"],[50,"50"]])}</div>
    <div class="set"><div>Тема оформления</div>${seg("theme", [["auto","Авто"],["light","Светлая"],["dark","Тёмная"]])}</div>
    <div class="set"><div>Звуки</div>${seg("sound", [[true,"Вкл"],[false,"Выкл"]])}</div>
    <div class="set"><div>Скорость речи</div>${seg("rate", [[0.7,"Медленно"],[0.95,"Обычно"],[1.1,"Быстро"]])}</div>
    <div class="set"><div>Принимать мои варианты локально<small>локальные варианты не повышают интервалы SRS</small></div>${seg("trustMine", [[false,"Выкл"],[true,"Вкл"]])}</div>
    ${SR ? `<div class="set"><div>Задания «скажите фразу»<small>только практика: проверяется распознанный текст, а не произношение, на повторение не влияет</small></div>${seg("speakOff", [[false,"Вкл"],[true,"Выкл"]])}</div>` : ""}
    ${native ? `<div class="set"><div>Напоминание о повторении<small>локальное уведомление iPhone, без сервера</small></div>${reminderSeg}</div><p class="note" id="nativeNote">Уведомление хранится только на устройстве.</p>` : ""}</div>
    <div class="card"><b>Прогресс и перенос</b><p class="note">Прогресс хранится в этом браузере. Чтобы перенести на другое устройство или не потерять при очистке данных Safari — сохраните копию.</p>
      <div class="col"><button class="btn ghost" id="exp">Сохранить копию прогресса</button><button class="btn ghost" id="imp">Загрузить копию</button><button class="btn ghost" id="acc">Сбросить «мои варианты» и кандидатов (${Object.values(S.accepted).concat(Object.values(S.candidates)).reduce((n,a) => n + a.length, 0)})</button><button class="btn ghost" id="rst" style="color:var(--bad)">Стереть весь прогресс</button></div></div>
    <div class="card"><b>На iPhone</b><p class="note">${native ? "Нативная iOS-версия: тактильный отклик, локальные напоминания и системное меню «Поделиться» включены." : "Откройте опубликованную по HTTPS страницу в Safari → «Поделиться» → «На экран “Домой”». После первого запуска основные уроки доступны офлайн."}</p></div>
    <p class="note" style="text-align:center">Ясно · ${UNITS.length} тем · ${TOTAL_ITEMS} фраз · грамматика, лексика и речевые конструкции A1–C1</p></div>`;
  $$(".seg[data-k] button").forEach(b => b.onclick = () => {
    const k = b.parentNode.dataset.k; let v = b.dataset.v;
    S[k] = ["goal","rate"].includes(k) ? +v : ["sound","speakOff","trustMine"].includes(k) ? v === "true" : v;
    if (k === "theme") applyTheme(); save(); if (k === "sound" && S.sound) sfx.ok(); if (k === "rate") say("Hello! Nice to meet you.");
    renderSettings();
  });
  const nr = $("#nativeReminder");
  if (nr) $$("button", nr).forEach(b => b.onclick = async () => {
    $$("button", nr).forEach(x => x.disabled = true);
    const ok = await setNativeReminder(b.dataset.v);
    if (ok) renderSettings();
    else {
      $$("button", nr).forEach(x => x.disabled = false);
      const note = $("#nativeNote"); if (note){ note.textContent = "Не удалось включить уведомления. Проверьте разрешение для «Ясно» в настройках iPhone."; note.style.color = "var(--bad)"; }
    }
  });
  $("#exp").onclick = () => {
    const payload = JSON.stringify(S), bytes = new Blob([payload]).size;
    sheet(`<h3>Копия прогресса</h3><p class="sub">Скопируйте текст и сохраните в заметках, либо скачайте файл. Размер: ${(bytes/1024).toFixed(1)} КБ.</p><textarea class="json" id="j" readonly>${esc(payload)}</textarea><div class="col" style="margin-top:12px"><button class="btn main" id="cp">Скопировать</button>${Native() ? '<button class="btn ghost" id="share">Поделиться через iPhone</button>' : ""}<button class="btn ghost" id="dl">Скачать файл</button><button class="btn ghost" id="x">Закрыть</button></div>`, (bg, close) => {
      $("#cp", bg).onclick = async () => {
        const t = $("#j", bg), b = $("#cp", bg); t.select(); let ok = false;
        try { if (navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(t.value); ok = true; } } catch(e){}
        if (!ok){ try { ok = document.execCommand("copy"); } catch(e){} }
        b.textContent = ok ? "Скопировано ✓" : "Не удалось — выделите текст и скопируйте вручную";
      };
      const sh = $("#share", bg); if (sh) sh.onclick = async () => {
        sh.disabled = true;
        const n = Native(), result = n ? await n.shareProgress(payload, "yasno-progress-" + today() + ".json") : { ok:false };
        sh.textContent = result.ok ? "Меню «Поделиться» открыто ✓" : "Не удалось открыть «Поделиться»";
        sh.disabled = false;
      };
      $("#dl", bg).onclick = () => { const blob = new Blob([payload], {type:"application/json"}), url = URL.createObjectURL(blob), a = document.createElement("a"); a.href = url; a.download = "yasno-progress-" + today() + ".json"; a.click(); setTimeout(() => URL.revokeObjectURL(url), 0); };
      $("#x", bg).onclick = close;
    });
  };
  $("#imp").onclick = () => sheet(`<h3>Загрузить копию</h3><p class="sub">Вставьте сохранённый текст. Текущий прогресс будет заменён. Максимальный размер — 10 МБ.</p><label class="btn ghost" style="display:block;text-align:center;margin-bottom:10px">Выбрать файл…<input type="file" id="f" accept="application/json,.json" style="display:none"></label><textarea class="json" id="j" placeholder='или вставьте текст копии сюда'></textarea><p class="note hidden" id="err" style="color:var(--bad)">Не удалось прочитать данные.</p><div class="col" style="margin-top:12px"><button class="btn main" id="ok">Загрузить</button><button class="btn ghost" id="x">Отмена</button></div>`, (bg, close) => {
    $("#x", bg).onclick = close;
    const fail = msg => { const e = $("#err", bg); e.textContent = msg || "Не удалось прочитать данные."; e.classList.remove("hidden"); };
    $("#f", bg).onchange = e => { const file = e.target.files[0]; if (!file) return; if (file.size > BACKUP_MAX_BYTES){ fail("Файл больше 10 МБ."); return; } file.text().then(t => { $("#j", bg).value = t; $("#err", bg).classList.add("hidden"); }).catch(() => fail()); };
    $("#ok", bg).onclick = () => { try { const txt = $("#j", bg).value; if (!txt.trim() || new Blob([txt]).size > BACKUP_MAX_BYTES) throw new Error("size"); const d = JSON.parse(txt); if (!d || typeof d !== "object" || Array.isArray(d) || (!d.items && !d.streak)) throw new Error("shape"); const nextState = Store.sanitize(d, CTX); S = nextState; storageBlocked = false; if (!save(true)) throw new Error("storage"); applyTheme(); close(); renderSettings(); } catch(e){ fail(e && e.message === "storage" ? "Копия прочитана, но браузер не смог сохранить её локально. Скачайте резервную копию и проверьте настройки хранения." : "Файл не похож на корректную копию прогресса Ясно."); } }; });
  $("#acc").onclick = () => { S.accepted = {}; S.candidates = {}; save(); renderSettings(); };
  $("#rst").onclick = () => confirmSheet("Стереть весь прогресс?", "Стереть", () => { S = freshState(); storageBlocked = false; save(true); applyTheme(); renderSettings(); });
}

/* =========================== LESSON ENGINE =========================== */
function buildTask(it, type){
  const unitItems = UNIT[it.unit].items;
  const others = unitItems.filter(x => x !== it);
  if (type === "gap" && !splitKey(it.en[0], it.key)) type = "tiles";
  if (type === "listenChoose" && !canTTS) type = "choose";
  if (type === "listen" && !canTTS) type = "type";
  if (type === "tiles"){
    const words = tokens(it.en[0]);
    const pool = shuffle(others.flatMap(x => tokens(x.en[0]))).filter(w => !words.some(v => v.toLowerCase() === w.toLowerCase())).filter((w,i,a) => a.indexOf(w) === i).slice(0, 3);
    return { type, it, bank: shuffle(words.concat(pool)) };
  }
  if (type === "choose") return { type, it, options: shuffle([it.ru].concat(shuffle(others).slice(0, 3).map(x => x.ru))) };
  if (type === "listenChoose") return { type, it, options: shuffle([it.en[0]].concat(shuffle(others).slice(0, 3).map(x => x.en[0]))) };
  if (type === "gap") return { type, it, options: shuffle([it.key].concat(it.opts)) };
  return { type, it };
}
function matchTask(items){
  const pick = shuffle(items).slice(0, 5);
  return { type:"match", it: pick[0], pairs: pick, left: shuffle(pick), right: shuffle(pick) };
}
function startLesson(u, k){
  const items = u.items.slice(k * PER_LESSON, (k + 1) * PER_LESSON);
  const easy = ["choose","gap","tiles","listenChoose","gap","choose","tiles","gap"];
  const hard = ["type","listen","type","type","listen","type","listen","type"]; /* все 8 фраз проверяются самостоятельным ответом */
  const rot = k * 3;
  const intro = items.map((it, i) => buildTask(it, easy[(i + rot) % easy.length]));
  const produce = shuffle(items).map((it, i) => buildTask(it, hard[(i + rot) % hard.length]));
  const review = shuffle(dueIds().filter(id => ITEM[id].unit !== u.id)).slice(0, 3).map(id => buildTask(ITEM[id], "type"));
  review.forEach((t, i) => produce.splice(2 + i * 3, 0, t));
  if (SR && !S.speakOff) produce.splice(Math.min(4, produce.length), 0, { type:"speak", it: items[Math.floor(Math.random() * items.length)] });
  const tasks = intro.concat([matchTask(items)], produce);
  L = { title: u.title + " · урок " + (k+1), unit: u.id, lesson: k, tasks, i: 0, total: tasks.length, done: 0, firstTry: {}, mistakes: [], uncertain: [], xp: 0, kind: "lesson", askedP: 0, rightP: 0, askedR: 0, rightR: 0 };
  renderTask();
}
/* Приоритет повторения: просрочка (дни) + ошибки в прошлом + слабость (доля неверных самостоятельных ответов). */
const daysBetween = (a, b) => Math.round((Date.parse(b + "T12:00:00") - Date.parse(a + "T12:00:00")) / 864e5);
function priority(id){ const r = S.items[id], over = Math.max(0, daysBetween(r.due, today())); const weak = r.prod ? 1 - r.ok / r.prod : 0.5; return Math.min(over, 60) + r.lapses * 2 + weak * 3; }
function startReview(){
  const ids = dueIds().sort((a,b) => priority(b) - priority(a)).slice(0, 12);
  if (!ids.length) return go("home");
  const mix = ["type","listen"]; /* повторение проверяет самостоятельный ответ */
  const tasks = shuffle(ids).map((id, i) => buildTask(ITEM[id], mix[i % mix.length]));
  L = { title:"Повторение", tasks, i:0, total:tasks.length, done:0, firstTry:{}, mistakes:[], uncertain:[], xp:0, kind:"review", askedP:0, rightP:0, askedR:0, rightR:0 };
  renderTask();
}
/* Тренировка: ~65% слабые и просроченные фразы, ~25% давно изученное (перемежение), ~10% случайные. */
function startPractice(){
  const all = Object.keys(S.items).filter(id => ITEM[id]);
  if (all.length < 4) return;
  const N = 10, pick = new Set(), take = (arr, k) => { for (const id of arr){ if (pick.size >= N || k <= 0) break; if (!pick.has(id)){ pick.add(id); k--; } } };
  const weak = all.filter(id => { const r = S.items[id]; return r.lapses > 0 || r.due <= today() || (r.prod && r.ok / r.prod < 0.8) || r.reps === 0; }).sort((a,b) => priority(b) - priority(a));
  const old = shuffle(all.filter(id => S.items[id].reps >= 2)).sort((a,b) => S.items[b].int - S.items[a].int);
  take(weak, 7); take(old, 2); take(shuffle(all), N);
  const ids = shuffle([...pick]);
  const mix = ["type","listen","type","gap","tiles","type"];
  const tasks = ids.map((id, i) => buildTask(ITEM[id], mix[i % mix.length]));
  L = { title:"Тренировка", tasks, i:0, total:tasks.length, done:0, firstTry:{}, mistakes:[], uncertain:[], xp:0, kind:"practice", askedP:0, rightP:0, askedR:0, rightR:0 };
  renderTask();
}
const LABELS = { type:"Переведите на английский", tiles:"Соберите перевод", choose:"Выберите перевод", gap:"Вставьте пропуск", listen:"Напишите, что услышали", listenChoose:"Что вы услышали?", match:"Найдите пары", speak:"Скажите фразу по-английски (практика)" };
function renderTask(){
  SCREEN = "lesson"; document.body.classList.add("in-lesson"); hideDock(); answer = null; locked = false; checkEnabled = false;
  renderNav();
  const t = L.tasks[L.i], it = t.it;
  const isRev = L.kind !== "lesson" || it.unit !== L.unit;
  const tag = isRev && L.kind === "lesson" ? `<span class="badge">повтор</span>` : "";
  let body = `<div class="task-label">${LABELS[t.type]} ${tag}</div>`;
  if (t.type === "type") body += `<p class="prompt">${it.ru}</p><textarea class="answer" id="ans" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Напишите по-английски"></textarea>`;
  else if (t.type === "tiles") body += `<p class="prompt">${it.ru}</p><div class="tiles-answer" id="ta" aria-label="Ваш ответ"></div><div class="tiles" id="tb">${t.bank.map((w,i) => `<button class="tile" data-i="${i}">${esc(pretty(w))}</button>`).join("")}</div>`;
  else if (t.type === "choose") body += `<p class="prompt">${esc(pretty(it.en[0]))}</p>${canTTS ? `<div class="speakrow"><button class="speakbtn" id="sp" aria-label="Прослушать">🔊</button></div>` : ""}<div class="opts">${t.options.map((o,i) => `<button class="opt" data-i="${i}"><kbd>${i+1}</kbd>${esc(o)}</button>`).join("")}</div>`;
  else if (t.type === "listenChoose") body += `<div class="speakrow"><button class="speakbtn" id="sp" aria-label="Прослушать">🔊</button><button class="speakbtn slow" id="sps">Медленно</button></div><div class="opts">${t.options.map((o,i) => `<button class="opt" data-i="${i}"><kbd>${i+1}</kbd>${esc(pretty(o))}</button>`).join("")}</div>`;
  else if (t.type === "gap"){
    const p = splitKey(it.en[0], it.key);
    body += `<p class="prompt">${esc(pretty(p[0]))}<span class="blank" id="bl">&nbsp;</span>${esc(pretty(p[1]))}</p><p class="note" style="margin:-8px 0 18px">${it.ru}</p><div class="opts">${t.options.map((o,i) => `<button class="opt" data-i="${i}"><kbd>${i+1}</kbd>${esc(pretty(o))}</button>`).join("")}</div>`;
  }
  else if (t.type === "listen") body += `<div class="speakrow"><button class="speakbtn" id="sp" aria-label="Прослушать">🔊</button><button class="speakbtn slow" id="sps">Медленно</button></div><textarea class="answer" id="ans" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Напишите по-английски"></textarea>`;
  else if (t.type === "match") body += `<div class="match"><div class="col" id="ml">${t.left.map(x => `<button class="mt" data-id="${x.id}" data-s="l">${esc(pretty(x.en[0]))}</button>`).join("")}</div><div class="col" id="mr">${t.right.map(x => `<button class="mt" data-id="${x.id}" data-s="r">${esc(x.ru)}</button>`).join("")}</div></div>`;
  else if (t.type === "speak") body += `<p class="prompt">${it.ru}</p><button class="mic" id="mic">🎙 Нажмите и говорите</button><div class="heard" id="heard"></div><button class="linkbtn" id="nospeak">Не могу говорить сейчас</button>`;
  app.innerHTML = `<div class="lesson-top"><button class="iconbtn" id="quit" aria-label="Выйти из урока">✕</button><div class="progress" role="progressbar" aria-valuenow="${L.done}" aria-valuemax="${L.total}"><i style="width:${Math.min(100, L.done / L.total * 100)}%"></i></div></div><div class="fade-in">${body}</div>`;
  $("#quit").onclick = quit;
  if (t.type !== "match") showCheck(false);

  if (t.type === "type" || t.type === "listen"){
    const a = $("#ans"); a.addEventListener("input", () => { answer = a.value; showCheck(a.value.trim().length > 0); });
    if (matchMedia("(hover:hover)").matches || t.type === "type") setTimeout(() => a.focus(), 60);
  }
  if (["choose","listenChoose","listen"].includes(t.type)){
    const sp = $("#sp"); if (sp) sp.onclick = () => say(it.en[0]);
    const sps = $("#sps"); if (sps) sps.onclick = () => say(it.en[0], 0.65);
    if (t.type !== "choose") setTimeout(() => say(it.en[0]), 250);
  }
  if (t.type === "tiles"){
    const ta = $("#ta"), tb = $("#tb"), picked = [];
    const sync = () => {
      ta.innerHTML = picked.map((i,k) => `<button class="tile" data-k="${k}">${esc(pretty(t.bank[i]))}</button>`).join("");
      $$(".tile", tb).forEach(b => b.classList.toggle("used", picked.includes(+b.dataset.i)));
      $$(".tile", ta).forEach(b => b.onclick = () => { picked.splice(+b.dataset.k, 1); sync(); });
      answer = picked.map(i => t.bank[i]).join(" "); showCheck(picked.length > 0);
    };
    $$(".tile", tb).forEach(b => b.onclick = () => { if (!picked.includes(+b.dataset.i)){ picked.push(+b.dataset.i); sync(); } });
    t.pop = () => { picked.pop(); sync(); };
  }
  if (["choose","gap","listenChoose"].includes(t.type)){
    $$(".opt").forEach(b => b.onclick = () => {
      $$(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel");
      answer = t.options[+b.dataset.i]; showCheck(true);
      if (t.type === "gap"){ const bl = $("#bl"); bl.textContent = pretty(answer); bl.classList.add("filled"); }
      if (t.type === "listenChoose") say(answer);
      const c = $("#chk"); c && c.focus({preventScroll:true});
    });
  }
  if (t.type === "match") runMatch(t);
  if (t.type === "speak") runSpeak();
}
function quit(){ confirmSheet("Выйти из урока?", "Выйти", () => go("home")); }
function showCheck(enabled){
  checkEnabled = enabled; dock.className = "dock";
  dockIn.innerHTML = `<button class="btn main" id="chk" ${enabled ? "" : "disabled"}>Проверить</button>`;
  $("#chk").onclick = check;
}
function runMatch(t){
  let sel = null, left = t.pairs.length, miss = 0;
  $$(".mt").forEach(b => b.onclick = () => {
    if (b.classList.contains("gone")) return;
    if (b.dataset.s === "l") say(ITEM[b.dataset.id].en[0]);
    if (sel && sel.dataset.s === b.dataset.s){ sel.classList.remove("sel"); sel = b; b.classList.add("sel"); return; }
    if (!sel){ sel = b; b.classList.add("sel"); return; }
    if (sel.dataset.id === b.dataset.id){
      [sel, b].forEach(x => { x.classList.remove("sel"); x.classList.add("gone"); }); sel = null; sfx.ok();
      if (--left === 0){
        L.done++; const g = miss ? 5 : 10; L.xp += g; addXP(g); save(); locked = true; sfx.win();
        dock.className = "dock ok";
        dockIn.innerHTML = `<p class="fb-title">${miss ? "Пары найдены" : "Все пары без ошибок"}</p><button class="btn ok" id="next">Дальше</button>`;
        const nx = $("#next"); nx.onclick = next; nx.focus();
      }
    } else {
      miss++; const a = sel, c = b; sel = null; [a, c].forEach(x => { x.classList.remove("sel"); x.classList.add("bad", "shake"); }); sfx.bad();
      setTimeout(() => [a, c].forEach(x => x.classList.remove("bad", "shake")), 450);
    }
  });
}
function runSpeak(){
  const mic = $("#mic"), heard = $("#heard");
  $("#nospeak").onclick = () => { S.speakOff = true; save(); L.tasks.splice(L.i, 1); L.total--; L.i >= L.tasks.length ? finish() : renderTask(); };
  mic.onclick = () => {
    try {
      const r = new SR(); r.lang = "en-US"; r.interimResults = false; /* проверяем только окончательный результат распознавания */ r.maxAlternatives = 3;
      mic.classList.add("on"); mic.textContent = "● Слушаю…";
      r.onresult = e => { const fin = Array.from(e.results).filter(x => x.isFinal); if (!fin.length) return; const txt = fin.map(x => x[0].transcript).join(" "); heard.textContent = "Распознано: " + txt; answer = txt; showCheck(true); };
      r.onerror = e => { mic.classList.remove("on"); mic.textContent = "🎙 Попробовать ещё раз"; heard.textContent = e.error === "not-allowed" ? "Нет доступа к микрофону. Разрешите его в настройках или нажмите «Не могу говорить сейчас»." : "Не удалось распознать речь. Попробуйте ещё раз."; };
      r.onend = () => { mic.classList.remove("on"); mic.textContent = "🎙 Сказать ещё раз"; };
      r.start();
    } catch(e){ heard.textContent = "Распознавание речи здесь недоступно."; }
  };
}
function check(){
  if (locked) return;
  const t = L.tasks[L.i], it = t.it;
  if (answer == null || !String(answer).trim()) return;
  let ok, source = "official";
  if (t.type === "choose") ok = answer === it.ru;
  else if (t.type === "gap") ok = answer === it.key;
  else if (t.type === "listenChoose") ok = answer === it.en[0];
  else {
    const official = isOfficialCorrect(it, answer), local = !official && isLocalCorrect(it, answer);
    if (!official && !local){ const a = assess(it, answer, null); if (a.status === "uncertain") { resolveUncertain(t, a); return; } }
    ok = official || local; source = local ? "local" : "official";
  }
  resolve(ok, t, source);
}
const PROD = ["type","listen"]; /* Только официальный самостоятельный письменный ответ в уроке/повторении меняет SRS. Свободная тренировка, речь, локальные и неопределённые варианты — практика. */
function resolveUncertain(t, assessment){
  locked = true;
  const it = t.it, given = String(answer || "").trim();
  L.done++; L.uncertain.push({ it, given });
  const g = 2; L.xp += g; addXP(g); save();
  announce("Ответ отличается от эталона. Он не засчитан как ошибка и не влияет на интервалы повторения.");
  prepareFeedback();
  dock.className = "dock";
  dockIn.innerHTML = `<p class="fb-title">Нужна сверка</p><p class="fb-mine">Ваш ответ: ${esc(pretty(given))}</p><p class="fb-text fb-right">Один из эталонов: <b>${esc(pretty(it.en[0]))}</b></p><p class="fb-why">Формулировка отличается лексически. Без семантической проверки приложение не считает её ни правильной, ни ошибочной — SRS и статистика памяти не меняются.</p><div class="fb-links">${canTTS ? `<button class="linkbtn" id="fbSay">🔊 Прослушать эталон</button>` : ""}<button class="linkbtn" id="fbMine">${trustMine() ? "Сохранить мой вариант локально" : "Сохранить как кандидат"}</button><button class="linkbtn" id="fbRule">Правило</button></div><button class="btn main" id="next">Дальше</button>`;
  $("#next").onclick = next; $("#next").focus({preventScroll:true});
  const fs = $("#fbSay"); if (fs) fs.onclick = () => say(it.en[0]);
  $("#fbRule").onclick = () => openUnit(UNIT[it.unit]);
  $("#fbMine").onclick = () => {
    const field = trustMine() ? "accepted" : "candidates";
    S[field][it.id] = Array.from(new Set((S[field][it.id] || []).concat([given.slice(0,200)]))).slice(-5); save();
    $("#fbMine").textContent = trustMine() ? "Сохранено локально ✓" : "Кандидат сохранён ✓"; $("#fbMine").disabled = true;
  };
}

const stamp = (r, id) => { r.h = HASH[id].h; r.hvar = HASH[id].v; r.hv = HASH_VERSION; return r; };
function resolve(ok, t, source = "official"){
  locked = true;
  const it = t.it, local = source === "local", prod = PROD.includes(t.type), speak = t.type === "speak", fkey = it.id + (prod ? "|p" : speak ? "|s" : "|r"), first = !(fkey in L.firstTry);
  if (first){
    L.firstTry[fkey] = ok;
    if (prod && !local){
      L.askedP++; if (ok) L.rightP++;
      if (L.kind !== "practice"){ stamp(Store.srsProduce(S, it.id, ok, today(), addDays), it.id); S.stats.prod.n++; if (ok) S.stats.prod.ok++; else Store.addError(S, E.diagnoseCat(it, answer)[0]); }
    }
    else if (speak && !local){ S.stats.speak.n++; if (ok) S.stats.speak.ok++; }
    else if (!prod && !speak){ stamp(Store.srsRecognize(S, it.id, today()), it.id); S.stats.rec.n++; L.askedR++; if (ok){ S.stats.rec.ok++; L.rightR++; } }
  }
  if (ok){ L.done++; const g = local ? 4 : first ? (prod ? 10 : 6) : 5; L.xp += g; addXP(g); sfx.ok(); }
  else {
    L.mistakes.push({ it, given: answer });
    if (first) L.tasks.push(buildTask(it, t.type === "choose" || t.type === "listenChoose" ? "tiles" : t.type));
    else L.done++; /* вторая ошибка по той же фразе не создаёт бесконечную очередь повторов */
    sfx.bad();
  }
  save();
  const typed = ["type","listen","tiles","speak"].includes(t.type);
  const unit = UNIT[it.unit];
  let mine = "", right = esc(pretty(it.en[0])), diag = null, near = false, diagCat = null;
  if (!ok && typed){
    const d = wordDiff(it, answer), dc = E.diagnoseCat(it, answer); mine = d.mine; right = d.right; diagCat = dc[0]; diag = dc[1];
    const critical = ["negation","auxiliary","agreement","perfect","tense","word-order"].includes(diagCat);
    near = !critical && similarity(closest(it, answer), answer) >= 0.85;
  }
  const alt = ok && !local && typed && it.en.length > 1 && !isSame(answer, it.en[0]) ? `<p class="fb-text note">Ещё можно: ${esc(pretty(it.en[0]))}</p>` : "";
  announce(local ? "Принято локально. На интервалы повторения не влияет." : ok ? "Верно." : `Не совсем. Правильно: ${it.en[0]}`);
  prepareFeedback();
  dock.className = "dock " + (ok ? "ok" : "bad");
  dockIn.innerHTML = `
    <p class="fb-title">${local ? "Принято локально" : ok ? "Верно" : near ? "Почти" : "Не совсем"}</p>
    ${local ? `<p class="fb-why">Этот пользовательский вариант разрешён только локально и не повышает интервалы повторения. Для подтверждения знания нужен официальный вариант.</p>` : ok ? alt : `${mine ? `<p class="fb-mine">Ваш ответ: ${mine}</p>` : ""}<p class="fb-text fb-right">Правильно: <b>${right}</b></p><p class="fb-why">${diag || "⚠️ " + unit.trap}</p>`}
    <div class="fb-links">
      ${canTTS ? `<button class="linkbtn" id="fbSay">🔊 Прослушать</button>` : ""}
      ${!ok && ["type","listen","tiles"].includes(t.type) ? `<button class="linkbtn" id="fbMine">${trustMine() ? "Использовать мой вариант локально" : "Сообщить: мой вариант допустим"}</button>` : ""}
      <button class="linkbtn" id="fbRule">Правило</button>
    </div>
    <button class="btn ${ok ? "ok" : "bad"}" id="next">Дальше</button>`;
  const nx = $("#next"); nx.onclick = next; nx.focus({preventScroll:true});
  const fs = $("#fbSay"); if (fs) fs.onclick = () => say(it.en[0]);
  $("#fbRule").onclick = () => openUnit(unit);
  const fm = $("#fbMine"); if (fm) fm.onclick = () => {
    if (!answer || answer.trim().split(/\s+/).length < 2) return;
    if (!trustMine()){
      /* Строгий режим: вариант только записывается как кандидат и не влияет ни на оценку, ни на повторение. */
      S.candidates[it.id] = (S.candidates[it.id] || []).concat([answer.trim().slice(0, 200)]).slice(-5); save();
      dockIn.innerHTML = `<p class="fb-title">Записано</p><p class="fb-why">Вариант сохранён как кандидат и пока не засчитывается. Его можно проверить и затем добавить в официальный набор; локальное принятие не повышает интервалы SRS.</p><button class="btn bad" id="next">Дальше</button>`;
      const n1 = $("#next"); n1.onclick = next; n1.focus({preventScroll:true}); return;
    }
    /* Режим доверия: вариант сохраняется локально и будет приниматься в следующий раз.
       Прошлую попытку он не переписывает: SRS и статистика остаются такими, какими их зафиксировала проверка. */
    S.accepted[it.id] = (S.accepted[it.id] || []).concat([answer.trim().slice(0, 200)]).slice(-5); save();
    dockIn.innerHTML = `<p class="fb-title">Сохранено локально</p><p class="fb-why">Вариант будет приниматься локально в следующий раз, но не будет повышать интервалы SRS. Эта попытка остаётся ошибкой: статистика памяти не переписывается.</p><button class="btn bad" id="next">Дальше</button>`;
    const n2 = $("#next"); n2.onclick = next; n2.focus({preventScroll:true});
  };
}
const isSame = (a, b) => expansions(a)[0] === expansions(b)[0];
function next(){
  if (!locked) return;
  const nx = $("#next"); if (nx) nx.disabled = true;
  locked = false;
  L.i++;
  if (L.i >= L.tasks.length) finish(); else renderTask();
}

function finish(){
  SCREEN = "result"; hideDock(); document.body.classList.add("in-lesson"); renderNav();
  const before = todayXP() - L.xp >= S.goal;
  const accP = L.askedP ? Math.round(L.rightP / L.askedP * 100) : null, accR = L.askedR ? Math.round(L.rightR / L.askedR * 100) : null;
  const acc = accP !== null ? accP : (accR !== null ? accR : 100);
  if (L.kind === "lesson"){
    const key = L.unit + ":" + L.lesson, rec = S.lessons[key] || { n:0, best:0 };
    rec.n++; rec.best = Math.max(rec.best, acc); S.lessons[key] = rec;
    if (accP === 100 && L.askedP >= 5 && !L.uncertain.length) S.perfect = (S.perfect || 0) + 1;
  }
  const bonus = 5 + (acc === 100 ? 5 : 0); L.xp += bonus; addXP(bonus); save(); sfx.win();
  const goalHit = !before && todayXP() >= S.goal;
  const seen = new Set(), uniq = L.mistakes.filter(m => !seen.has(m.it.id) && seen.add(m.it.id));
  app.innerHTML = `<div class="result fade-in">
    <h1>${acc >= 90 ? "Отлично" : acc >= 70 ? "Хороший урок" : "Урок пройден"}</h1><p class="note">${L.title}${accR !== null && accP !== null ? ` · узнавание ${accR}%` : ""}${L.uncertain.length ? ` · ${L.uncertain.length} ${plural(L.uncertain.length,"ответ требует","ответа требуют","ответов требуют")} сверки` : ""}</p>
    <div class="stats"><div class="stat"><b>+${L.xp}</b><span>очков</span></div><div class="stat"><b>${acc}%</b><span>самостоятельных ответов верно</span></div><div class="stat"><b>🔥 ${streakNow()}</b><span>${plural(streakNow(),"день","дня","дней")} подряд</span></div></div>
    ${goalHit ? `<p class="display" style="font-size:18px">🎯 Цель на день выполнена!</p>` : ""}
    ${uniq.length ? `<div class="mist"><b>Вернутся в повторении</b>${uniq.map(m => `<div>${esc(pretty(m.it.en[0]))}<small>${m.it.ru}</small></div>`).join("")}</div>` : ""}${L.uncertain.length ? `<div class="mist"><b>Не оценены автоматически</b>${L.uncertain.slice(0,8).map(m => `<div>${esc(pretty(m.given))}<small>Эталон: ${esc(pretty(m.it.en[0]))}</small></div>`).join("")}</div>` : ""}
    <div class="col"><button class="btn main" id="home">Дальше</button></div></div>`;
  $("#home").onclick = () => go("home"); $("#home").focus();
}

/* =========================== КЛАВИАТУРА (компьютер) =========================== */
document.addEventListener("keydown", e => {
  if (SCREEN !== "lesson") return;
  if (document.querySelector(".sheet-bg")) { if (e.key === "Escape") document.querySelector(".sheet-bg").remove(); return; }
  const tag = document.activeElement && document.activeElement.tagName, t = L && L.tasks[L.i];
  if (e.key === "Escape"){ quit(); return; }
  if (e.key === "Enter" && !e.shiftKey){
    if (locked){ e.preventDefault(); next(); return; }
    if (tag === "TEXTAREA"){ e.preventDefault(); if (checkEnabled) check(); return; }
    if (tag === "BUTTON"){
      const b = document.activeElement;
      if (checkEnabled && (b.classList.contains("tile") || b.classList.contains("opt"))){ e.preventDefault(); check(); }
      return;
    }
    if (checkEnabled){ e.preventDefault(); check(); }
    return;
  }
  if (locked || tag === "TEXTAREA" || !t) return;
  if (/^[1-9]$/.test(e.key)){ const o = $$(".opt")[+e.key - 1]; if (o){ e.preventDefault(); o.click(); } }
  if (e.key === "Backspace" && t.pop){ e.preventDefault(); t.pop(); }
});

/* =========================== START =========================== */
syncVisualViewport();
if (window.visualViewport) window.visualViewport.addEventListener("resize", syncVisualViewport);
window.addEventListener("orientationchange", () => setTimeout(syncVisualViewport, 80));
applyTheme();
matchMedia("(prefers-color-scheme: dark)").addEventListener && matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
go("home");
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js", {scope:"./"}).then(r => r.update()).catch(e => console.warn("Офлайн-режим недоступен:", e && e.message)));
}
window.__yasno = { UNITS, ITEM, expansions, isCorrect, assess, diagnose, wordDiff, splitKey, save, get S(){ return S; }, get task(){ return L && L.tasks[L.i]; }, get L(){ return L; }, startLesson, renderTask, startReview };
})();
