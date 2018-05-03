var myApp = angular.module("myApp", [ 'ngRoute' , 'ngCookies']);

myApp.config(function($routeProvider) {

	console.log("In routeProvider");
	$routeProvider.when("/", {templateUrl : "template/Home.html"})
		.when("/home", {templateUrl : "template/Home.html" })
		.when("/about", { templateUrl : "template/AboutUs.html" })
		.when("/login", { templateUrl : "template/Login.html" })
		.when("/signup", { templateUrl : "template/SignUp.html" })
		.when("/contactus", { templateUrl : "template/ContactUs.html"})
		
		//users
		.when("/uploadPic", {templateUrl: "c_user/UpdateProfile.html"})
		
		// Blogs
		.when("/blog", { templateUrl : "c_blog/blog.html" })
		.when("/showAllBlogs", {templateUrl: "c_blog/showAllBlogs.html"})
		.when("/manageBlogs", {templateUrl: "c_blog/manageBlogs.html"})
		.when("/updateBlog", {templateUrl: "c_blog/updateBlog.html"})
		
		// forum
		.when("/createForum", {templateUrl: "c_forum/createForum.html"})
		.when("/showAllForums", {templateUrl: "c_forum/showAllForums.html"})
		.when("/manageForums", {templateUrl: "c_forum/manageForums.html"})
		
		// chat
		.when("/chat", {templateUrl: "c_chat/chat.html"})
});


// run() to handle user details stored cookieStore
myApp.run(function($rootScope, $cookieStore){
	console.log('inside run() to handle cookie data');
	console.log($rootScope.currentUser);
	
	if($rootScope.currentUser == undefined){
		$rootScope.currentUser = $cookieStore.get('userDetails');
	}else{
		console.log('in else no user found'+ $rootScope.currentUser.userName);
		console.log('User role found'+ $rootScope.currentUser.role);
	}
});