var gulp = require('gulp');
var config = require('../config');

require('./jade');
require('./clean');
require('./stylus');
require('./js');
require('./head');

gulp.task('default', ['clean', 'jade', 'stylus', 'js', 'headJS']);
