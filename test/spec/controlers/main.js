'use strict';

describe('Controller: MainCtrl', function() {

	// load the controller's module
	beforeEach(module('noalbumsApp'));

	var MainCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope : scope
		});
	}));

	it('should attach a collection to the scope', function() {
//		expect(scope.collection.length).toBe(0);
	});
});
