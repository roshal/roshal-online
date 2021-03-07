
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

export const styler = (styles: {
	default?: {},
}): any => {
	return (...keys: string[]) => {
		return keys.reduce((accumulator, value) => {
			value = styles.default?.[value]
			return value ? [accumulator, value].join('.') : accumulator
		}, '')
	}
}
