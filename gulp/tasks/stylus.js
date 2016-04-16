var gulp = require('gulp');
var stylus = require('gulp-stylus');
var config = require('../config.js');

gulp.task('stylus', ['clean'], function() {
  gulp.src(config.stylus.src)
    .pipe(stylus())
    .pipe(gulp.dest(config.stylus.dest));
});
