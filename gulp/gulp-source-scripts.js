const $ = require('../node/packages')(
	'gulp',
	'gulp-watch',
	'lodash-webpack-plugin',
	'merge-stream',
	'multipipe',
	'path',
	'vinyl-named',
	'webpack',
	'webpack-stream',
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
			dot: true,
			nodir: true,
		}),
		$['vinyl-named'](),
		$['webpack-stream']({
			mode: (() => {
				if (options.mode.develop) {
					return 'development'
				} else
				if (options.mode.produce) {
					return 'production'
				}
				return 'none'
			})(),
			cache: options.mode.develop,
			watch: options.watch,
			resolve: {
				modules: [
					$['path'].join(options.folders.source, '..', '..', 'node_modules'),
				],
				alias: {
					'': $['path'].join(options.folders.source),
				},
				extensions: [
					'.js',
				],
			},
			plugins: [
				new $['lodash-webpack-plugin'](),
				...options.mode.develop ? [
					new $['webpack'].SourceMapDevToolPlugin(),
				] : [],
			],
			module: {
				rules: [
					{
						resource: {
							exclude: [
								$['path'].join(options.folders.source, '..', '..', 'node_modules'),
							],
							include: [
								$['path'].join(options.folders.source),
							],
							test: [
								/\.js$/,
							],
						},
						use: [
							{
								loader: 'babel-loader',
								options: {
									plugins: [
										'lodash',
									],
									presets: [
										'@babel/preset-env',
									],
								},
							},
						],
					},
				],
			},
		}, $['webpack']),
		$['gulp'].dest(options.folders.output),
		options.debug,
	).on('error', options.handler)
}
