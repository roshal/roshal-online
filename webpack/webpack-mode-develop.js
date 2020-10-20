const $ = require('../node/packages')(
	'path',
)
module.exports = () => {
	return {
		mode: 'development',
		output: {
			path: $['path'].join(__dirname, '..', 'output'),
		},
		devServer: {
			port: 80,
		},
		devtool: 'source-map',
	}
}
