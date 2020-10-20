
module.exports = (object, keys) => {
	const sample = {}
	for (const key of keys) {
		sample[key] = object[key]
	}
	return sample
}
