import gulp      from 'gulp'
import multipipe from 'multipipe'
module.exports = (options) => {
	return multipipe(
		gulp.src(options.source + '/**', {
			dot: true,
			nodir: true,
			since: gulp.lastRun(options.name),
		}),
		gulp.dest(options.output),
		options.debug(),
	).on('error', options.handler)
}
