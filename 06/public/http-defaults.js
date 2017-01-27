angular.module('notesApp', [])
  .controller('LoginCtrl', ['$http', function ($http) {
    var self = this;
    self.user = {};
    self.message = "";

    self.login = function () {
      $http.post('/api/login', self.user).then( function (response) {
        self.message = response.data.msg;
        console.log(response.data);
      }, function (errResponse) {
        console.error("Login error");
      })
    }
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.transformRequest.push( function (data) {
      var requestStr;
      if(data){
        data = JSON.parse(data);
        for (var key in data){
          if (requestStr){
            requestStr += '&' + key + '=' + data[key];
          }
          else {
            requestStr = key + '=' + data[key];
          }
        }
      }
    });
  }]);



