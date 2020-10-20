import gulp              from 'gulp'
import gulp_load_plugins from 'gulp-load-plugins'
import multipipe         from 'multipipe'
import vinyl_named       from 'vinyl-named'
import webpack           from 'webpack'
import webpack_stream    from 'webpack-stream'
const plugins = gulp_load_plugins()
module.exports = (options) => {
	return multipipe(
		gulp.src(options.source + '/*', {
			nodir: true,
		}),
		vinyl_named(),
		webpack_stream({
			cache: plugins.util.env.develop,
			watch: !~plugins.util.env._.indexOf('build'),
			module: {
				rules: [
					{
						test: /\.js$/,
						use: [
							{
								loader: 'babel-loader',
								options: {
									presets: 'env',
								},
							},
						],
					},
				],
			},
			plugins: plugins.util.env.develop ? [
				new webpack.SourceMapDevToolPlugin(),
			] : [
				new webpack.optimize.UglifyJsPlugin({
					ascii_only: false,
					comments: false,
				}),
			],
		}, webpack),
		gulp.dest(options.output),
		options.debug(),
	).on('error', options.handler)
}
