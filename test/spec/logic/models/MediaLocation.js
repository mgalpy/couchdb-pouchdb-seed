'use strict';

describe('Unit: MediaLocation', function() {
	var mock = null;
	var obj = null;
	var prev = null;

	beforeEach(function() {
		mock = angular.copy(mockMediaLocation);
		obj = new MediaLocation("34.1234 -17.9876");
		prev = angular.extend(new MediaLocation(), angular.copy(obj));
	});

	it("checks the mock data", function() {
		expect(mock && mock.pos).toBeTruthy();
		expect(obj && prev).toBeTruthy();
		expect(angular.equals(obj, prev)).toBe(true);
	});

	it("merges with another media location", function() {
		expect(angular.equals(obj.merge(null), prev)).toBe(true);
		expect(angular.equals(obj.merge(new MediaLocation()), prev)).toBe(true);
		expect(angular.equals(obj.merge(prev), prev)).toBe(true);

		// merge with json and check data types
		obj = new MediaLocation().merge(mock);
		expect(angular.equals(obj, mock)).toBe(true);
		expect(obj.pos instanceof Array).toBe(true);
		expect(typeof obj.pos[0]).toBe('number');
		expect(typeof obj.pos[1]).toBe('number');

		obj = angular.extend(new MediaLocation(), prev);
		mock.pos = null;
		obj.merge(mock);
		expect(angular.equals(obj.pos, prev.pos)).toBe(true);
	});

	it("compares with another media location", function() {
		expect(obj.equals(prev)).toBe(true);
		expect(prev.equals(obj)).toBe(true);
		expect(obj.equals(null)).toBe(false);
		expect(obj.equals(new MediaLocation())).toBe(false);

		obj.pos[0]++;
		expect(obj.equals(prev)).toBe(false);
		obj.pos = null;
		expect(obj.equals(prev)).toBe(false);

		obj = new MediaLocation().merge(mock);
		expect(obj.equals(mock)).toBe(true);
	});
});
