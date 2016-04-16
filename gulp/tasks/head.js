var gulp = require('gulp');
var browserify = require('gulp-browserify2');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('headJS', ['clean'], function() {
  gulp.src(config.headJS.src)
    .pipe(concat('head.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(config.headJS.dest));
});
