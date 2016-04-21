var src = 'app/';
var dest = 'build/';
var bower = 'bower_components/';

module.exports = {
    src: src,
    dest: dest,
    jade: {
        src: src + 'jade/**/*.jade',
        dest: dest
    },
    js: {
        src: src + 'assets/scripts/app.js',
        dest: dest + 'assets/scripts/'
    },
    stylus: {
        src: src + 'assets/styles/app.styl',
        dest: dest + '/assets/styles/'
    },
    headJS: {
        src: [
            src + 'assets/scripts/vendor/angular.min.js',
            src + 'assets/scripts/vendor/angular-route.min.js',
        ],
        dest: dest + 'assets/scripts/'
    },
    vendorJS: {
        src: [
            src + 'assets/scripts/vendor/jquery.js',
            bower + 'bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: dest + '/assets/scripts/'
    },
    vendorCSS: {
        src: [
            bower + 'bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: dest + '/assets/styles/'
    },
    watch: {
        src: src + '/**/*.*'
    }
};
