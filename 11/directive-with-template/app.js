angular.module('stockMarketApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.stocks = [
      {name: 'Pierwszy towar', price: 100, previous: 220},
      {name: 'Drugi towar', price: 140, previous: 120},
      {name: 'Trzeci towar', price: 110, previous: 110},
      {name: 'Czwarty towar', price: 400, previous: 420}
    ];

    self.getChange = function(stock) {
      return Math.ceil(((stock.price - stock.previous) /
          stock.previous) * 100);
    };
  }]);
