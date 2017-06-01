var helloApp = angular.module('helloApi',[]);

helloApp.controller("helloControl", function($scope, $http) {
    $scope.click = function() {
        $http.defaults.useXDomain = true;
		this.loadData();
    };
	
	$scope.loadData = function(){
		var response = $http.get('http://api.wunderground.com/api/3b91ffcaefc7ae1c/geolookup/conditions/q/CA/San_Francisco.json');
        response.success(function(data, status, headers, config) {
			parseData(data);
        });
        response.error(function(data, status, headers, config) {
            $scope.helloData = "Error connecting to API";
        });
	}
	
	function loadData(){
		$scope.loadData();
	}
	
	function parseData(data) {
		console.log(data);
		var html = "";
		for (var prop in data) {
			if (data.hasOwnProperty(prop)) {
				html += "<div>" + prop + " : " + data[prop] + "</div>";
			}
		}
		document.getElementById("container").innerHTML = html;
	}
	
	loadData();
});

