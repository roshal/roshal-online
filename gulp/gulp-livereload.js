
const r__livereload = require('livereload')

module.exports = (options = {}) => {
	r__livereload.createServer({
		debug: true,
	}).watch(options.target)
}
