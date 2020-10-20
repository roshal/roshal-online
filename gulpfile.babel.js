import gulp              from 'gulp'
import gulp_load_plugins from 'gulp-load-plugins'
const plugins = gulp_load_plugins()
const paths = {
	output: plugins.util.env.pro ? 'public' : 'output',
	source: 'source',
}
const lazy = (name, options) => {
	const path = './gulp/' + name
	return (callback) => require(path)(options, callback)
}
const task = (name, options = {}) => {
	options.name = name
	options.debug = () => plugins.debug({
		showFiles: plugins.util.env.dev,
		title: plugins.util.colors.gray(options.name),
	})
	options.handler = function (error) {
		plugins.util.log(plugins.util.colors.red(error.name) + '\0' + error.message)
		if (plugins.util.env.dev) {
			this.emit('end')
		}
	}
	gulp.task(name, lazy(name, options))
}
task('livereload', {
	folder: paths.output,
})
task('server-tls', {
	folder: paths.output,
	port: process.env.PORT || 443,
})
task('server', {
	folder: paths.output,
	port: process.env.PORT || 80,
})
task('build-common', {
	source: paths.source + '/common',
	output: paths.output,
})
task('build-images', {
	source: paths.source + '/images',
	output: paths.output + '/images',
})
task('build-scripts', {
	source: paths.source + '/scripts',
	output: paths.output + '/scripts',
})
task('build-styles', {
	source: paths.source + '/styles',
	output: paths.output + '/styles',
})
task('build-templates', {
	source: paths.source + '/templates',
	output: paths.output,
})
gulp.task('build', gulp.parallel(
	'build-common',
	'build-images',
	'build-scripts',
	'build-styles',
	'build-templates',
))
gulp.task('watch-common', lazy('watch', {
	tasks: ['build-common'],
	glob: paths.source + '/common',
}))
gulp.task('watch-images', lazy('watch', {
	tasks: ['build-images'],
	glob: paths.source + '/images',
}))
gulp.task('watch-scripts', lazy('watch', {
	tasks: ['build-scripts'],
	glob: paths.source + '/scripts',
}))
gulp.task('watch-styles', lazy('watch', {
	tasks: ['build-styles'],
	glob: paths.source + '/styles',
}))
gulp.task('watch-templates', lazy('watch', {
	tasks: ['build-templates'],
	glob: paths.source + '/templates',
}))
gulp.task('watch', gulp.parallel(
	'watch-common',
	'watch-images',
	'watch-styles',
	'watch-templates',
))
gulp.task('default', gulp.parallel(
	'build',
	'watch',
))
