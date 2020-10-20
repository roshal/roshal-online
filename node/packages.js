module.exports = (...strings) => {
	const object = {}
	for (const string of strings) {
		const id = string
		object[string] = require(id)
	}
	return object
}
