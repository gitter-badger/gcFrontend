module.exports = function($scope,$http) {
  $scope.click = function(server,command){

  	var data = {
  		"id":server,
  		"action":command
  	};
  	$http.defaults.headers.post["Content-Type"] = 'application/json';
  	//$http.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  	$http.post("http://176.9.19.16:8080/api/servers",data)
    .success(function(data,status,headers,config){
      console.log(data);
      $("#status-"+server).html("Status: "+data.status+"!");
      $("#message-"+server).val("Message: ");
      if(data.message)
        $("#message-"+server).val("Message: "+data.message+"!");

    })
    .error(function(data, status, headers, config){
      console.error("ERROR:"+data);
    });

  	console.log(server + ";"+ command);
  }
}
