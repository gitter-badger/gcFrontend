module.exports = function($scope, $http, $routeParams) {
  serverID = $routeParams.id;
    $http.get('http://176.9.19.16:8080/api/library/' + serverID).success(function(data) {
        $scope.server = data;
        console.log($scope.server);
    });
};
