(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./controller/home":2,"./controller/server":3,"./router":4}],2:[function(require,module,exports){
module.exports = function($scope, $http) {
  $http.get('http://176.9.19.16:8080/api/library').success(function(data) {
    console.log(data);
    $scope.servers = data;
  });
};

},{}],3:[function(require,module,exports){
module.exports = function($scope, $http, $routeParams) {
  serverID = $routeParams.id;
  $http.get('http://176.9.19.16:8080/api/library/' + serverID).success(function(data) {
    $scope.server = data;
    console.log($scope.server);
  });
};

},{}],4:[function(require,module,exports){
module.exports = function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    }).
    when('/about', {
      templateUrl: 'templates/help.html',
      controller: 'helpController'
    }).
    when('/server/:id', {
      templateUrl: 'templates/server.html',
      controller: 'serverController'
    }).
    otherwise({
      redirectTo: '/'
    });
};

},{}]},{},[1]);
