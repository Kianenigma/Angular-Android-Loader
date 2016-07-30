var Loader = angular.module("Loader" , []) ;
Loader.directive("loader" , function () {
    return {
        restrict : "E" ,
        replace : true ,
        template : "<div " +
        "ng-class='{loaderDisplay : loaderDisplay}' class='loaderWrapper'>" +
        "<div class='dot dot1'></div> " +
        "<div class='dot dot2'></div>" +
        "<div class='dot dot3'></div>" +
        "<div class='dot dot4'></div> " +
        "</div>" ,

        link : function (scope , elem , attr) {
            //var _body = angular.element("body") ;

            //var customStyle = {
            //    backgroundColor : attr.bg
            //} ;
            //
            //elem.css(customStyle) ;
            //elem.find(".loaderMessage").css({
            //    backgroundColor: attr.bg
            //}) ;

            console.log(elem , scope , attr ) ;
        }
    }
}) ;

Loader.factory("Loader" , function ( $rootScope , $timeout ) {
    var _timeOut  ;
    $rootScope.loaderDisplay = false ;
    $rootScope.loaderStyle = {
        bg : null ,
        dotBg : null ,
        _class : null
    } ;

    var start = function (timeout) {

        $timeout.cancel(_timeOut) ;

        $rootScope.loaderDisplay = true ;

        if ( timeout ) {
            _timeOut = $timeout(function () {
                $rootScope.loaderDisplay = false ;
            } ,  timeout ) ;
        }
    } ;

    var dismiss = function () {
        $rootScope.loaderDisplay = false ;
    } ;

    return {
        start : start ,
        dismiss : dismiss
        // message : message ,
    }

}) ;
