var cacheName = 'hello-pwa';

var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/static/mui_test.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
/* cacheFirst strategy */
/*
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
*/

/* networkFirst strategy */
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});