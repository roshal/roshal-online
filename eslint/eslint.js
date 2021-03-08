
exports.root = true

exports.reportUnusedDisableDirectives = true

exports.extends = [
	'eslint:recommended',
	'plugin:import/recommended',
]

exports.rules = {
	/* stylistic-issues */
	'comma-dangle': ['error', 'always-multiline'],
	'indent': ['error', 'tab'],
	'linebreak-style': ['error', 'unix'],
	'new-parens': ['error'],
	'no-mixed-spaces-and-tabs': ['error'],
	/* plugin:import */
	'import/no-unresolved': 'off',
}

exports.overrides = [
	require('./eslint-extra-test'),
	require('./eslint-javascript'),
	require('./eslint-typescript'),
]
