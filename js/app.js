var projectcontroller = angular.module('projectcontroller', []);


projectcontroller.controller('loginCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.FbLogin = function(){
		
		FB.login(function(response) {
			
		    if (response.authResponse) {
		     FB.api('/me?fields=first_name,picture,last_name', function(response) {
		        		       
		       console.log('Good to see you, ' + response.first_name + ' ' + response.last_name + '.'); 
		       console.log(response.picture.data.url);
		       console.log(response.id);
		       console.log(response);
		        var data = {"name" : response.first_name+" "+response.last_name,
		    				"email": "abcd@anip.xyz",
		    				"phoneNo" : "9889899999",
		    				"fbCred" : response.id
		    				}

		        // sending post call to ther server
		        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            	}
            	$http.post('http://api.fundsofhope.org/signup/', JSON.stringify(data), config)
            	.success(function (data, status, headers, config) {
            		console.log(data);
            		 if(data.status=="success")
                window.location.href = "#/list";
            	else if(data.status=="User updated"){
            		window.location.href = "#/list";
            	}

	                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
		    //window.location.href = "../htmlDocs/testHome.html"
});
}
});
}
}]);

// this controller is responsible for throwing data on paper-cards from server.
projectcontroller.controller('CardController', ['$scope', '$http',
		function ($scope, $http){
				$http.get('http://api.fundsofhope.org/projects/all').success(function(data){
				$scope.descriptions=data;
			})
		}]);


//this controller is for throwing data from paper-cards to dialog box.
projectcontroller.controller("videoController", ["$scope", function($scope){
    	$scope.names = [];
	    $scope.play = function(files){
	    console.log(files.title);
	    document.getElementById('dialog').toggle();
		  document.getElementById('dialogCost').innerHTML = files.cost;
		  document.getElementById('dialogName').innerHTML = files.title;
		  document.getElementById('dialogStart').innerHTML = files.startDate;
		  document.getElementById('dialogEnd').innerHTML = files.endDate;
		  document.getElementById('dialogDetails').innerHTML = files.description;
		  document.getElementById('dialogStatus').innerHTML = files.status;
    };

}]);

// this controller is for login with facebook

