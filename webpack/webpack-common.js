
const r__clean_webpack_plugin = require('clean-webpack-plugin')
const r__path = require('path')
const r__webpack_config_dump_plugin = require('webpack-config-dump-plugin')

const node_modules = r__path.resolve('node_modules')

module.exports = (env = {}, argv = {}) => {
	return {
		context: r__path.resolve('source'),
		mode: 'none',
		output: {
			assetModuleFilename: env.develop ? '[file]' : 'assets/[file]?[fullhash]',
			chunkFilename: env.develop ? '[name].js' : 'chunks/[name].js?[chunkhash]',
			filename: env.develop ? '[name].js' : 'modules/[name].js?[hash]',
			path: r__path.resolve('public'),
			publicPath: '/',
		},
		resolve: {
			alias: {
				...argv.hot ? {
					'react-dom': '@hot-loader/react-dom',
				} : {},
			},
			extensions: [
				'.js',
			],
			modules: [
				node_modules,
			],
			roots: [
				r__path.resolve(),
			],
		},
		resolveLoader: {
			extensions: [
				'.js',
			],
			modules: [
				node_modules,
			],
		},
		plugins: [
			...env.WEBPACK_SERVE ? [] : [
				new r__clean_webpack_plugin(),
			],
			...env.dump ? [
				new r__webpack_config_dump_plugin.WebpackConfigDumpPlugin({
					depth: 9,
					name: 'webpack.config.dump.js',
				}),
			] : [],
		],
		watchOptions: {
			ignored: [
				node_modules,
			],
		},
		performance: {
			maxEntrypointSize: 128 << 10,
			maxAssetSize: 128 << 10,
			assetFilter: (asset) => {
				return asset.endsWith('.js')
			},
		},
		stats: {
			children: true,
		},
		experiments: {
			asset: true,
		},
	}
}
