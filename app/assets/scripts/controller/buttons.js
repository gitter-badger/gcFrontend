module.exports = function($scope,$http) {
  $scope.click = function(server,command){
  	$http({
	    method: 'POST',
	    url: 'http://176.9.19.16',
	    data:
	    {
	  		"id":server,
	  		"action":command
	  	},
	    headers: {'Content-Type': 'application/json'}
	}).then(function(e){
  		console.log(e);
  	});
  	console.log(server + ";"+ command);
  }
}