gunApp.config(function ($routeProvider) {

	$routeProvider


	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/forum', {
		templateUrl: 'pages/forum.html',
		controller: 'forumController'
	})
    .when('/videos', {
		templateUrl: 'pages/videos.html',
		controller: 'videoController'
	})
    .when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
    .when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
    
});