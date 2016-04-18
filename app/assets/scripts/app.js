// Controller
controllers = {
  home: require('./controller/home'),
  server: require('./controller/server')
};

// Router
router = require('./router');

var app = angular.module('panelApp', [
  'ngRoute'
]);

app.controller('homeController', ['$scope', '$http', function($scope, $http) { controllers.home($scope, $http) }]);
app.controller('serverController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) { controllers.server($scope, $http, $routeParams) }]);

app.config(['$routeProvider', function($routeProvider) {
  router($routeProvider);
}]);
