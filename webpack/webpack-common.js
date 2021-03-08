
const r__clean_webpack_plugin = require('clean-webpack-plugin')
const r__path = require('path')
const r__static_site_generator_webpack_plugin = require('static-site-generator-webpack-plugin')

const m__alias = require('../alias')

const node_modules = r__path.resolve('node_modules')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: r__path.resolve('source'),
		entry: {
			start: './start.ts',
		},
		output: {
			assetModuleFilename:env.develop ? 'assets/[name][ext]' : 'assets/[name][ext]?[hash]',
			chunkFilename: env.develop ? '[name].js' : 'assets/[name].js?[hash]',
			filename: env.develop ? '[name].js' : 'assets/[name].js',
			libraryTarget: 'commonjs2',
			path: r__path.resolve('public'),
			publicPath: '/',
			//	libraryTarget: 'umd',
		},
		resolve: {
			alias: m__alias,
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
		},
		plugins: [
			...env.WEBPACK_SERVE ? [] : [
				new r__clean_webpack_plugin(),
			],
			new r__static_site_generator_webpack_plugin({
				crawl: true,
				entry: 'start',
				globals: {
					window: {},
				},
			}),
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
		target: 'node',
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
