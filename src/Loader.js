var Loader = angular.module("Loader" , []) ;
Loader.directive("loader" , function () {
    return {
        restrict : "E" ,
        replace : true ,
        template : "<div " +
        "ng-class='{loaderDisplay : loaderDisplay}' class='loaderWrapper'>" +
        "<div " +

        "ng-class='{" +
        "loaderMessageDisplay : loaderMessageDisplay == true , " +
        "slide : loaderMessageDisplay == -1}' class='loaderMessage'>" +
        " {{ loaderMessage }}" +
        " </div>" +

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
    $rootScope.loaderMessage = null ;
    $rootScope.loaderDisplay = false ;
    $rootScope.loaderStyle = {
        bg : null ,
        dotBg : null ,
        _class : null
    } ;

    var start = function (timeout , message ) {

        $timeout.cancel(_timeOut) ;

        $rootScope.loaderMessage = message ;
        $rootScope.loaderDisplay = true ;
        if ( message ) $rootScope.loaderMessageDisplay = true ;

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

    var chain = function ( message ) {
        $rootScope.loaderMessageDisplay = -1 ;
        $timeout(function () {
            $rootScope.loaderMessageDisplay = false ;

            $timeout(function () {
                $rootScope.loaderMessage = message ;
                $rootScope.loaderMessageDisplay = true ;
            } , 300 )
        } , 500 ) ;
    } ;

    var message = function (message) {
        // if any Loader is currently Displayed
        if ( $rootScope.loaderDisplay ) {

            // if a message already exists on screen
            if ( $rootScope.loaderMessageDisplay ) {

                // hide that message and show the new one
                $rootScope.loaderMessageDisplay = false ;
                $timeout(function () {
                    $rootScope.loaderMessage = message  ;
                    $rootScope.loaderMessageDisplay = true ;
                } , 500 )

            }
            else {
                // just show the man thing :)
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
