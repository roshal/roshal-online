
const p__gulp = require('gulp')

const m__gulp_build = require('./gulp-build')

const target = 'public'

module.exports = {
	...m__gulp_build,
}

module.exports['build'] = p__gulp.parallel(
	p__gulp.task('build-assets'),
	p__gulp.task('build-images'),
	p__gulp.task('build-styles'),
	p__gulp.task('build-templates'),
	p__gulp.task('build-webpack'),
)

module.exports['livereload'] = () => {
	return require('./gulp-livereload')({
		target,
	})
}

module.exports['serve'] = () => {
	return require('./gulp-serve')({
		target,
		port: process.env.PORT || 1024,
	})
}
