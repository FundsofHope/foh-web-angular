var myApp = angular.module('myApp', [
		'ngRoute',
		'projectcontroller'
	]);

window.fbAsyncInit = function() {
    FB.init({ 
      appId: '1525793961071513',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
     
   }(document, 'script', 'facebook-jssdk'));

myApp.config([
		'$routeProvider', function($routeProvider){
			$routeProvider.when('/login', {
				templateUrl: '../partials/loginFb.html',
				controller: 'loginCtrl'
			}).when('/list', 	{
				templateUrl: '../partials/details.html',
				controller: 'CardController'
			}).otherwise({
				redirectTo: '/login'
			});
		}]);



