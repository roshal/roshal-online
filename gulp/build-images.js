import gulp              from 'gulp'
import gulp_load_plugins from 'gulp-load-plugins'
import imagemin_mozjpeg  from 'imagemin-mozjpeg'
import multipipe         from 'multipipe'
const mozjpeg = imagemin_mozjpeg()
const plugins = gulp_load_plugins()
module.exports = (options) => {
	return multipipe(
		gulp.src(options.source + '/**', {
			nodir: true,
			since: gulp.lastRun(options.name),
		}),
		plugins.if(plugins.util.env.produce, plugins.imagemin([
			plugins.imagemin.gifsicle(),
			mozjpeg,
			plugins.imagemin.optipng({
				optimizationLevel: 7,
			}),
			plugins.imagemin.svgo(),
		])),
		gulp.dest(options.output),
		options.debug(),
	).on('error', options.handler)
}
