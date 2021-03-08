
const m__generate_name = require('./name-generator')

test(m__generate_name.name, () => {
	const map = m__generate_name(10)
	const received = map({
		rootContext: '/abc',
		context: '/abc/def',
	}, null, 'name')
	const expected = 'name--6470825319'
	expect(received).toEqual(expected)
})
