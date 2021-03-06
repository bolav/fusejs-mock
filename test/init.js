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
	});
	var o = obs();
	describe('functions', function () {
		it('should be an object', function () {
			assert.typeOf(o, 'Object');
		})
		it('should have add', function () {
			assert.typeOf(o.add, 'function');
		}),
		it('should have replaceAll', function () {
			assert.typeOf(o.replaceAll, 'function');
		})
	})
});
