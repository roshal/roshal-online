const $ = require('../node/packages')(
	'gulp',
	'gulp-watch',
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
		$['gulp'].dest(options.folders.output),
		options.debug,
	).on('error', options.handler)
}
