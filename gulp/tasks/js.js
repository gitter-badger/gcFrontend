var gulp = require('gulp');
var browserify = require('gulp-browserify2');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('js', ['clean'], function() {
  gulp.src(config.js.src)
    .pipe(browserify({
      fileName: 'app.js'
    }))
    // .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
});
