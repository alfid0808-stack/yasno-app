/* Движок проверки ответов: чистые функции, без DOM и без состояния пользователя.
   Работает в браузере (window.YasnoEngine) и в Node (tools/*.js). */
(function(root){
"use strict";
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pretty = s => s.replace(/'/g, "’");
const tokens = s => s.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);

/* =========================== ПРОВЕРКА ОТВЕТОВ =========================== */
const IRREG = {"won't":["will not"],"can't":["cannot"],"cannot":["cannot"],"let's":["let us"],"i'm":["i am"],
  "im":["i am"],"dont":["do not"],"doesnt":["does not"],"didnt":["did not"],"isnt":["is not"],"arent":["are not"],"wasnt":["was not"],"werent":["were not"],
  "cant":["cannot"],"havent":["have not"],"hasnt":["has not"],"ive":["i have"],"youre":["you are"],"theyre":["they are"],"wont":["will not"]};
const WORDMAP = {"television":"tv","colour":"color","favourite":"favorite","okay":"ok","centre":"center","mum":"mom","grey":"gray","theatre":"theater","0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve"};
const SUBJ = /^(he|she|it|that|there|here|what|where|who|how|when|why|everyone|someone|nobody|everything|something)$/;
const PRON = /^(i|you|he|she|it|we|they|who|that|there)$/;
function tokVariants(t){
  if (IRREG[t]) return IRREG[t];
  if (/n't$/.test(t) && t.length > 3) return [t.slice(0,-3) + " not"];
  let m;
  if ((m = /^(.+)'re$/.exec(t))) return [m[1] + " are"];
  if ((m = /^(.+)'ve$/.exec(t))) return [m[1] + " have"];
  if ((m = /^(.+)'ll$/.exec(t))) return [m[1] + " will"];
  if ((m = /^(.+)'m$/.exec(t))) return [m[1] + " am"];
  if ((m = /^(.+)'s$/.exec(t)) && SUBJ.test(m[1])) return [m[1] + " is", m[1] + " has"];
  if ((m = /^(.+)'d$/.exec(t)) && PRON.test(m[1])) return [m[1] + " would", m[1] + " had"];
  return [WORDMAP[t] || t];
}
/* Возвращает все допустимые расширения сокращений (it's → it is / it has). */
function expansions(s){
  const clean = s.toLowerCase().replace(/[’‘`´]/g, "'").replace(/o'clock/g, " ").replace(/\b([ap])\.\s?m\.?/g, "$1m").replace(/[.,!?;:"«»()—–\-]/g, " ").replace(/\s+/g, " ").trim();
  if (!clean) return [""];
  let outs = [[]];
  for (const t of clean.split(" ")){
    const vs = tokVariants(t), next = [];
    for (const o of outs) for (const v of vs){ next.push(o.concat(v)); }
    outs = next.slice(0, 16);
  }
  return Array.from(new Set(outs.map(o => o.join(" ").replace(/\bcan not\b/g, "cannot").replace(/\s+/g, " ").trim())));
}
const accepted = (it, extra) => it.en.concat(extra || []);
/* extra — варианты, добавленные пользователем (в строгом режиме не передаются). */
function isCorrect(it, ans, extra){
  if (!ans || !ans.trim()) return false;
  const A = new Set(expansions(ans));
  return accepted(it, extra).some(a => expansions(a).some(e => A.has(e)));
}
function closest(it, ans){
  const words = new Set(expansions(ans)[0].split(" "));
  let best = it.en[0], score = -1;
  for (const a of it.en){ const w = expansions(a)[0].split(" "); const s = w.filter(x => words.has(x)).length / w.length; if (s > score){ score = s; best = a; } }
  return best;
}
function lev(x, y){
  const m = x.length, n = y.length, dp = Array.from({length:m+1}, (_,i) => [i]);
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1] + (x[i-1] === y[j-1] ? 0 : 1));
  return dp[m][n];
}
function similarity(a, b){
  const x = expansions(a)[0], y = expansions(b)[0]; if (!x || !y) return 0;
  return 1 - lev(x, y) / Math.max(x.length, y.length);
}
/* Трёхсостоянийная оценка свободного ответа.
   correct — точное совпадение с официальным/явно разрешённым вариантом;
   wrong — движок видит конкретную грамматическую/структурную ошибку;
   uncertain — формулировка отличается лексически и без семантической модели нельзя честно объявить её ошибкой.
   uncertain никогда не ухудшает SRS: лучше недооценить знание, чем наказать за корректный парафраз. */
function assess(it, ans, extra){
  if (!ans || !ans.trim()) return { status:"wrong", confidence:1, category:"empty", similarity:0 };
  if (isCorrect(it, ans, extra)) return { status:"correct", confidence:1, category:"exact", similarity:1 };
  const best = closest(it, ans), sim = similarity(best, ans), cat = diagnoseCat(it, ans)[0];
  const aw = expansions(ans)[0].split(" ").filter(Boolean), bw = expansions(best)[0].split(" ").filter(Boolean);
  const ratio = bw.length ? aw.length / bw.length : 0;
  const explicit = new Set(["negation","article","be","auxiliary","agreement","perfect","irregular","verb-form","tense","preposition","word-order","missing-word"]);
  const plausibleLength = aw.length >= 2 && ratio >= 0.45 && ratio <= 2.2;
  /* Диагностика по эталону надёжна только когда формулировки достаточно близки.
     При сильном перефразировании даже найденный «пропущенный be/артикль» может быть артефактом сравнения с другой конструкцией. */
  const clearError = explicit.has(cat) && sim >= 0.60;
  const uncertain = plausibleLength && !clearError;
  return { status: uncertain ? "uncertain" : "wrong", confidence: uncertain ? Math.max(.35, sim) : Math.max(.7, sim), category:cat, similarity:sim, explicit:explicit.has(cat) };
}
/* Пословное сравнение ответа с эталоном: LCS. Возвращает html для обеих строк. */
function wordDiff(it, ans){
  const rightRaw = closest(it, ans);
  const u = expansions(ans)[0].split(" ").filter(Boolean), r = expansions(rightRaw)[0].split(" ").filter(Boolean);
  const caseMap = {}; tokens(rightRaw).forEach(w => caseMap[w.toLowerCase().replace(/'/g,"")] = w);
  const m = u.length, n = r.length, dp = Array.from({length:m+1}, () => new Array(n+1).fill(0));
  for (let i = m-1; i >= 0; i--) for (let j = n-1; j >= 0; j--) dp[i][j] = u[i] === r[j] ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
  const uOut = [], rOut = []; let i = 0, j = 0;
  while (i < m || j < n){
    if (i < m && j < n && u[i] === r[j]){ uOut.push(esc(u[i])); rOut.push(esc(caseMap[r[j]] || r[j])); i++; j++; }
    else if (i < m && (j >= n || dp[i+1][j] >= dp[i][j+1])){ uOut.push("<s>" + esc(u[i]) + "</s>"); i++; }
    else { rOut.push("<mark>" + esc(caseMap[r[j]] || r[j]) + "</mark>"); j++; }
  }
  const end = (/[.?!]$/.exec(rightRaw.trim()) || [""])[0];
  return { mine: uOut.join(" "), right: pretty(rOut.join(" ")) + end };
}
const IRR = {went:"go",bought:"buy",saw:"see",ate:"eat",took:"take",wrote:"write",told:"tell",met:"meet",came:"come",slept:"sleep",lost:"lose",gave:"give",knew:"know",thought:"think",did:"do",broke:"break",made:"make"};
/* Разбор ошибки: возвращает [категория, html-объяснение | null].
   Категории: negation, article, be, auxiliary, agreement, perfect, irregular, verb-form, tense, preposition, word-order, missing-word, lexical. */
const NEG_W = ["not","no","never","nobody","nothing","none","neither","nor"];
function diagnoseCat(it, ans){
  const u = expansions(ans)[0].split(" "), right = expansions(closest(it, ans))[0].split(" ");
  const has = w => u.includes(w), need = w => right.includes(w);
  if (NEG_W.some(need) && !NEG_W.some(has)) return ["negation", "Потеряно отрицание: без <b>not / no / never</b> смысл становится противоположным."];
  if (!NEG_W.some(need) && NEG_W.some(has)) return ["negation", "Лишнее отрицание: в этой фразе его нет."];
  for (const a of ["a","an","the"]) if (need(a) && !has(a)){
    if (["a","an","the"].some(x => x !== a && has(x))) return ["article", a === "an" ? "Перед гласным звуком — <b>an</b>, а не a." : a === "a" ? "Перед согласным звуком — <b>a</b>, а не an. Если предмет уже известен собеседнику — нужен the." : "Здесь предмет известен собеседнику (или единственный), поэтому нужен <b>the</b>, а не a / an."];
    return ["article", `Пропущен артикль <b>${a}</b>. В русском его нет, а в английском перед исчисляемым существительным он нужен.`];
  }
  const BE = ["am","is","are","was","were"];
  for (const b of BE) if (need(b) && !has(b)){
    if (BE.some(x => has(x))) return ["be", `Форма связки не та: нужен <b>${b}</b>. I — am; he / she / it — is; you / we / they — are; в прошлом: I / he / she / it — was, you / we / they — were.`];
    return ["be", `Нужен глагол-связка <b>${b}</b>. Русское «есть / был» часто не произносится, но в английском он обязателен.`];
  }
  for (const d of ["do","does","did"]) if (need(d) && !has(d)) return ["auxiliary", `Нужен вспомогательный глагол <b>${d}</b> — без него вопрос или отрицание в этом времени не строится. После него основной глагол — в начальной форме.`];
  for (const d of ["will","would","can","could","must","should"]) if (need(d) && !has(d)) return ["auxiliary", `Здесь нужен глагол <b>${d}</b>.`];
  for (const d of ["have","has"]) if (need(d) && !has(d)) return has(d === "have" ? "has" : "have") ? ["agreement", "С he / she / it — <b>has</b>, с I / you / we / they — <b>have</b>."] : ["perfect", `Для результата или опыта нужен Present Perfect: <b>${d}</b> + третья форма глагола.`];
  for (const w of right) if (w.length > 3 && w.endsWith("s") && has(w.slice(0,-1)) && !has(w)) return ["agreement", `С he / she / it в Present Simple глагол получает <b>-s</b>: ${w}.`];
  for (const w of right) if (IRR[w] && !has(w) && (has(IRR[w]) || u.some(x => x === IRR[w] + "ed" || x === w + "ed"))) return ["irregular", `Неправильный глагол: <b>${IRR[w]} → ${w}</b>. Форма с -ed к нему не добавляется.`];
  for (const w of right) if (w.length > 4 && w.endsWith("ing") && !has(w) && u.some(x => x.length > 2 && (w.startsWith(x) || w.startsWith(x.slice(0,-1))))) return ["verb-form", `Здесь нужна форма с <b>-ing</b>: ${w}.`];
  for (const w of right) if (w.length > 3 && w.endsWith("ed") && !has(w) && has(w.slice(0,-2))) return ["tense", `Для прошедшего времени глагол получает <b>-ed</b>: ${w}.`];
  if (need("will") && has("will") && /\b(when|if|until|before|after) i will\b/.test(u.join(" "))) return ["tense", "После when / if / until о будущем — Present Simple, без will."];
  for (const p of ["in","on","at"]) if (need(p) && !has(p)) return ["preposition", ["in","on","at"].some(x => has(x)) ? `Предлог не тот: здесь <b>${p}</b>. Предлоги не переводятся дословно — запоминайте в связке со словом.` : `Здесь нужен предлог <b>${p}</b>.`];
  const su = u.slice().sort().join(" "), sr = right.slice().sort().join(" ");
  if (su === sr) return ["word-order", "Слова верные, но порядок другой. В английском порядок слов фиксирован: подлежащее — глагол — дополнение."];
  if (u.every(w => right.includes(w)) && u.length < right.length) return ["missing-word", null];
  return ["lexical", null];
}
const diagnose = (it, ans) => diagnoseCat(it, ans)[1];
/* Отпечатки фразы (версия 3), два независимых:
   contentHash — смысл задания: основной эталон, ключ пропуска, русская фраза. Изменился → прогресс по фразе сбрасывается.
   variantsHash — набор официальных допустимых ответов. Изменился (добавили синоним или убрали ошибочный вариант) →
   фраза ставится на перепроверку без потери интервала: если ученик и сейчас отвечает верно, прогресс продолжается.
   Пунктуация, регистр, порядок вариантов и эквивалентные сокращения не влияют ни на один отпечаток. */
const CONTENT_HASH_VERSION = 3;
const fnv = src => { let h = 0x811c9dc5; for (let i = 0; i < src.length; i++){ h ^= src.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(36); };
function contentHash(it){ return fnv(expansions(it.en[0])[0] + "|" + expansions(it.key)[0] + "|" + it.ru.toLowerCase().replace(/[^a-zа-яё0-9]/g, "")); }
function variantsHash(it){ return fnv(Array.from(new Set(it.en.flatMap(expansions))).sort().join("||")); }
function splitKey(s, key){
  const re = new RegExp("(^|[^A-Za-z'])(" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![A-Za-z'])");
  const m = re.exec(s); if (!m) return null;
  const start = m.index + m[1].length;
  return [s.slice(0, start), s.slice(start + key.length)];
}


root.YasnoEngine = { CONTENT_HASH_VERSION, expansions, accepted, isCorrect, assess, closest, lev, similarity, wordDiff, diagnose, diagnoseCat, contentHash, variantsHash, splitKey, esc, pretty, tokens };
})(typeof window !== "undefined" ? window : globalThis);
