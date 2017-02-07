angular.module('stockMarketApp')
  .directive('validZip', [function() {
    var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;

    var numberAndSpacec = /^(?=.*\d)[\d ]+$/;

    var intTest = function isInt(n) {
      return n % 1 === 0;
    };

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, $attrs, ngModelCtrl) {

        //przeprowadzam 2 testy:
        //ngModelCtrl udostępnia klucz $validators, każda dodana do niego funkcja zostanie wykonana w celu sprawdzenia poprawności pola do którego została dopisana procedura validacyjna
        //value = wartość zmiennej ng-model
        ngModelCtrl.$validators.test1 = function(value) {
          var test = zipCodeRegex.test(value);
          console.log(test);
          return test;
        };

        ngModelCtrl.$validators.test2 = function(value) {
          //var test = intTest(value);
          var test = numberAndSpacec.test(value);
          console.log(test);
          return test;
        };

        ngModelCtrl.$validators.testSUM = function(value) {
        
        var val = value;
        var testA = intTest(val);
        var testB = numberAndSpacec.test(val);
        var testResult = testA && testB;

        console.log(testA, testB, testResult);
        return testResult;
        };
      }
    };
  }]);
