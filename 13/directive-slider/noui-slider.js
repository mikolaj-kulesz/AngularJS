// Plik: r13/directive-slider/noui-slider.js
angular.module('sliderApp')
  .directive('noUiSlider', [function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function($scope, $element, $attr, ngModelCtrl) {

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

        // Gdy w AngularJS zmienią się dane,
        // należy poinformować o tej zmienie dyrektywę zewnętrzną.
        ngModelCtrl.$render = function() {
          $element.val(ngModelCtrl.$viewValue);
        };

        // Jeśli dane zmienią się poza AngularJS,
        $element.on('set', function(args) {
          // to należy poinformować także AngularJS, że trzeba zaktualizować interfejs.
          $scope.$apply(function() {
            // ustawienie danych w AngularJS
            ngModelCtrl.$setViewValue($element.val());
          });
        });
      }
    };
  }]);
