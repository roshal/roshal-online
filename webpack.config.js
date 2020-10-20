const $ = require('./node/packages')(
	'webpack-merge',
)
const webpack = (name) => {
	const path = `./webpack/webpack-${name}`
	return require(path)
}
module.exports = (env = {}, argv) => {
	return $['webpack-merge'](
		webpack('common')(),
		webpack('source-assets')(),
		webpack('source-scripts')(),
		webpack('source-styles')(env, argv),
		webpack('source-templates')(),
		...argv.analyze ? [webpack('mode-analyze')()] : [],
		...argv.develop ? [webpack('mode-develop')()] : [],
		...argv.produce ? [webpack('mode-produce')()] : [],
	)
}
