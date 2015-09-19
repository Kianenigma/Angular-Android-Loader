var Loader = angular.module("Loader" , []) ;
Loader.directive("loader" , function () {
    return {
        restrict : "E" ,
        replace : true ,
        template : "<div ng-class='{loaderDisplay : loaderDisplay}' class='loaderWrapper'>" +
        "<div ng-class='{loaderMessageDisplay : loaderMessageDisplay}' class='loaderMessage'> {{ loaderMessage }} </div>" +
        "<div class='dot dot1'></div> " +
        "<div class='dot dot2'></div>" +
        "<div class='dot dot3'></div>" +
        "<div class='dot dot4'></div> " +
        "</div>" ,

        link : function (scope , elem , attr) {
            var _body = angular.element("body") ;

            var customStyle = {
                backgroundColor : attr.bg
            } ;

            elem.css(customStyle) ;
            elem.find(".loaderMessage").css({
                backgroundColor: attr.bg
            }) ;



            //console.log(elem , scope , attr ) ;
        }
    }
}) ;

Loader.factory("Loader" , function ( $rootScope , $timeout ) {
    var _timeOut  ;
    var start = function (message, timeout) {

        $timeout.cancel(_timeOut) ;

        $rootScope.loaderMessage = message ;
        $rootScope.loaderDisplay = true ;
        $rootScope.loaderMessageDisplay = true ;

        if ( timeout ) {
            _timeOut = $timeout(function () {
                $rootScope.loaderDisplay = false ;
                $rootScope.loaderMessageDisplay = false ;
            } ,  timeout ) ;
        }

    } ;

    var dismiss = function () {
        $rootScope.loaderDisplay = false ;
        $rootScope.loaderMessageDisplay = false ;
    } ;

    var chain = function ( message , time ) {

    } ;

    return {
        start : start ,
        dismiss : dismiss ,
        chain : chain
    }

}) ;
