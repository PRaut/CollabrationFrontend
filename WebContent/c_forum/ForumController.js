myApp.controller('ForumController',function( $scope, $http, $location,$route ){
	console.log('inside ForumController');
	
	$scope.forum ={
			"forumName": '',
			"forumContent":'',
			"createdDate":'',
			"userName":'',
			"status":''
	};
	
	$scope.forumData;
	
	$scope.insertForum = function(){
		alert("inside insertForum()");
		$http.post('http://localhost:8082/ChatterMiddleware/addForum', $scope.forum)
		.then(function(response){
			$scope.msg = 'Forum created successfully';
			console.log('Forum Status '+ response.statusText);
		});
	};
	
	 $scope.deleteForum = function(forumId){
		console.log('inside deleteForum ' + forumId );
		$http.delete('http://localhost:8082/ChatterMiddleware/deleteForum/'+ forumId)
		.then(fetchAllForums(), function(response){
			console.log('Delete Forum status '+ response.statusText);
			//$scope.forumData = response.data;
			$route.reload();
		});
	 };
	
	function fetchAllForums(){
		console.log('In fetchAllForums()');
		$http.get('http://localhost:8082/ChatterMiddleware/listForums')
		.then(function(response){
			console.log('All Forums response '+ response.statusText);
			$scope.forumData = response.data;
		});
	};
	
	fetchAllForums();
});