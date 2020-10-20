import gulp from 'gulp'
module.exports = (options, callback) => {
	gulp.watch(options.glob, {
		delay: 0,
		read: false,
	}, gulp.parallel(options.tasks))
	callback()
}
