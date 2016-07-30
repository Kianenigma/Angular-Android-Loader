### Angular Android Loader.

## Installation 
Simply use either of 
```
bower install angular-android-load
```

or
 
```
npm install angular-android-loader
```

or download zip from github 

and include it in your html file: 
```
<link rel="stylesheet" href="path/to/lib/Loader.css">
<script type="text/javascript" src="path/to/lib/Loader.js"></script>
```

And include the `Loader` dependency to your Angular Module 
```
var m = angular.module([name], [.., "Loader"]); 
```

## How to use
after injection the `Loader` service into a controller/service place the `<loader></loader>` tag in your html body. this is for a full page loader. if you want it somewhere else, place it inside any container that has a `position: relative` style. 
Then: 
```
Loader.show(time)
```
Where time is the duration of loading displayed. leave empty for infinite loading. 

```
Loader.hide()
```
will hide the Loader immediately. 

##Customization 
The following classes ( taken from [Ionic](http://ionicframework.com/) color pallets) are supported. adding any other is pretty easy by modifying the [css](https://github.com/Kianenigma/AngularAndroidLoader/blob/master/src/Loader.css#L18) file. 
```
.loaderWrapper.positive { background-color: #387EF5;}
.loaderWrapper.calm { background-color: #11C1F3 ; }
.loaderWrapper.balanced { background-color: #33CD5F;}
.loaderWrapper.energized { background-color: #FFC900;}
.loaderWrapper.assertive { background-color: #EF473A;}
.loaderWrapper.royal { background-color: #886AEA;}
.loaderWrapper.dark { background-color: #444444;}
```
apply any of them with: 
```
<loader class="balanced"></loader>
```

 
