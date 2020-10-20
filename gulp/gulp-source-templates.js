const $ = require('../node/packages')(
	'gulp',
	'gulp-htmlmin',
	'gulp-newer',
	'gulp-pug',
	'gulp-rename',
	'gulp-watch',
	'merge-stream',
	'multipipe',
	'path',
)
module.exports = (options) => {
	const pipe = (...object) => {
		const stream = $['gulp'].src(...object)
		return options.mode.watch ? $['merge-stream'](
			stream,
			$['gulp-watch'](...object),
		) : stream
	}
	return $['multipipe'](
		$['merge-stream'](
			(() => {
				const globs = $['path'].join(options.folders.source, 'pages', '**')
				return $['multipipe'](
					pipe(globs, {
						dot: true,
						nodir: true,
					}),
					$['gulp-rename']({
						suffix: '/index',
					}),
				)
			})(),
			(() => {
				const globs = $['path'].join(options.folders.source, '*')
				return $['multipipe'](
					pipe(globs, {
						nodir: true,
					}),
					...options.mode.develop ? [
						$['gulp-newer']({
							dest: options.folders.output,
							ext: '.html',
							extra: $['path'].join(options.folders.source, 'layouts', '**'),
						}),
					] : [],
				)
			})(),
		),
		$['gulp-pug']({
			basedir: options.folders.source,
			pretty: '\t',
		}),
		...options.mode.produce ? [
			$['gulp-htmlmin']({
				collapseWhitespace: true,
				minifyCSS: true,
			}),
		] : [],
		$['gulp'].dest(options.folders.output),
		options.debug,
	).on('error', options.handler)
}
