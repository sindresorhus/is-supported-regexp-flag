export default function isSupportedRegexpFlag(flag) {
	try {
		new RegExp('', flag); // eslint-disable-line no-new
		return true;
	} catch {
		return false;
	}
}
