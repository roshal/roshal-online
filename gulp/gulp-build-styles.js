
const r__gulp_load_plugins = require('gulp-load-plugins')
const r__gulp_watch = require('gulp-watch')
const r__multipipe = require('multipipe')
const r__path = require('path')

const plugins = r__gulp_load_plugins()

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = r__path.join(paths.source, '*')
	const source = r__gulp_watch(glob, options)
	const stream = r__multipipe(
		...flags.develop ? [
			plugins.sourcemaps.init(),
		] : [],
		plugins.sass({
			includePaths: 'node_modules/normalize.css',
			indentType: 'tab',
			outputStyle: flags.produce ? 'compressed' : 'expanded',
		}),
		plugins.autoprefixer(),
		...flags.produce ? [
			plugins.cleanCss({
				level: {
					1: {
						specialComments: flags.develop,
					},
					2: {},
				},
			}),
		] : [],
		...flags.develop ? [
			plugins.sourcemaps.write(),
		] : [],
	)
	return source.pipe(stream)
}
