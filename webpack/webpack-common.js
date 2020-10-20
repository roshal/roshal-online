const $ = require('../node/packages')(
	'path',
	'webpack-stylish',
)
module.exports = () => {
	return {
		mode: 'none',
		context: $['path'].join(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/source.js',
		},
		output: {
			chunkFilename: 'scripts/[id].js',
			filename: '[name].js',
		},
		stats: false,
		resolve: {
			alias: {
				'': $['path'].join(__dirname, '..', 'source', 'scripts'),
			},
			extensions: [
				'.js',
			],
			modules: [
				$['path'].join(__dirname, '..', 'node_modules'),
			],
		},
		plugins: [
			new $['webpack-stylish'](),
		],
	}
}
