// Plik: r03/controllerSpec.js
describe('Controller: ListCtrl', function() {
  // utworzenie egzemplarza nowej wersji modułu przed każdym testem
  beforeEach(module('notesApp'));

  var ctrl;

  // przed każdym testem jednostkowym tworzony jest nowy egzemplarz
  // kontrolera
  beforeEach(inject(function($controller) {
    ctrl = $controller('ListCtrl');
  }));

  it('powinien mieć elementy dostępne podczas ładowania', function() {
    expect(ctrl.items).toEqual([
      {id: 1, label: 'Pierwszy', done: true},
      {id: 2, label: 'Drugi', done: false}
    ]);
  });

  it('powinien mieć elementy wyróżniania dodane na podstawie stanu', function() {
    var item = {id: 1, label: 'Pierwszy', done: true};

    var actualClass = ctrl.getDoneClass(item);
    expect(actualClass.finished).toBeTruthy();
    expect(actualClass.unfinished).toBeFalsy();

    item = {id: 2, label: 'Drugi', done: false};
    actualClass = ctrl.getDoneClass(item);
    expect(actualClass.finished).toBeFalsy();
    expect(actualClass.unfinished).toBeTruthy();
  });

});
