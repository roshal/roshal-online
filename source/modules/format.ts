
export default (value: string): string => {
	value = value.replace(/ ,/g, '&nbsp;,')
	value = value.replace(/ - /g, ' -&nbsp;')
	value = value.replace(/ \. /g, '&nbsp;.&emsp;')
	value = value.replace(/ \./g, '&nbsp;.')
	value = value.replace(/ \? /g, '&nbsp;?&emsp;')
	value = value.replace(/ \?/g, '&nbsp;?')
	value = value.replace(/ ¿ /g, '&nbsp;&iquest;&emsp;')
	value = value.replace(/ ¿/g, '&nbsp;&iquest;')
	value = value.replace(/¿ /g, '&iquest;&nbsp;')
	return value
}
