import test from 'ava';
import isSupportedRegexpFlag from './index.js';

test('main', t => {
	t.true(isSupportedRegexpFlag('g'));
	t.true(isSupportedRegexpFlag('u'));
	t.false(isSupportedRegexpFlag('q'));
});
