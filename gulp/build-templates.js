import gulp              from 'gulp'
import gulp_load_plugins from 'gulp-load-plugins'
import merge_stream      from 'merge-stream'
import multipipe         from 'multipipe'
const plugins = gulp_load_plugins()
module.exports = (options) => {
	return multipipe(
		merge_stream(
			multipipe(
				gulp.src(options.source + '/pages/**', {
					nodir: true,
					since: gulp.lastRun(options.name),
				}),
				plugins.rename({
					suffix: '/index',
				}),
			),
			multipipe(
				gulp.src(options.source + '/*', {
					nodir: true,
				}),
				plugins.if(plugins.util.env.develop, plugins.newer({
					dest: options.output,
					ext: '.html',
					extra: options.source + '/layouts/**',
				})),
			),
		),
		plugins.pug({
			basedir: options.source,
			pretty: '\t',
		}),
		plugins.if(plugins.util.env.produce, plugins.htmlmin({
			collapseWhitespace: true,
			minifyCSS: true,
		})),
		gulp.dest(options.output),
		options.debug(),
	).on('error', options.handler)
}
