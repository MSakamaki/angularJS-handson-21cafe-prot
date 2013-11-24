'use strict';

angular.module('angularJSAppApp', [
	'ngCookies',
	'ngRoute',
	'angularLocalStorage', 
	'ngGrid',
	'btns', 
	'todoTags', 
	'utill', 
	'myitems',
	'myvalidate',
	'myconst'
	])
	.config(function ($routeProvider) {
		$routeProvider
            .when('/main', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .otherwise({ redirectTo: '/main' });
	});
