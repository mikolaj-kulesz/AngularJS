// Plik: r13/directive-google-chart/googleChartLoader.js
angular.module('googleChartApp')
  .factory('googleChartLoaderPromise',
      ['$q', '$rootScope', '$window',
      function($q, $rootScope, $window) {
    // utworzenie odroczonego obiektu
    var deferred = $q.defer();

    // asynchroniczne załadowanie API Google Charts
    $window.google.load('visualization', '1',
      {
        packages: ['corechart'],
        callback: function() {
          // Po załadowaniu API wywołujemy funkcję resolve
          // wewnątrz funkcji $apply, ponieważ zdarzenie ma
          // miejsce poza cyklem życia AngularJS.
          $rootScope.$apply(function() {
            deferred.resolve();
          });
        }
      });

    // zwrot obiektu obietnicy do dołączenia
    // do łańcucha przez dyrektywę
    return deferred.promise;
  }]);
