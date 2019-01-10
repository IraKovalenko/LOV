var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styles', function() {
 return gulp.src('stylus/styles.styl')
   .pipe(stylus({
     'include css': true
   }))
   .pipe(gulp.dest('css/'));
});
gulp.task('watch:styles', function(){
 gulp.watch('stylus/*.styl', gulp.series('styles'));
});