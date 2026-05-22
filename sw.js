const CACHE = 'exam-bills-v1';
const ASSETS = [
  '/examination_bill_kls_git/',
  '/examination_bill_kls_git/index.html',
  '/examination_bill_kls_git/manifest.json',
  '/examination_bill_kls_git/icons/icon-192.png',
  '/examination_bill_kls_git/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
