module.exports = function($scope,$http) {
  $scope.click = function(server,command){

  	var data = {
  		"id":server,
  		"action":command
  	};
  	$http.defaults.headers.post["Content-Type"] = 'application/json';
  	$http.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  	$http.post("http://176.9.19.16:8080/api/servers",data)
  	.then(function(e){
  		console.log(e);
  	});
  	console.log(server + ";"+ command);
  }
}