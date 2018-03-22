import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m('g'));
	t.true(m('u'));
	t.false(m('q'));
});
