var Loader=angular.module("Loader",[]);Loader.directive("loader",function(){return{restrict:"E",replace:!0,template:"<div ng-class='{loaderDisplay : loaderDisplay}' class='loaderWrapper'><div class='dot dot1'></div> <div class='dot dot2'></div><div class='dot dot3'></div><div class='dot dot4'></div> </div>"}}),Loader.factory("Loader",function(a,d){var o;a.loaderDisplay=!1;var r=function(r){d.cancel(o),a.loaderDisplay=!0,r&&(o=d(function(){a.loaderDisplay=!1},r))},e=function(){a.loaderDisplay=!1};return{show:r,hide:e}});