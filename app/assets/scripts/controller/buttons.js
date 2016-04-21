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
      if(data.result){
        console.log("SUCCESS: "+data.result);
      }else if(data.error)
            console.error("ERROR:"+data.error);
    })
    .error(function(data, status, headers, config){
        console.error("ERROR:"+data);
    });

  	console.log(server + ";"+ command);
  }
}
