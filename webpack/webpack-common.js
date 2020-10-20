
const p__clean_webpack_plugin = require('clean-webpack-plugin')
const p__path = require('path')
const p__static_site_generator_webpack_plugin = require('static-site-generator-webpack-plugin')

const m__alias = require('../alias')

const node_modules = p__path.resolve('node_modules')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: p__path.resolve('source'),
		entry: {
			'generate': './generate.js',
		},
		output: {
			path: p__path.resolve('public'),
			assetModuleFilename:env.develop ? 'assets/[name][ext]' : 'assets/[name][ext]?[hash]',
			chunkFilename: env.develop ? '[name].js' : 'assets/[name].js?[hash]',
			filename: env.develop ? '[name].js' : 'assets/[name].js',
			publicPath: '/',
			libraryTarget: 'umd',
			libraryExport: 'default',
		},
		resolve: {
			alias: m__alias,
			extensions: [
				'.js',
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
			new p__clean_webpack_plugin.CleanWebpackPlugin(),
			new p__static_site_generator_webpack_plugin({
				entry: 'generate',
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
