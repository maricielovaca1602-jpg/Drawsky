/* DrawSky offline shell: the app opens without internet. Pages are fetched fresh when online (so updates arrive), with the cached copy as fallback. */
const CACHE = 'drawsky-v46';
const FONTS = 'drawsky-fonts';
const SHELL = ['./', 'index.html', 'stickers.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('googleapis.com') && !url.hostname.startsWith('fonts')) return; /* Drive calls always go to the network */
  /* pretty fonts: kept in their own cache (survives app updates) so they work without internet */
  if (url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'cdn.jsdelivr.net'){
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }))));
    return;
  }
  if (url.hostname.endsWith('google.com') || url.hostname.endsWith('gstatic.com')) return; /* Google sign-in and file picker */
  if (req.mode === 'navigate' || url.origin === location.origin){
    e.respondWith(fetch(req.url, { cache:'no-cache', credentials:'same-origin' }).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok && (url.hostname === 'cdnjs.cloudflare.com' || url.hostname.startsWith('fonts.'))){ const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
