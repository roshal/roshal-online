
const m__rebase = require('./rebase')

test('rebase', () => {
	const string = '2109687354'
	const prev = '0123456789'
	const next = 'abcdefghijklmnopqrstuvwxyz'
	const received = m__rebase(string, prev, next)
	const expected = 'gvoqhhi'
	expect(received).toEqual(expected)
})
