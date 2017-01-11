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
      ListService.addToList({
        id: self.list().length + 1,
        label: 'Element ' + self.list().length
      });
    };
	}])
  .factory('ListService', [function(){
    var limit = 2;
    var items = [
          {id: 1, label: 'Element 0'},
          {id: 2, label: 'Element 1'},
          {id: 3, label: 'Element 2'},
          {id: 4, label: 'Element 3'}
    ];
    return {
      list: function(){
        return items; 
      },
      limit: function(){
        return limit; 
      },
      addToList: function(item) {
        items.push(item);
        limit++;
      }
    };
  }]);