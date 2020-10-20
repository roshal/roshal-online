
const p__gulp_load_plugins = require('gulp-load-plugins')
const p__gulp_watch = require('gulp-watch')
const p__merge_stream = require('merge-stream')
const p__multipipe = require('multipipe')
const p__path = require('path')

const plugins = p__gulp_load_plugins()

module.exports = (flags = {}, paths = {}, options = {}) => {
	const index = p__path.join(paths.source, '*.pug')
	const pages = p__path.join(paths.source, 'pages', '**.pug')
	const rename = plugins.rename({
		suffix: '/index',
	})
	const source =  p__merge_stream(
		p__gulp_watch(index, options),
		p__gulp_watch(pages, options).pipe(rename),
	)
	const stream = p__multipipe(
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
