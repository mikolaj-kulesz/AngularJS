angular.module('sliderApp')
  .directive('noUiSlider', [function() {
    return {
      restrict: 'E', // E = Element
      require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      link: function($scope, $element, $attr, ngModelCtrl) {

        //funkcja wewnętrzna dyrektywy
        //1. Włączamy wtyczkę "noUiSlider" zgodnie z api wtyczki
        $element.noUiSlider({
          // w kontrolerze ngModelCtrl może jeszcze nie być wartości początkowej
          start: 0,
          range: {
            // $attr domyślnie dostarcza wartości łańcuchowych
            // nouiSlider działa na liczbach, dlatego konieczna jest konwersja
            min: Number($attr.rangeMin),
            max: Number($attr.rangeMax)
          }
        });

        //2. Gdy w AngularJS zmienią się dane, należy poinformować o tej zmienie dyrektywę zewnętrzną.
        //( zmieniam ręcznie np w inpucie dane, to pasek musi zareagować, za ruch paska odpowiada w tym przypadku ryrektywa bo w niej, w funkcji link odpalony jest plugin zewnętrzny )
        ngModelCtrl.$render = function() {
          $element.val(ngModelCtrl.$viewValue);
        };

        //3. Jeśli dane zmienią się poza AngularJS - zmieniają się w pluginie, zmieniam pasek ręcznie,
        $element.on('set', function(args) {
          // to należy poinformować także AngularJS, że trzeba zaktualizować interfejs.
          $scope.$apply(function() {
            // ustawienie danych w AngularJS
            ngModelCtrl.$setViewValue(Number($element.val()));
            console.log(Number($element.val()));
          });

        });
      }
    };
  }]);

/*directive('', ['', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      
    }
  };
}]);*/