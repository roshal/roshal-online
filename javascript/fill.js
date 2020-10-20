
module.exports = (keys, value) => {
	const sample = {}
	for (const key of keys) {
		sample[key] = value
	}
	return sample
}
