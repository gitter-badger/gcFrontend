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
