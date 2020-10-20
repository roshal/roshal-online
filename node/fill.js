module.exports = (keys, value) => {
	const sample = {}
	for (key of keys) {
		sample[key] = value
	}
	return sample
}
