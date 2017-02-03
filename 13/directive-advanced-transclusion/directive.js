// Plik: r13/directive-advanced-transclusion/directive.js
angular.module('stockMarketApp').directive('simpleStockRepeat',
    [function() {
  return {
    restrict: 'A',
    // Przechwytuje i zastępuje cały element,
    // a nie tylko jego zawartość.
    transclude: 'element',
    // $transclude przekazujemy jako piąty
    // argument do funkcji link.
    link: function($scope, $element, $attrs, ctrl, $transclude) {
      var myArray = $scope.$eval($attrs.simpleStockRepeat);

      var container = angular.element(
        '<div class="container"></div>');
      for (var i = 0; i < myArray.length; i++) {
        // Tworzy egzemplarz elementu z nowym zakresem
        // potomnym za pomocą funkcji łączącej.
        var instance = $transclude($scope.$new(),
            function(clonedElement, newScope) {
          // eksponuje własne zmienne dla egzemplarza.
          newScope.currentIndex = i;
          newScope.stock = myArray[i];
        });
        // dodaje egzemplarz do naszego kontenera
        container.append(instance);
      }

      // Ustawienie transclude: 'element' powoduje zamianę elementu
      // na komentarz. Wygenerowana treść zostanie dodana
      // za tym komentarzem.
      $element.after(container);
    }
  };
  }]);
