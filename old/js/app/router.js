module.exports = function($routeProvider){
  console.log('Create Route Provider');
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    }).
    when('/about', {
      templateUrl: 'partials/help.html',
      controller: 'helpController'
    }).
    when('/server/:id', {
      templateUrl: 'partials/server.html',
      controller: 'serverController'
    }).
    otherwise({
      redirectTo: '/'
    });
}
