// Plik: r03/controller.js
angular.module('notesApp', [])
  .controller('ListCtrl', [function() {

    var self = this;
    self.items = [
      {id: 1, label: 'Pierwszy', done: true},
      {id: 2, label: 'Drugi', done: false}
    ];

    self.getDoneClass = function(item) {
      return {
        finished: item.done,
        unfinished: !item.done
      };
    };
}]);
