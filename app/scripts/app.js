'use strict';

// TODO are all this needed here or can they be included in the respective controllers/services? (like in dataModule which includes ngResource)
angular.module('noalbumsApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.map', 'toastr', 'asyncModule', 'clientsModule', 'dataModule', 'd3Module', 'parallaxModule', 'skrollrModule']).config(
		['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			// grunt build replaces this for the current currentVersion
			var currentVersion = Date.now();

			$urlRouterProvider.otherwise("/");

			$stateProvider.state('main', {
				url: '/',
				templateUrl: 'views/main.html?v=' + currentVersion,
				controller: 'MainCtrl',
				abstract: true
			}).state('main.config', {
				url: 'config',
				templateUrl: 'views/main/config.html?v=' + currentVersion,
				controller: 'ConfigCtrl'
			}).state('main.home', {
				url: '',
				templateUrl: 'views/main/home.html?v=' + currentVersion,
				controller: 'HomeCtrl'
			}).state('main.map', {
				url: 'map',
				templateUrl: 'views/main/map.html?v=' + currentVersion,
				controller: 'MapCtrl'
			}).state('main.stats', {
				url: 'stats',
				templateUrl: 'views/main/stats.html?v=' + currentVersion,
				controller: 'StatsCtrl'
			}).state('main.timeline', {
				url: 'timeline',
				templateUrl: 'views/main/timeline.html?v=' + currentVersion,
				controller: 'TimelineCtrl'
			}).state('main.words', {
				url: 'words',
				templateUrl: 'views/main/words.html?v=' + currentVersion,
				controller: 'WordsCtrl'
			}).state('hosts', {
				url: '/hosts',
				templateUrl: 'views/hosts.html?v=' + currentVersion,
				controller: 'HostsCtrl'
			}).state('oauth', {
				url: '/oauth',
				templateUrl: 'views/oauth.html?v=' + currentVersion,
				controller: 'OauthCtrl'
			}).state('async', {
				url: '/async',
				templateUrl: 'views/async.html?v=' + currentVersion,
				controller: 'AsyncCtrl'
			});

			$locationProvider.html5Mode(true);
		}]);
