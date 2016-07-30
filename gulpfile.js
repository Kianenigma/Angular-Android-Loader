var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('dev', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('build', function(){

});


gulp.task('default', ['dev', 'build']);
