'use strict';

angular.module('TODO_angularSeedApp', ['ui.bootstrap', 'ui.router']).config(
		['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			// grunt build replaces this for the current version
			var currentVersion = Date.now();

			$urlRouterProvider.otherwise("/");

			$stateProvider.state('main', {
				url: '/',
				templateUrl: 'views/main.html?v=' + currentVersion,
				controller: 'MainCtrl',
				abstract: true
			}).state('main.home', {
				url: '',
				templateUrl: 'views/main/home.html?v=' + currentVersion,
				controller: 'HomeCtrl'
			}).state('main.config', {
                url: 'config',
                templateUrl: 'views/main/config.html?v=' + currentVersion,
                controller: 'ConfigCtrl'
            });

			$locationProvider.html5Mode(true);
		}]);
