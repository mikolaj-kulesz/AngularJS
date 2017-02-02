// Plik: r11/directive-broken-reference/app.js

angular.module('stockMarketApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.stocks = [
      {name: 'Pierwszy towar', price: 100, previous: 220},
      {name: 'Drugi towar', price: 140, previous: 120}
    ];
    self.changeAllStocks = function() {
      for (var i = 0; i < 4; i++) {
        self.stocks[i] = {
          name: 'Towar kontrolera',
          price: 200,
          previous: 250
        };
      }
    };

    self.changeFirstStock = function() {
      self.stocks[0].name = 'Zmieniono pierwszy towar';
    };
  }]);
