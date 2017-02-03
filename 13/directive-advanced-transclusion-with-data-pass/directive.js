angular.module('stockMarketApp')
  .directive('simpleStockRepeat', [function(){
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      scope: {
        stockData: '='
      }, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      // templateUrl: '',
      // replace: true,
      transclude: 'element',
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, $element, $attrs, ctrl, $transclude) {

        var myArr = $scope.stockData;
        var container = angular.element('<div class="contaner"></div>');

        console.log(myArr);

        for (var i = 0; i < myArr.length; i++) {
          var instance = $transclude($scope.$new(), function(clonedEl, newScope){
            newScope.currentIndex = i;
            newScope.stock = myArr[i];
          });

          container.append(instance);
        };

        $element.after(container);
      }
    };
  }]);