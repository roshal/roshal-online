const $ = require('../node/packages')(
	'gulp',
	'gulp-autoprefixer',
	'gulp-clean-css',
	'gulp-sass',
	'gulp-sourcemaps',
	'gulp-watch',
	'merge-stream',
	'multipipe',
	'path',
)
module.exports = (options) => {
	const globs = $['path'].join(options.folders.source, '*')
	const pipe = (...object) => {
		const stream = $['gulp'].src(...object)
		return options.mode.watch ? $['merge-stream'](
			stream,
			$['gulp-watch'](...object),
		) : stream
	}
	return $['multipipe'](
		pipe(globs, {
			nodir: true,
		}),
		...options.mode.develop ? [
			$['gulp-sourcemaps'].init(),
		] : [],
		$['gulp-sass']({
			includePaths: 'node_modules/normalize.css',
			indentType: 'tab',
			outputStyle: options.mode.produce ? 'compressed' : 'expanded',
		}),
		$['gulp-autoprefixer'](),
		...options.mode.produce ? [
			$['gulp-clean-css']({
				level: {
					1: {
						specialComments: options.mode.develop,
					},
					2: {},
				},
			}),
		] : [],
		...options.mode.develop ? [
			$['gulp-sourcemaps'].write(),
		] : [],
		$['gulp'].dest(options.folders.output),
		options.debug,
	).on('error', options.handler)
}
