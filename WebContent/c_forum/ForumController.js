myApp.controller('ForumController',function( $scope, $http, $location,$route,$rootScope){
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
		//alert("inside insertForum()");
		$http.post('http://localhost:8082/ChatterMiddleware/addForum', $scope.forum)
		.then(function(response){
			$scope.msg = 'Forum created successfully';
			//console.log('Forum Status '+ response.statusText);
			$route.reload();
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
	 
	 $scope.editForum = function(forumId){
		console.log('Inside editForum()');
		$http.get('http://localhost:8082/ChatterMiddleware/getForum/'+ forumId)
		.then(function(response){
			console.log('Found forum to edit :'+ response.data);
			$scope.forum = response.data;
		});
	 };
	
	 
	 $scope.updateForum = function(forumId){
		console.log('inside updateForum()');
		$http.put('http://localhost:8082/ChatterMiddleware/updateForum/'+ forumId, $scope.forum)
		.then(fetchAllForums(),function(response){
			//console.log('forum update successfully');
			$location.path('/manageForums');
			$route.reload();
		});
	 };
	 
	 
	function fetchAllForums(){
		console.log('In fetchAllForums()');
		$http.get('http://localhost:8082/ChatterMiddleware/listForums')
		.then(function(response, $rootScope){
			console.log('All Forums response '+ response.statusText);
			$scope.forumData = response.data;
		});
	};
	
	function listForumsByName(){
		console.log('inside listForumByName');
		$http.get('http://localhost:8082/ChatterMiddleware/listForums/'+ $rootScope.currentUser.userName, $scope.forum)
		.then(function(response){
			//alert(userName);
			console.log('Forums by Name Response: '+ response.statusText);
			$scope.forums = response.data;
		});
	}
	fetchAllForums();
	listForumsByName();
	
});