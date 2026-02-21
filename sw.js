self.addEventListener("install", e=>{
e.waitUntil(caches.open("shapeai-pro-v2").then(cache=>{
return cache.addAll(["/","/index.html","/styles.css","/app.js","/firebase-config.js"]);
}));
});
self.addEventListener("fetch", e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});