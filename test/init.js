var chai = require('chai');
var assert = chai.assert;

var loc = require('../GeoLocation');
var obs = require('../Observable');

describe('GeoLocation', function () {
	describe('init', function () {
		it('should be an object', function () {
			assert.typeOf(loc, 'Object');
		});
	})
});

describe('Observable', function () {
	describe('init', function () {
		it('should be an function', function () {
			assert.typeOf(obs, 'function');
		});
	})
});
