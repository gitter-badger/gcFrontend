var gulp = require('gulp');
var config = require('../config');

require('./jade');
require('./clean');
require('./stylus');
require('./js');
require('./head');
require('./vendor');

gulp.task('default', ['clean', 'jade', 'stylus', 'js', 'headJS', 'vendorJS']);
