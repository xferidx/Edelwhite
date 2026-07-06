// Minimal service worker — its only job is to satisfy browser installability
// requirements (Chrome/Android needs an active service worker with a fetch
// handler to allow "Add to Home Screen"). It doesn't cache anything or work
// offline; every request just passes straight through to the network.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // pass-through — no caching, no offline support, just presence
});
