// Controller
var controllers = {
  home: require('./controller/home'),
  server: require('./controller/server')
};

// Components
var components = [
  {
    name: 'actions',
    class: require('../../components/actions/script')
  }
];
var loadedComponents = [];

// Component JS Loader
$(document).on('ready', function() {
  for (i = 0; i < components.length; i++) {
    component = components[i];
    loadedComponents.push(new components[i].class($('.partial.' + components[i].name)));
  }
});

// Router
var router = require('./router');

var app = angular.module('panelApp', [
  'ngRoute'
]);

app.controller('homeController', ['$scope', '$http', function($scope, $http) { controllers.home($scope, $http) }]);
app.controller('serverController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) { controllers.server($scope, $http, $routeParams) }]);

app.config(['$routeProvider', function($routeProvider) {
  router($routeProvider);
}]);
