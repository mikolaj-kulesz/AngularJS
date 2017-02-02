// Plik: r11/directive-with-template/directive.js
angular.module('stockMarketApp')
  .directive('stockWidget', [function() {
    return {
      templateUrl: 'stock.html'
    };
  }]);
