
module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		devtool: 'source-map',
		entry: {
			entry: './entry.ts',
		},
	}
}
