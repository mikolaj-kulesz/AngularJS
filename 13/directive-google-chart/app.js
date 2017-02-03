// Plik: r13/directive-google-chart/app.js

angular.module('googleChartApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.pieChartData = [
      {label: 'Pierwszy', value: 25},
      {label: 'Drugi', value: 54},
      {label: 'Trzeci', value: 75}
    ];

    self.pieChartConfig = {
      title: 'Wykres raz, dwa, trzy',
      firstColumnHeader: 'Licznik',
      secondColumnHeader: 'Rzeczywista wartość'
    };

    self.changeData = function() {
      self.pieChartData[1].value = 25;
    };
  }]);
