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
    var start = function (timeout , message ) {

        $timeout.cancel(_timeOut) ;

        $rootScope.loaderMessage = message ;
        $rootScope.loaderDisplay = true ;
        if ( message ) $rootScope.loaderMessageDisplay = true ;

        if ( timeout ) {
            //_timeOut = $timeouttimeout(function () {
            //    $rootScope.loaderDisplay = false ;
            //    $rootScope.loaderMessageDisplay = false ;
            //} ,  timeout ) ;
        }
    } ;

    var dismiss = function () {
        $rootScope.loaderDisplay = false ;
        $rootScope.loaderMessageDisplay = false ;
    } ;

    var chain = function ( message , time ) {

    } ;

    var message = function (message) {
        if ( $rootScope.loaderDisplay ) {
            if ( $rootScope.loaderMessageDisplay ) {

            }
            else {
                $rootScope.loaderMessage = message ;
                $rootScope.loaderMessageDisplay = true ;
            }
        }
        else {
            console.warn("Loader Module : Loader Not Displayed . No Message Will Be Displayed")
        }
    } ;

    var setTheme = function (name) {

    } ;

    var setStyle = function ( obj ) {

    } ;

    return {
        start : start ,
        dismiss : dismiss ,
        chain : chain ,
        message : message ,
    }

}) ;
