var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');

gulp.task('jade', ['clean'], function() {
  gulp.src(config.jade.src)
    .pipe(jade())
    .pipe(gulp.dest(config.jade.dest));
});
