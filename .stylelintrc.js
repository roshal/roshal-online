
exports.extends = [
	'stylelint-config-sugarss-recommended',
]

exports.rules = {
	'color-named': null,
	'indentation': 'tab',
	'property-no-unknown': [true, {
		ignoreProperties: [
			'border-bottom-radius',
			'border-top-radius',
		],
	}],
}
