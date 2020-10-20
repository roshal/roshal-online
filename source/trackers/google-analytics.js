
const array = [
	['create', 'UA-103963284-1', 'auto'],
	['send', 'pageview'],
]

export default window['ga'] = Object.assign((...element) => {
	array.push(element)
}, {
	l: Date.now(),
	q: array,
})
