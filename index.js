'use strict';
module.exports = flag => {
	let supported = true;

	try {
		new RegExp('', flag); // eslint-disable-line no-new
	} catch (_) {
		supported = false;
	}

	return supported;
};
