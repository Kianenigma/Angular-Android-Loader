var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var minify      = require('gulp-minifier');


gulp.task('dev', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('build', function(){
  return gulp.src('./src/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true
  })).pipe(gulp.dest('./dest'));
});


gulp.task('default', ['dev', 'build']);
