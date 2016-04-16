app.config(['$routeProvider', function($routeProvider){
  console.log('Create Route Provider');
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController' 
    }).
    when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'aboutController' 
    }).
    otherwise({
      redirectTo: '/'
    });
}]);