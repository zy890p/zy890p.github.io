window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

/*
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: 'sw-test'}).then(function(registration) {
      // registration worked
      console.log('Registration succeeded.');
      button.onclick = function() {
        registration.update();
      }
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  };
*/

}
