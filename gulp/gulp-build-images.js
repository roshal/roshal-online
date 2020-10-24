
const r__gulp_load_plugins = require('gulp-load-plugins')
const r__gulp_watch = require('gulp-watch')
const r__multipipe = require('multipipe')
const r__path = require('path')

const plugins = r__gulp_load_plugins()

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = r__path.join(paths.source, '*')
	const source = r__gulp_watch(glob, options)
	return r__multipipe(source, ...flags.produce ? [
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
