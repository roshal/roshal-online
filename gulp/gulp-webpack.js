const $ = require('../node/packages')(
	'../node/pick',
	'../webpack.config',
	'gulp',
	'gulp-watch',
	'merge-stream',
	'multipipe',
	'path',
	'vinyl-named',
	'webpack',
	'webpack-stream',
)
module.exports = (options) => {
	const env = $['../node/pick'](object, [
		'analyze',
		'develop',
		'produce',
	])
	const config = $['../webpack.config'](env)
	$['webpack'](config).run()
}
