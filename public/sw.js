


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('suppliers').then(function(cache) {
      return cache.addAll([
        '/',
        '/public/index.html',
        '/public/index.html?homescreen=1',
        '/?homescreen=1',

      ]);
    })
  );
});



