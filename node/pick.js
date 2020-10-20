module.exports = (object, keys) => {
	const sample = {}
	for (key of keys) {
		sample[key] = object[key]
	}
	return sample
}
