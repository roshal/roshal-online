
const r__clean_webpack_plugin = require('clean-webpack-plugin')
const r__path = require('path')

const m__alias = require('../alias')

const node_modules = r__path.resolve('node_modules')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: r__path.resolve('source'),
		output: {
			assetModuleFilename:env.develop ? 'assets/[name][ext]' : 'assets/[name][ext]?[hash]',
			chunkFilename: env.develop ? '[name].js' : 'assets/[id].js?[hash]',
			filename: env.develop ? '[name].js' : 'assets/[name].js',
			path: r__path.resolve('public'),
			publicPath: '/',
		},
		resolve: {
			alias: {
				...m__alias,
				...argv.hot ? {
					'react-dom': '@hot-loader/react-dom',
				} : {},
			},
			extensions: [
				'.js', '.ts',
			],
			modules: [
				node_modules,
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
		],
		devServer: {
			injectHot: false,
			compress: argv.https,
			historyApiFallback: true,
			host: '0.0.0.0',
			https: argv.https,
			port: argv.port || 1024,
			index: '/index.html',
			proxy: {
				'/api/': {
					changeOrigin: true,
					target: '//localhost:2048',
					pathRewrite: {
						'^/api/': '/',
					},
				},
			},
		},
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
		experiments: {
			asset: true,
		},
	}
}
