
const r__html_webpack_plugin = require('html-webpack-plugin')
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		entry: {
			entry: './entries/entry.ts',
		},
		optimization: {
			runtimeChunk: 'single',
		},
		plugins: [
			new r__html_webpack_plugin({
				favicon: r__path.resolve('assets', 'favicon.png'),
				//	hash: true,
				//	inject: false,
				//	template: p__path.resolve('pug', 'sources', 'index.pug'),
				//	templateParameters: (compilation, assets, options) => {
				//		return {
				//			options: {
				//				compilation, assets,
				//			},
				//		}
				//	},
			}),
		],
		devtool: 'source-map',
	}
}
