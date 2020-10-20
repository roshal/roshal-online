
exports.files = [
	'*.ts',
]

exports.parserOptions = {
	project: 'tsconfig.json5',
}

exports.extends = [
	'plugin:@typescript-eslint/eslint-recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:@typescript-eslint/recommended-requiring-type-checking',
	'plugin:import/typescript',
	'plugin:react/recommended',
]

exports.plugins = [
	'react-hooks',
]

exports.settings = {
	react: {
		version: 'detect',
	},
}

exports.rules = {
	/* plugin:@typescript-eslint */
	'@typescript-eslint/ban-ts-ignore': 'off',
	'@typescript-eslint/camelcase': 'off',
	'@typescript-eslint/class-name-casing': 'off',
	'@typescript-eslint/explicit-function-return-type': 'off',
	'@typescript-eslint/indent': ['error', 'tab', {
		SwitchCase: 1,
	}],
	'@typescript-eslint/member-delimiter-style': ['error', {
		multiline: {
			delimiter: 'comma',
		},
		singleline: {
			delimiter: 'comma',
		},
	}],
	'@typescript-eslint/no-empty-interface': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-unused-vars': 'off',
	'@typescript-eslint/no-var-requires': 'off',
	'@typescript-eslint/quotes': ['error', 'single'],
	'@typescript-eslint/semi': ['error', 'never'],
	/* plugin:react-hooks */
	'react-hooks/exhaustive-deps': 'warn',
	'react-hooks/rules-of-hooks': 'error',
}
