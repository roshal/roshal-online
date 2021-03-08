
export const id = (() => {
	let index = 0
	const map = new Map()
	return (key: any) => {
		if (!map.has(key)) {
			index += 1
			map.set(key, index)
		}
		return map.get(key)
	}
})()

export const styler = (object: {
	[key: string]: string,
}) => {
	return (...keys: string[]) => {
		return keys.reduce((accumulator, value) => {
			if (value in object) {
				value = object[value]
			} else {
				console.info('- wrong class', value)
			}
			return value ? [accumulator, value].join('.') : accumulator
		}, '')
	}
}
