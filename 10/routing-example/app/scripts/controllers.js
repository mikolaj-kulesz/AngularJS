angular.module('fifaApp')
  .controller('MainCtrl', ['UserService', function(UserService){
    var self = this;
    self.userService = UserService;
    // sprawdzenie czy użytkownik jest zalogowany podczas
    // ładowania aplikacji
    // Usługa UserService automatycznie zaktualizuje isLoggedIn
    // po zakończeniu tego wywołania
    
    UserService.session();
  }])
  .controller('TeamListCtrl', ['FifaService', function(FifaService){
    var self = this;
    self.teams = [];

    FifaService.getTeams()
      .then(
        function(response){
          self.teams = response.data;
        }
      )
  }])
  .controller('TeamDetailsCtrl', ['$location', '$routeParams', 'FifaService', function($location, $routeParams, FifaService){
    var self = this;
    self.team = {};

    FifaService.getTeamDetails($routeParams.code)
      .then(
        function(response){
          self.team = response.data;
        },
        function(error){
          $location.path('/login');
        }
      )
  }])
  .controller('LoginCtrl', ['UserService', '$location', function(UserService, $location){
    var self = this;
    self.user = {username: '', password: ''};

    self.login = function(){
      UserService.login(self.user)
      .then(
        function(success){
          $location.path('/');
        },
        function(error){
          self.errorMessage = error.data.msg;
        }
      )
    };
  }]);