angular.module('filtersApp', [])
  .filter('timeAgo', [function() {
    var ONE_MINUTE = 1000 * 60;
    var ONE_HOUR = ONE_MINUTE * 60;
    var ONE_DAY = ONE_HOUR * 24;
    var ONE_MONTH = ONE_DAY * 30;

    return function(ts, optShowSecondsMessage) {
      if (optShowSecondsMessage !== false) {
        optShowSecondsMessage = true;
      }

      var currentTime = new Date().getTime();
      var diff = currentTime - ts;
      if (diff < ONE_MINUTE && optShowSecondsMessage) {
        return 'sekund temu';
      } else if (diff < ONE_HOUR) {
        return 'minut temu';
      } else if (diff < ONE_DAY) {
        return 'godzin temu';
      } else if (diff < ONE_MONTH) {
        return 'dni temu';
      }  else {
        return 'miesięcy temu';
      }
    };
}]);
