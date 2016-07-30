var app = angular.module("app" , ["Loader"]) ;

app.controller("Ctrl" , function ($scope , Loader , $timeout ) {
    $timeout(function () {
        Loader.start() ;
    } , 1000 ) ;

    $timeout(function() {
      Loader.dismiss()
    }, 10000)
}) ;
