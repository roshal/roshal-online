
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
			path: r__path.resolve('public'),
			assetModuleFilename:env.develop ? 'assets/[name][ext]' : 'assets/[name][ext]?[hash]',
			chunkFilename: env.develop ? '[name].js' : 'assets/[name].js?[hash]',
			filename: env.develop ? '[name].js' : 'assets/[name].js',
			publicPath: '/',
			libraryTarget: 'umd',
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
			new r__clean_webpack_plugin.CleanWebpackPlugin(),
			new r__static_site_generator_webpack_plugin({
				entry: 'start',
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
			historyApiFallback: {
				rewrites: [
					{
						from: /\/$/,
						to: '/',
					},
				],
			},
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
