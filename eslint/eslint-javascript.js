
exports.files = [
	'*.js',
]

exports.parserOptions = {
	ecmaVersion: 9,
	sourceType: 'module',
}

exports.env = {
	node: true,
	commonjs: false,
}

exports.rules = {
	/* variables */
	'no-unused-vars': 'off',
}
