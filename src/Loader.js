var Loader = angular.module("Loader", []);
Loader.directive("loader", function () {
  return {
    restrict: "E",
    replace: true,
    template: "<div " +
      "ng-class='{loaderDisplay : loaderDisplay}' class='loaderWrapper'>" +
      "<div class='dot dot1'></div> " +
      "<div class='dot dot2'></div>" +
      "<div class='dot dot3'></div>" +
      "<div class='dot dot4'></div> " +
      "</div>",
  }
});

Loader.factory("Loader", function ($rootScope, $timeout) {
  var _timeOut;
  $rootScope.loaderDisplay = false;

  var show = function (timeout) {

    $timeout.cancel(_timeOut);

    $rootScope.loaderDisplay = true;

    if (timeout) {
      _timeOut = $timeout(function () {
        $rootScope.loaderDisplay = false;
      }, timeout);
    }
  };

  var hide = function () {
    $rootScope.loaderDisplay = false;
  };

  return {
    show: show,
    hide: hide
  }

});
