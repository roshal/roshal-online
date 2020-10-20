
module.exports = (string = '', prev = '', next = '') => {
	const limit_prev = prev.length
	const limit_next = next.length
	return string.split('').map((value) => {
		return prev.indexOf(value)
	}).reverse().reduce((accumulator, value, index) => {
		value = limit_prev ** index * prev.indexOf(value)
		for (let key = 0; value; key += 1) {
			value += accumulator[key] || 0
			accumulator[key] = value % limit_next
			value = Math.floor(value / limit_next)
		}
		return accumulator
	}, []).map((value) => {
		return next[value]
	}).reverse().join('')
}
