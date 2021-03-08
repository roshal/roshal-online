
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
		console.log(value)
		array = string.split('')
		value = value.reduce((accumulator, value) => {
			return accumulator.splice(value % limit, 1).concat(accumulator)
		}, array).join('')
		return join(value, name)
	}
}

const join = (value, name) => {
	return [name, value].join('--')
}

const join_az = (value, name) => {
	return ['az', value].join('')
}

const create = (string) => {
	const handle = (join = join) => {
		return module.exports(string, join)
	}
	handle.handle = handle(numbers)
	return handle
}

// az0123456789
module.exports.numbers = create(numbers)

// abcdefghijklmnopqrstuvwxyz
module.exports.letters = create(letters)
