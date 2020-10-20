
const p__webpack_merge = require('webpack-merge')

module.exports = (env = {}, argv = {}) => {
	const configs = [
		require('./webpack-common'),
		require('./webpack-module-assets'),
		require('./webpack-module-babel'),
		require('./webpack-module-sass'),
		require('./webpack-module-typescript'),
		env.analyze && require('./webpack-mode-analyze'),
		env.develop && require('./webpack-mode-develop'),
		env.produce && require('./webpack-mode-produce'),
	].reduce((accumulator, value) => {
		if (value) {
			const config = value(env, argv)
			accumulator.push(config)
		}
		return accumulator
	}, [])

	return p__webpack_merge.merge(configs)
}
