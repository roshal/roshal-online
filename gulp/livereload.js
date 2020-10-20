import livereload from 'livereload'
module.exports = (options) => {
	livereload.createServer({
		debug: true,
		// delay: 1 << 8,
	}).watch(options.folder)
}
