angular.module('sliderApp', [])
  .controller('MainCtrl', [function() {
    var self = this;

    self.selectedValue = 0;

    self.textValue = 30;

    self.setSelectedValue = function() {
      self.selectedValue = self.selectedValue + 20;
      console.log(self.selectedValue);
    };

    self.setSelectedValue();
  }]);
