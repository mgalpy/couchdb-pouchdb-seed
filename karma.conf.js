// Karma configuration
// Generated on Sat May 24 2014 03:29:45 GMT+1000 (E. Australia Standard Time)

module.exports = function(config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
	        'app/lib/auto/angular/angular.js',
	        'app/lib/auto/angular-animate/angular-animate.js',
	        'app/lib/auto/angular-bootstrap/ui-bootstrap.js',
	        'app/lib/auto/angular-cookies/angular-cookies.js',
	        'app/lib/auto/angular-mocks/angular-mocks.js',
	        'app/lib/auto/angular-resource/angular-resource.js',
	        'app/lib/auto/angular-sanitize/angular-sanitize.js',
	        'app/lib/auto/angular-toastr/dist/angular-toastr.js',
	        'app/lib/auto/angular-ui-map/ui-map.js',
	        'app/lib/auto/angular-ui-router/release/angular-ui-router.js',
	        'app/lib/auto/angular-ui-utils/ui-utils.js',
	        
		    'app/scripts/**/*.js',
		    'test/spec/**/*.js',
		    
		    // TODO search a best way to serve mock files
		    'test/mock/**/*.json'
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true
	});
};
