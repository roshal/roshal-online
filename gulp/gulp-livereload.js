
const p__livereload = require('livereload')

module.exports = (options = {}) => {
	p__livereload.createServer({
		debug: true,
	}).watch(options.target)
}
