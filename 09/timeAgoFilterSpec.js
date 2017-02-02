// Plik: r09/timeAgoFilterSpec.js
describe('Filtr timeAgo', function() {
  beforeEach(module('filtersApp'));

  var filter;
  beforeEach(inject(function(timeAgoFilter) {
    filter = timeAgoFilter;
  }));

  it('Powinien zwrócić odpowiedź odnoszącą się do znacznika czasu.', function() {
    // Obecność funkcji Date().getTime() trochę utrudnia
    // jednostkowe testowanie tego filtru w sposób deterministyczny.
    // Najlepiej byłoby wstrzyknąć dostawcę dateProvider do filtru
    // timeAgo, ale staramy się napisać jak najprostszy kod.
    // Dlatego zakładamy, że nasze testy będą na tyle szybkie,
    // że czas ich wykonywania nie przekroczy milisekund.

    var currentTime = new Date().getTime();
    currentTime -= 10000;
    expect(filter(currentTime)).toEqual('sekund temu');
    var fewMinutesAgo = currentTime - 1000 * 60;
    expect(filter(fewMinutesAgo)).toEqual('minut temu');
    var fewHoursAgo = currentTime - 1000 * 60 * 68;
    expect(filter(fewHoursAgo)).toEqual('godzin temu');
    var fewDaysAgo = currentTime - 1000 * 60 * 60 * 26;
    expect(filter(fewDaysAgo)).toEqual('dni temu');
    var fewMonthsAgo = currentTime - 1000 * 60 * 60 * 24 * 32;
    expect(filter(fewMonthsAgo)).toEqual('miesięcy temu');
  });
});
