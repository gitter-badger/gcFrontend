// Controller
controllers = {
  home: require('./controller/home')
};

// Router
router = require('./router');

var app = angular.module('panelApp', [
  'ngRoute'
]);

app.controller('homeController', ['$scope', '$http', function($scope, $http) { controllers.home($scope, $http) }]);

app.config(['$routeProvider', function($routeProvider) {
  router($routeProvider);
}]);
