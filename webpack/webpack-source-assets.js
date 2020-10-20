const $ = require('../node/packages')(
	'path',
	'webpack',
)
module.exports = () => {
	return {
		plugins: [
			new $['webpack'].PrefetchPlugin('./assets/favicon.png'),
		],
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].join(__dirname, '..', 'source', 'assets'),
							$['path'].join(__dirname, '..', 'source', 'images'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								context: $['path'].join(__dirname, '..', 'source', 'assets'),
								name: '[name].[ext]',
								useRelativePath: true,
							},
						},
					],
				},
			],
		},
	}
}
