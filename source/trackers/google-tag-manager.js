
const array = window['dataLayer'] = [
	['js', Date.now()],
	['config', 'UA-92032319-1'],
]

export default window['gtag'] = (...element) => {
	array.push(element)
}
