myApp.controller("UserController", function($scope, $http, $location, $rootScope, $cookieStore){
	
	$scope.user = {
			"userName": '',
			"password": '',
			"email": '',
			"phone": '',
			"address": '',
			"accountOpeningDate": '',
			"role": '',
			"isOnline": ''
	};
	
	$rootScope.login = function(){
		console.log('inside login()');
		
		$http.post('http://localhost:8082/ChatterMiddleware/login', $scope.user)
		.then(function(response){
			console.log('Login status '+ response.statusText);
			$scope.user = response.data;
			$rootScope.currentUser = response.data;
			$cookieStore.put('userDetails', response.data);
			console.log('Current user Role'+ $rootScope.currentUser.role);
			console.log($rootScope.currentUser.userName);
			/*if($rootScope.currentUser.role == 'ADMIN'){
				console.log('Role Found ADMIN' );
				//console.log('ADMIN PAGE');
			}else{
				console.log('Role found USER');
			}*/
			$location.path("/home");
		});
	};
	
	$rootScope.logout=function()
	{
		console.log('Logout Function');
		$http.post('http://localhost:8082/ChatterMiddleware/logout', $scope.user)
		.then(function(response){
			//$rootScope.currentUser = response.data;
			console.log('Logout Success'+ response.statusText);
			//console.log('Current user '+ $rootScope.currentUser.userName);
			delete $rootScope.currentUser;
			$cookieStore.remove('userDetails');
			$location.path("/");
		});
	};
	
});