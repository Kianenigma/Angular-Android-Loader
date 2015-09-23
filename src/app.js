var app = angular.module("app" , ["Loader"]) ;

app.controller("Ctrl" , function ($scope , Loader , $timeout ) {
    $timeout(function () {
        Loader.start( 10000 ) ;

        $timeout(function () {
            Loader.message("Some Message") ;
        } , 2000 ) ;

        $timeout(function () {
            Loader.message("Some Other Text" )
        } , 3000 ) ;

        $timeout(function () {
            Loader.chain("I Am Chained")
        } , 4000 )

    } , 1000 ) ;
}) ;

