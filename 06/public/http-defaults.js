// Plik: r06/public/http-defaults.js

angular.module('notesApp', [])
  .controller('LoginCtrl', ['$http', function($http) {
    var self = this;
    self.user = {};
    self.message = 'Zaloguj się';
    self.login = function() {
      $http.post('/api/login', self.user).then(
        function(resp) {
         self.message = resp.data.msg;
         console.log(resp.data);
      });
    };
  }])
  .config(['$httpProvider', function($httpProvider) {
    // dane POST są przekształcane na styl jQuery
    $httpProvider.defaults.transformRequest.push(
        function(data) {
      var requestStr;
      if (data) {
        data = JSON.parse(data);
        for (var key in data) {
          if (requestStr) {
            requestStr += '&' + key + '=' + data[key];
          } else {
            requestStr = key + '=' + data[key];
          }
        }
      }

      return requestStr;
    });
    // ustawia typ treści wszystkich żądań POST na formularzowy
    // nagłówek ten nie zostanie dodany do żądań GET
    $httpProvider.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded';
  }]);
