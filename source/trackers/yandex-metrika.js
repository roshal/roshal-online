
const array = [
	(() => {
		const id = 44408305
		return [id, 'init', {
			id,
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
			webvisor: true,
		}]
	})(),
]

export default window['ym'] = Object.assign((...element) => {
	array.push(element)
}, {
	l: Date.now(),
	a: array,
})
