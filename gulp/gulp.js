
const r__gulp = require('gulp')

const m__gulp_build = require('./gulp-build')

const target = 'public'

module.exports = {
	...m__gulp_build,
}

module.exports['build'] = r__gulp.parallel(
	r__gulp.task('build-assets'),
	r__gulp.task('build-images'),
	r__gulp.task('build-styles'),
	r__gulp.task('build-templates'),
	r__gulp.task('build-webpack'),
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
