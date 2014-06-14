'use strict';
var assert = require('assert');
var isSupportedRegexpFlag = require('./');

it('should check whether a RegExp flag is supported', function () {
	assert(isSupportedRegexpFlag('g'));
	assert(!isSupportedRegexpFlag('u'));
});
