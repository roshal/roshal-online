
const p__lodash_webpack_plugin = require('lodash-webpack-plugin')
const p__path = require('path')
const p__terser_webpack_plugin = require('terser-webpack-plugin')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'production',
		plugins: [
			new p__lodash_webpack_plugin(),
		],
		//optimization: {
		//	minimizer: [
		//		new p__terser_webpack_plugin({
		//			//	parallel: true,
		//			terserOptions: {
		//				toplevel: true,
		//				output: {
		//					comments: false,
		//				},
		//			},
		//			//	extractComments: true,
		//		}),
		//	],
		//},
		performance: {
			maxEntrypointSize: 128 << 12,
			maxAssetSize: 128 << 11,
			assetFilter: (asset) => {
				return asset.endsWith('.js')
			},
		},
		devtool: 'nosources-source-map',
	}
}
