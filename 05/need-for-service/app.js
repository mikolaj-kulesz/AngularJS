angular.module('notesApp', [])
	.controller('MainCtrl', [function(){
		var self = this;
		self.tab = 'first';
		self.open = function(tab) {
			self.tab = tab;
		};
	}])
	.controller('SubCtrl', [function(){
		var self = this;
		self.limit = 2;

		self.list = [
      		{id: 1, label: 'Element 0'},
      		{id: 2, label: 'Element 1'},
      		{id: 3, label: 'Element 2'},
      		{id: 4, label: 'Element 3'}
		];

    self.addToList = function() {

    	
		self.list.push({
			id: self.list.length + 1,
			label: 'Element ' + self.list.length
		});

    	self.limit++;
    };
	}]);