// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('site-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/about.html',
                '/courses.html',
                '/style.css',
                '/app.js'
            ]);
        })
    );
});

// Fetching assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
