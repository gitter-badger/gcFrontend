var gulp = require('gulp');
var config = require('../config.js');
var del = require('del');

gulp.task('clean', function() {
  del(config.dest);
});
