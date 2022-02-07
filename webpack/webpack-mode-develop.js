
const r__html_webpack_plugin = require('html-webpack-plugin')
const r__path = require('path')
//const r__react_refresh_webpack_plugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env = {}, argv = {}) => {

	return {
		entry: {
			entry: './entries/entry.ts',
		},
		mode: 'development',
		optimization: {
			runtimeChunk: 'single',
		},
		plugins: [
			new r__html_webpack_plugin({
				favicon: r__path.resolve('assets', 'favicon.png'),
				//hash: true,
				//inject: false,
				//template: p__path.resolve('pug', 'sources', 'index.pug'),
				//templateParameters: (compilation, assets, options) => {
				//	return {
				//		options: {
				//			compilation, assets,
				//		},
				//	}
				//},
			}),
			//new r__react_refresh_webpack_plugin(),
		],
		devtool: 'source-map',
	}

}
