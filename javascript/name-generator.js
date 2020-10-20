
const p__path = require('path')

const numbers = '0123456789'
const letters = 'abcdefghijklmnopqrstuvwxyz'
const symbols = [
	numbers,
	letters,
	letters.toUpperCase(),
	'-./\\_',
].join('')

module.exports = (base) => {
	let string
	let handle
	if (base === numbers.length) {
		string = numbers
		handle = (value, name) => {
			return [name, value].join('--')
		}
	}
	if (base === letters.length) {
		string = letters
		handle = (value, name) => {
			return value
		}
	}
	const limit_next = string.length
	const limit_prev = symbols.length
	return (context, mask, name) => {
		let array, value
		value = p__path.relative(context.rootContext, context.context)
		value = [value, name].join('.').split('')
		array = []
		value = value.reduce((accumulator, value, index) => {
			value = limit_prev ** index * symbols.indexOf(value)
			for (let key = 0; value; key += 1) {
				value += accumulator[key] || 0
				accumulator[key] = value % limit_next
				value = Math.floor(value / limit_next)
			}
			return accumulator
		}, array)
		array = string.split('')
		value = value.reduce((accumulator, value) => {
			return accumulator.splice(value % limit_next, 1).concat(accumulator)
		}, array).join('')
		return handle(value, name)
	}
}
