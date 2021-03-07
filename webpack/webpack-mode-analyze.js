
const r__webpack_bundle_analyzer = require('webpack-bundle-analyzer')

module.exports = (env = {}, argv = {}) => {
	return {
		plugins: [
			new r__webpack_bundle_analyzer.BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		],
	}
}
