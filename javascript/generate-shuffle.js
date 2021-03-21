
const r__path = require('path')

const numbers = '0123456789'
const letters = 'abcdefghijklmnopqrstuvwxyz'

const symbols = [
	numbers,
	letters,
	letters.toUpperCase(),
	'-./\\_',
].join('')

module.exports = (string = letters, join = (value) => {
	return value
}) => {
	const limit = string.length
	const length = symbols.length
	return (context, mask, name) => {
		let array, value
		value = r__path.relative(context.rootContext, context.context)
		value = [value, name].join('.').split('')
		array = []
		value = value.reduce((accumulator, value, index) => {
			value = length ** index * symbols.indexOf(value)
			for (let key = 0; value; key += 1) {
				value += accumulator[key] || 0
				accumulator[key] = value % limit
				value = Math.floor(value / limit)
			}
			return accumulator
		}, array)
		array = string.split('')
		value = value.reduce((accumulator, value) => {
			return accumulator.splice(value % limit, 1).concat(accumulator)
		}, array).join('')
		return join(value, name)
	}
}

const create = (string, join) => {
	const handle = module.exports(string, join)
	handle.handle = (join) => {
		return module.exports(string, join)
	}
	return handle
}

// a0123456789z
module.exports.numbers = create(numbers, (value) => {
	return ['a', value, 'z'].join('')
})

// abcdefghijklmnopqrstuvwxyz
module.exports.letters = create(letters, (value, name) => {
	return [name, value].join('--')
})
