// Retire the former sw-precache worker at its original URL.
// The new homepage does not register a worker or load this script.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // Replace the old cache-first controller with this network-only worker.
    await self.clients.claim();
    await self.registration.unregister();
  })());
});

// Intentionally no fetch handler, cache deletion, or forced page navigation.
