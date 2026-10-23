/* Порядок курса: от нуля до C1, грамматика и слова чередуются. */
(function(){
const ORDER = [
 /* A1 */ "u1","u2","u4","u3","v1","v2","u5","u6","v3","u7","u8","w1","u9","v4","u10","v5","w2","u11","u12","v6","w3","w4",
 /* A2 */ "u13","u14","v7","w5","u15","u16","v8","u17","u18","v9","w6","u19","v10","w7",
 /* A2+ */ "x43","x44","x45","x46","x47","x48","x49","x50","x51","x52",
 /* B1 */ "u20","u21","v11","u22","u23","v12","u24","u25","u26","w8","u27","u28","w9","u29","u30","w10","w11",
 /* B1+ */ "x53","x54","x55","x56","x57","x58","x59","x60","x61","x62","x63",
 /* B2 */ "u31","u32","w12","u33","u34","u35","w13","u36","u37","u38","w14","u39","u40","w15","u41","u42",
 /* B2+ */ "x27","x28","x29","x30","x31","x32","x33","x34","x35","x36","x37","x38","x39","x40","x41","x42",
 /* C1 */ "u43","u44","w16","u45","u46","w17",
 /* C1+ */ "x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17","x18","x19","x20","x21","x22","x23","x24","x25","x26"
];
const source = window.UNITS_RAW.concat(Object.values(window.EXTRA || {})), byId = {};
for (const u of source){ if (byId[u.id]) throw new Error("Дублирующийся ID темы: " + u.id); byId[u.id] = u; }
const orderSet = new Set(ORDER);
if (orderSet.size !== ORDER.length) throw new Error("В ORDER есть дубли тем");
const missing = ORDER.filter(id => !byId[id]), extra = Object.keys(byId).filter(id => !orderSet.has(id));
if (missing.length || extra.length) throw new Error(`Нарушена полнота курса. Нет в данных: ${missing.join(", ") || "—"}; нет в ORDER: ${extra.join(", ") || "—"}`);
const ordered = ORDER.map(id => byId[id]), rank = {A1:1,A2:2,B1:3,B2:4,C1:5};
for (let i = 1; i < ordered.length; i++) if ((rank[ordered[i].level] || 99) < (rank[ordered[i-1].level] || 99)) throw new Error("Уровни курса идут не по возрастанию: " + ordered[i-1].id + " → " + ordered[i].id);
window.UNITS_RAW = ordered;
})();
