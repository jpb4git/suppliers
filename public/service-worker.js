if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      // eslint-disable-next-line no-console
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :déçu:
      // eslint-disable-next-line no-console
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



