
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
		const path = r__path.relative(context.rootContext, context.context)
		const data = [path, name].join('.').split('')
		const sequence = data.reduce((accumulator, value, index) => {
			value = length ** index * symbols.indexOf(value)
			for (let key = 0; value; key += 1) {
				value += accumulator[key] || 0
				accumulator[key] = value % limit
				value = Math.floor(value / limit)
			}
			return accumulator
		}, [])
		const array = string.split('')
		const key = sequence.reduce((accumulator, value) => {
			return accumulator.splice(value % limit, 1).concat(accumulator)
		}, array).join('')
		return join(key, name)
	}
}

const create = (string, join = (key, name) => {
	return [name, key].join('--')
}) => {
	const handle = module.exports(string, join)
	handle.handle = (join) => {
		return module.exports(string, join)
	}
	return handle
}

// name--0123456789
module.exports.numbers = create(numbers)

// name--abcdefghijklmnopqrstuvwxyz
module.exports.letters = create(letters)

// abcdefghijklmnopqrstuvwxyz
module.exports.uniques = module.exports()
