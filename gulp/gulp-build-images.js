
const p__gulp_load_plugins = require('gulp-load-plugins')
const p__gulp_watch = require('gulp-watch')
const p__multipipe = require('multipipe')
const p__path = require('path')

const plugins = p__gulp_load_plugins()

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = p__path.join(paths.source, '*')
	const source = p__gulp_watch(glob, options)
	return p__multipipe(source, ...flags.produce ? [
		plugins.imagemin([
			plugins.imagemin.gifsicle(),
			plugins.imagemin.mozjpeg(),
			plugins.imagemin.optipng({
				optimizationLevel: 0,
			}),
			plugins.imagemin.svgo(),
		]),
	] : [])
}
