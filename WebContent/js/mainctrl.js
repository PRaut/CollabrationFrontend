var myApp = angular.module("myApp", [ "ngRoute" ]);

myApp.config(function($routeProvider) {

	console.log("In routeProvider");
	$routeProvider.when("/", {templateUrl : "template/Home.html"})
		.when("/home", {templateUrl : "template/Home.html" })
		.when("/about", { templateUrl : "template/AboutUs.html" })
		.when("/login", { templateUrl : "template/Login.html" })
		.when("/signup", { templateUrl : "template/SignUp.html" })
		.when("/contactus", { templateUrl : "template/ContactUs.html"})
		
		// Blogs
		.when("/blog", { templateUrl : "c_blog/blog.html" })
		.when("/manageBlogs", {templateUrl: "c_blog/manageBlogs.html"})
		.when("/updateBlog", {templateUrl: "c_blog/updateBlog.html"})
		
		// forum
		.when("/createForum", {templateUrl: "c_forum/createForum.html"})
		.when("/manageForums", {templateUrl: "c_forum/manageForums.html"})
});