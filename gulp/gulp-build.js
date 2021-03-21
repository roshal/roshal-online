
const r__ansi_colors_lazy = require('ansi-colors-lazy')
const r__fancy_log = require('fancy-log')
const r__gulp = require('gulp')
const r__gulp_debug = require('gulp-debug')
const r__gulp_plumber = require('gulp-plumber')
const r__minimist = require('minimist')
const r__multipipe = require('multipipe')
const r__path = require('path')

const minimist = r__minimist(process.argv)

const target = 'public'

const task = (name, include, color, paths, flags = {
	develop: minimist.develop,
	produce: minimist.produce,
	observe: minimist.observe,
}, options = {
	ignoreInitial: false,
	persistent: flags.observe == true,
}) => {
	r__gulp.task(name, (callback) => {
		const run = include()
		const stream = r__multipipe(
			r__gulp_plumber(),
			run(flags, paths, options),
			r__gulp_debug({
				showFiles: true,
				title: [color('+'), name].join(' '),
			}),
			r__gulp.dest(paths.public),
		)
		if (flags.observe) {
			return stream
		}
		callback()
	})
}

task('build-assets', () => {
	return require('./gulp-build-assets')
}, r__ansi_colors_lazy.red, {
	source: r__path.join('assets'),
	public: r__path.join(target),
})

task('build-images', () => {
	return require('./gulp-build-images')
}, r__ansi_colors_lazy.green, {
	source: r__path.join('images'),
	public: r__path.join(target, 'images'),
})

task('build-styles', () => {
	return require('./gulp-build-styles')
}, r__ansi_colors_lazy.cyan, {
	source: r__path.join('styles'),
	public: r__path.join(target, 'styles'),
})

task('build-templates', () => {
	return require('./gulp-build-templates')
}, r__ansi_colors_lazy.magenta, {
	source: r__path.join('templates'),
	public: r__path.join(target),
})

task('build-webpack', () => {
	return require('./gulp-build-webpack')
}, r__ansi_colors_lazy.yellow, {
	source: r__path.join('webpack'),
	public: r__path.join(target, 'scripts'),
})
