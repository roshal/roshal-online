
const r__gulp_watch = require('gulp-watch')
const r__lodash_webpack_plugin = require('lodash-webpack-plugin')
const r__multipipe = require('multipipe')
const r__path = require('path')
const r__vinyl_named = require('vinyl-named')
const r__webpack = require('webpack')
const r__webpack_stream = require('webpack-stream')

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = r__path.join(paths.source, '*')
	const source = r__gulp_watch(glob, options)
	const stream = r__multipipe(
		r__vinyl_named(),
		r__webpack_stream({
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
					r__path.join(paths.source, '..', '..', 'node_modules'),
				],
				alias: {
					'': r__path.join(paths.source),
				},
				extensions: [
					'.js',
				],
			},
			plugins: [
				new r__lodash_webpack_plugin(),
				...flags.develop ? [
					new r__webpack.SourceMapDevToolPlugin(),
				] : [],
			],
			module: {
				rules: [
					{
						resource: {
							exclude: [
								r__path.join(paths.source, '..', '..', 'node_modules'),
							],
							include: [
								r__path.join(paths.source),
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
		}, r__webpack),
	)
	return source.pipe(stream)
}
