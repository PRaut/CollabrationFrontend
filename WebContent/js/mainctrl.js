var myApp = angular.module("myApp", [ "ngRoute" ]);

myApp.config(function($routeProvider) {

	console.log("In routeProvider");
	$routeProvider.when("/", {templateUrl : "template/Home.html"})
		.when("/home", {templateUrl : "template/Home.html" })
		.when("/about", { templateUrl : "template/AboutUs.html" })
		.when("/blog", { templateUrl : "c_blog/blog.html" })
		.when("/login", { templateUrl : "template/Login.html" })
		.when("/signup", { templateUrl : "template/SignUp.html" })
		.when("/contactus", { templateUrl : "template/ContactUs.html"})
});