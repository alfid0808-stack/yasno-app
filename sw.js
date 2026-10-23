/* Офлайн-кэш: оболочка приложения кэшируется при установке, обновляется при смене VERSION. */
const VERSION = "yasno-private-2026-10-23-2";
const SHELL = ["./","index.html","styles.css","js/content.js","js/vocab.js","js/vocab2.js","js/grammar2.js","js/ext_a2b1.js","js/ext_b2.js","js/ext_c1.js","js/order.js","js/engine.js","js/store.js","js/app.js","manifest.webmanifest","icons/icon.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
