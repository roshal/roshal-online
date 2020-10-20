
const p__ansi_colors_lazy = require('ansi-colors-lazy')
const p__fancy_log = require('fancy-log')
const p__gulp = require('gulp')
const p__gulp_debug = require('gulp-debug')
const p__gulp_plumber = require('gulp-plumber')
const p__minimist = require('minimist')
const p__multipipe = require('multipipe')
const p__path = require('path')

const minimist = p__minimist(process.argv)

const target = 'public'

const task = (name, include, color, paths, flags = {
	develop: minimist.develop,
	produce: minimist.produce,
	observe: minimist.observe,
}, options = {
	ignoreInitial: false,
	persistent: !!flags.observe,
}) => {
	p__gulp.task(name, (callback) => {
		const run = include()
		const stream = p__multipipe(
			p__gulp_plumber(),
			run(flags, paths, options),
			p__gulp_debug({
				showFiles: true,
				title: [color('+'), name].join(' '),
			}),
			p__gulp.dest(paths.public),
		)
		if (flags.observe) {
			return stream
		}
		callback()
	})
}

task('build-assets', () => {
	return require('./gulp-build-assets')
}, p__ansi_colors_lazy.red, {
	source: p__path.join('assets'),
	public: p__path.join(target),
})

task('build-images', () => {
	return require('./gulp-build-images')
}, p__ansi_colors_lazy.green, {
	source: p__path.join('images'),
	public: p__path.join(target, 'images'),
})

task('build-styles', () => {
	return require('./gulp-build-styles')
}, p__ansi_colors_lazy.cyan, {
	source: p__path.join('styles'),
	public: p__path.join(target, 'styles'),
})

task('build-templates', () => {
	return require('./gulp-build-templates')
}, p__ansi_colors_lazy.magenta, {
	source: p__path.join('templates'),
	public: p__path.join(target),
})

task('build-webpack', () => {
	return require('./gulp-build-webpack')
}, p__ansi_colors_lazy.yellow, {
	source: p__path.join('webpack'),
	public: p__path.join(target, 'scripts'),
})
