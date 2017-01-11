function ListService(){
    var limit = 2;
    var items = [
          {id: 1, label: 'Element 0'},
          {id: 2, label: 'Element 1'},
          {id: 3, label: 'Element 2'},
          {id: 4, label: 'Element 3'}
    ];
    this.list = function(){
      return items; 
    };
    this.limit = function(){
      return limit; 
    };
    this.addToList = function(item) {
      items.push(item);
      limit++;
    };
}


angular.module('notesApp', [])
  .controller('MainCtrl', [function(){
    var self = this;
    self.tab = 'first';
    self.open = function(tab) {
      self.tab = tab;
    };
  }])
  .controller('SubCtrl', ['ListService', function(ListService){
    var self = this;
    self.limit = function(){
      return ListService.limit();
    };

    self.list = function(){
      return ListService.list();
    };

    self.addToList = function() {
      console.log('sadsa');
      ListService.addToList({
        id: self.list().length + 1,
        label: 'Element ' + self.list().length
      });
    };
  }])
  .service('ListService', [ListService]);