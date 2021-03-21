
const m__generate_name = require('./generate-shuffle')

test(m__generate_name.name, () => {
	const map = m__generate_name.numbers
	const received = map({
		rootContext: '/abc',
		context: '/abc/def',
	}, null, 'name')
	const expected = 'name--6470825319'
	expect(received).toEqual(expected)
})
