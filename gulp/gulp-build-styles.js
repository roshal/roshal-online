
const p__gulp_load_plugins = require('gulp-load-plugins')
const p__gulp_watch = require('gulp-watch')
const p__multipipe = require('multipipe')
const p__path = require('path')

const plugins = p__gulp_load_plugins()

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = p__path.join(paths.source, '*')
	const source = p__gulp_watch(glob, options)
	const stream = p__multipipe(
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
