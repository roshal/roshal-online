
exports.files = [
	'*.js',
]

exports.parserOptions = {
	ecmaVersion: 9,
	sourceType: 'module',
}

exports.env = {
	browser: true,
	node: true,
}

exports.rules = {
	/* variables */
	'no-undef': 'off',
	'no-unused-vars': ['warn', {
		args: 'none',
	}],
	/* stylistic-issues */
	'indent': 'off',
}
