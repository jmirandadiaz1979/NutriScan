// NutriScan — Service Worker (modo sin conexión)
// Colócalo junto a index.html, en la misma carpeta raíz.
const CACHE = 'nutriscan-v2';
const SHELL = ['./', './index.html'];
const CDN = [
  'https://unpkg.com/@ericblade/quagga2@1.8.4/dist/quagga.min.js',
  'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.concat(CDN).map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Las APIs y las imágenes de producto siempre van a red (la app ya guarda lo escaneado en local)
  if (/openfoodfacts|openbeautyfacts|anthropic\.com/.test(url.hostname)) return;

  // Página: red primero (siempre la última versión) y copia en caché si no hay conexión
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy));
          return r;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Resto (scripts, fuentes): caché primero y se guarda lo que se descarga
  e.respondWith(
    caches.match(req).then(cached =>
      cached ||
      fetch(req)
        .then(r => {
          if (r && (r.status === 200 || r.type === 'opaque')) {
            const copy = r.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return r;
        })
        .catch(() => cached)
    )
  );
});
