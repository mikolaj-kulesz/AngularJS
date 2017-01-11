// Plik: r05/item-service-using-provider/app.js

function ItemService(opt_items) {
  var items = opt_items || [];

  this.list = function() {
    return items;
  };
  this.add = function(item) {
    items.push(item);
  };
}

angular.module('notesApp', [])
  .provider('ItemService', function() {
    var haveDefaultItems = true;

    this.disableDefaultItems = function() {
      haveDefaultItems = false;
    };

    // funkcja pobierająca zależności, nie
    // powyższego dostawcę
    this.$get = [function() {
      var optItems = [];
      if (haveDefaultItems) {
        optItems = [
          {id: 1, label: 'Element 0'},
          {id: 2, label: 'Element 1'}
        ];
      }
      return new ItemService(optItems);

    }];
  })
  .config(['ItemServiceProvider', function(ItemServiceProvider) {
      // Aby zobaczyć, jak dostawca może zmienić
      // konfigurację, zmień wartość shouldHaveDefaults
	    // na true i spróbuj uruchomić ten
      // przykład.
      var shouldHaveDefaults = true;

      // pobranie konfiguracji z serwera
      // ustawienie wartości shouldHaveDefaults
      // zakładamy na razie, że to się magicznie zmienia
      if (!shouldHaveDefaults) {
        ItemServiceProvider.disableDefaultItems();
      }
  }])
  .controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'first';
    self.open = function(tab) {
      self.tab = tab;
    };
  }])
  .controller('SubCtrl', ['ItemService', function(ItemService) {
    var self = this;
    self.list = function() {
      return ItemService.list();
    };

    self.add = function() {
      ItemService.add({
        id: self.list().length + 1,
        label: 'Element ' + self.list().length
      });
    };
  }]);
