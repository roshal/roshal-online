const $ = require('../node/packages')(
	'webpack-bundle-analyzer',
)
module.exports = () => {
	return {
		plugins: [
			new $['webpack-bundle-analyzer'].BundleAnalyzerPlugin({
				//	openAnalyzer: false,
			}),
		],
	}
}
