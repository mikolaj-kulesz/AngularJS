// Plik: r06/public/logging-interceptor.js
angular.module('notesApp', [])
  .controller('MainCtrl', ['$http', function($http) {
    var self = this;
    self.items = [];
    self.newTodo = {};
    var fetchTodos = function() {
      return $http.get('/api/note').then(function(response) {
        self.items = response.data;
      }, function(errResponse) {
        console.error('Błąd pobierania notatek.');
      });
    };

    fetchTodos();

    self.add = function() {
      $http.post('/api/note', self.newTodo)
        .then(fetchTodos)
        .then(function(response) {
          self.newTodo = {};
        });
    };

  }]).factory('MyLoggingInterceptor', ['$q', function($q) {
    return {
      request: function(config) {
        console.log('Żądanie wykonane przy użyciu ', config);
        return config;
        // w przypadku błędu lub braku pozwolenia
        // return $q.reject('Operacja niedozwolona');
      },
      requestError: function(rejection) {
        console.log('Błąd żądania spowodowany ', rejection);
        // kontynuacja, aby następny łańcuch obietnic
        // wykrył błąd
        return $q.reject(rejection);
        // lub w przypadku poprawnej obsługi
        // return someValue;
      },
      response: function(response) {
        console.log('Odpowiedź od serwera', response);
        // zwraca obietnicę
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        console.log('Błąd w odpowiedzi ', rejection);
        // kontynuacja, aby następny łańcuch obietnic
        // wykrył błąd
        // w razie potrzeby można tu sprawdzić kod statusu uwierzytelniania
        // if (rejection.status === 403) {
        //   pokaż okno dialogowe logowania
        //   zwróć wartość informującą kontrolery, że błąd został obsłużony
        // }
        // albo można zwrócić odmowę w celu kontynuowania
        // łańcucha niepowodzeń obietnic
        return $q.reject(rejection);
      }
    };
  }])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('MyLoggingInterceptor');
  }]);
