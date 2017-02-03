angular.module('stockMarketApp')
  .directive('stockWidget', [function() {
    return {
      templateUrl: 'stock.html',
      restrict: 'A',
      scope: {
        stockDataStocks: '=',
        stockTitle: '@',
        whenSelect: '&'
      },
      link: function($scope, $element, $attrs) {
        $scope.getChange = function(stock) {
          return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
        };

/*        $scope.onSelect = function() {
          $scope.whenSelect({
            stockName: $scope.stockDataStocks.name,
            stockPrice: $scope.stockDataStocks.price,
            stockPrevious: $scope.stockDataStocks.previous
          })
        };*/

        $scope.onSelect = function(stock) {
          $scope.whenSelect({
            stockName: stock.name,
            stockPrice: stock.price,
            stockPrevious: stock.previous
          })
        };
      }
    };
  }]);
