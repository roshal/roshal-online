
const r__gulp_load_plugins = require('gulp-load-plugins')
const r__gulp_watch = require('gulp-watch')
const r__merge_stream = require('merge-stream')
const r__multipipe = require('multipipe')
const r__path = require('path')

const plugins = r__gulp_load_plugins()

module.exports = (flags = {}, paths = {}, options = {}) => {
	const index = r__path.join(paths.source, '*.pug')
	const pages = r__path.join(paths.source, 'pages', '**.pug')
	const rename = plugins.rename({
		suffix: '/index',
	})
	const source =  r__merge_stream(
		r__gulp_watch(index, options),
		r__gulp_watch(pages, options).pipe(rename),
	)
	const stream = r__multipipe(
		plugins.pug({
			basedir: paths.source,
			pretty: '\t',
		}),
		...flags.produce ? [
			plugins.htmlmin({
				collapseWhitespace: true,
				minifyCSS: true,
			}),
		] : [],
	)
	return source.pipe(stream)
}
