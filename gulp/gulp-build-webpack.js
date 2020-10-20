
const p__gulp_watch = require('gulp-watch')
const p__lodash_webpack_plugin = require('lodash-webpack-plugin')
const p__multipipe = require('multipipe')
const p__path = require('path')
const p__vinyl_named = require('vinyl-named')
const p__webpack = require('webpack')
const p__webpack_stream = require('webpack-stream')

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = p__path.join(paths.source, '*')
	const source = p__gulp_watch(glob, options)
	const stream = p__multipipe(
		p__vinyl_named(),
		p__webpack_stream({
			mode: (() => {
				if (flags.develop) {
					return 'development'
				} else
				if (flags.produce) {
					return 'production'
				}
				return 'none'
			})(),
			cache: flags.develop,
			watch: flags.observe,
			resolve: {
				modules: [
					p__path.join(paths.source, '..', '..', 'node_modules'),
				],
				alias: {
					'': p__path.join(paths.source),
				},
				extensions: [
					'.js',
				],
			},
			plugins: [
				new p__lodash_webpack_plugin(),
				...flags.develop ? [
					new p__webpack.SourceMapDevToolPlugin(),
				] : [],
			],
			module: {
				rules: [
					{
						resource: {
							exclude: [
								p__path.join(paths.source, '..', '..', 'node_modules'),
							],
							include: [
								p__path.join(paths.source),
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
		}, p__webpack),
	)
	return source.pipe(stream)
}
