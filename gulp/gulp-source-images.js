const $ = require('../node/packages')(
	'gulp',
	'gulp-imagemin',
	'gulp-watch',
	'imagemin-mozjpeg',
	'merge-stream',
	'multipipe',
	'path',
)
module.exports = (options) => {
	const globs = $['path'].join(options.folders.source, '**')
	const pipe = (...object) => {
		const stream = $['gulp'].src(...object)
		return options.mode.watch ? $['merge-stream'](
			stream,
			$['gulp-watch'](...object),
		) : stream
	}
	return $['multipipe'](
		pipe(globs, {
			dot: true,
			nodir: true,
		}),
		...options.mode.produce ? [
			$['gulp-imagemin']([
				$['gulp-imagemin'].gifsicle(),
				$['imagemin-mozjpeg'](),
				$['gulp-imagemin'].optipng({
					optimizationLevel: 7,
				}),
				$['gulp-imagemin'].svgo(),
			]),
		] : [],
		$['gulp'].dest(options.folders.output),
		options.debug,
	).on('error', options.handler)
}
