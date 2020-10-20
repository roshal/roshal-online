const $ = require('../node/packages')(
	'lodash-webpack-plugin',
	'path',
)
module.exports = () => {
	return {
		mode: 'production',
		output: {
			path: $['path'].join(__dirname, '..', 'public'),
		},
		devServer: {
			compress: true,
			https: true,
			port: 443,
		},
		plugins: [
			new $['lodash-webpack-plugin'](),
		],
	}
}
