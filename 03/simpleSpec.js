// Plik: r03/simpleSpec.js
// zestaw testów Jasmine
describe('Moja funkcja', function() {

  var t;
  // podobne do funkcji konfiguracyjnej
  beforeEach(function() {
    t = true;
  });

  afterEach(function() {
    t = null;
  });

  it('powinno wykonać czynność 1', function() {
    expect(t).toBeTruthy();
  });
  it('powinno wykonać czynność 2', function() {
    var expectedValue = true;
    expect(t).toEqual(expectedValue);
  });
});
