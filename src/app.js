var app = angular.module("app" , ["Loader"]) ;

app.controller("Ctrl" , function ($scope , Loader , $timeout ) {
    $timeout(function () {
        Loader.start( 10000 , "Some Messssaaaagggeeee " ) ;
    } , 1000 ) ;
}) ;

