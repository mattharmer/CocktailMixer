self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('classiccocktails').then(function(cache) {
        return cache.addAll(
          [
            'index.html',
            'americano.html',
            'css/style.css',
            'css/pageStyle.css',
            'css/animate.css',
            'main.js',
            'favicon.ico',
            'img/americano.png'
          ]
        );
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });