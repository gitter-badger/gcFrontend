module.exports = function($scope, $http) {
    $http.get('http://176.9.19.16:8080/api/library').success(function(data) {
        console.log(data);
        $scope.servers = data;
    });
};
