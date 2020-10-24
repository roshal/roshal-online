
const r__path = require('path')
const r__postcss_simple_vars = require('postcss-simple-vars')

const alias = {
	'//': (id) => {
		return r__path.resolve(id)
	},
	'/': (id) => {
		return r__path.resolve('styles', id)
	},
}

exports.syntax = 'sugarss'

exports.plugins = {
	'postcss-preset-env': {
		stage: 4,
		features: {
			'nesting-rules': true,
		},
		insertBefore: {
			'all-property': r__postcss_simple_vars,
		},
	},
	'postcss-import': {
		resolve: (id) => {
			for (const key in alias) {
				if (id.startsWith(key)) {
					id = id.slice(key.length)
					id = alias[key](id)
					id = [id, 'pcss'].join('.')
					break
				}
			}
			return id
		},
	},
	//
	'postcss-mixins': {},
	//
	'postcss-nested': {},
	'postcss-extend': {},
	//'postcss-simple-vars': {},
	'postcss-hexrgba': {},
	'postcss-map': {},
	'postcss-short': {},
	'postcss-url': {},
	'postcss-utilities': {},
}
