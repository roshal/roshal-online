
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					include: [
						p__path.resolve('assets'),
					],
					type: 'asset/resource',
					generator: {
						filename: env.develop ? '[name][ext]' : 'assets/[name][ext]?[hash]',
					},
				},
				{
					include: [
						p__path.resolve('images'),
					],
					type: 'asset',
					generator: {
						filename: env.develop ? 'assets/[name][ext]' : 'assets/[name][ext]?[hash]',
					},
				},
			],
		},
	}
}
