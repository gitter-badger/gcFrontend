var gulp = require('gulp');
var browserify = require('gulp-browserify2');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('vendorJS', ['clean'], function() {
  gulp.src(config.vendorJS.src)
    .pipe(concat('vendor.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(config.vendorJS.dest));
});
