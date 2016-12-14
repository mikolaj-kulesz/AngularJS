// Plik:  rozdział03/karma.conf.js
// Konfiguracja systemu Karma

module.exports = function(config) {
  config.set({
    // ścieżka bazowa, która zostanie użyta do szukania plików
    basePath: '',

    // szkieletowy system testów (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // lista plików/wzorców do załadowania do przeglądarki
    files: [
      'angular.min.js',
      'angular-mocks.js',
      'controller.js',
      'simpleSpec.js',
      'controllerSpec.js'
    ],

    // lista plików/wzorców do wykluczenia
    exclude: [],

    // port serwera internetowego
    port: 8080,

    // określenie rodzaju danych do rejestrowania w dzienniku
    // dostępne wartości: LOG_DISABLE || LOG_ERROR ||
    //                  LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // włączenie/wyłączenie obserwowania pliku i wykonywania testów, gdy
    // coś się zmieni w pliku
    autoWatch: true,

    // lista przeglądarek do uruchomienia, aktualnie dostępne są następujące przeglądarki:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (tylko Mac)
    // - PhantomJS
    // - IE (tylko Windows)
    browsers: ['Chrome'],


    // tryb ciągłej integracji
    // wartość true oznacza przechwycenie przeglądarek, wykonanie testów i zakończenie działania
    singleRun: false
  });
};
