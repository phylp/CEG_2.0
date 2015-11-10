var gulp = require('gulp');
var webpack = require('webpack-stream');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css'); 

gulp.task('webpack:dev', function() {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('staticfiles:dev', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('build/'))
});

gulp.task('minify-css', function(){
  return gulp.src(__dirname + '/css/style.css')
    .pipe(concatCss('style.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(__dirname + '/build/css'))
});

gulp.task('build:dev', ['staticfiles:dev', 'minify-css', 'webpack:dev']);
gulp.task('default', ['build:dev']);