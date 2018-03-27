myApp.controller("BlogController", function($scope, $http, $location) {
	console.log("In BlogController");

	$scope.blog = {
		"blogName" : '',
		"blogContent" : '',
		"createdDate" : '',
		"likes" : 0,
		"userName" : '',
		"status" : ''
	}

	$scope.blogData;

	$scope.insertBlog = function() {
		console.log("In insertBlog method");
		$http.post('http://localhost:8082/ChatterMiddleware/addBlog',
				$scope.blog).then(fetchAllBlogs(), function(response) {
			console.log('Status Text ' + response.statusText);
		});
	};

	function fetchAllBlogs() {
		console.log('In fetchAllBlogs method');
		$http.get('http://localhost:8082/ChatterMiddleware/listBlogs').then(
				function(response) {
					console.log('Status Text ' + response.statusText);
					$scope.blogData = response.data;
				});
	}
});