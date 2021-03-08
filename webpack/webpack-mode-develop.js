
const r__react_refresh_webpack_plugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		devtool: 'source-map',
		entry: {
			entry: './entry.ts',
		},
		plugins: [
			new r__react_refresh_webpack_plugin(),
		],
	}
}
