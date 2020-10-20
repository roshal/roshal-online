import functions from './functions'
import typograf from 'typograf'
export default () => {
	const instance = new typograf({
		locale: ['ru'],
	})
	functions.forEach(document.querySelectorAll('.js-format-text'), (item) => {
		let string = item.innerHTML
		string = string.replace(/ ,/g, '&nbsp;,')
		string = string.replace(/ - /g, ' -&nbsp;')
		string = string.replace(/ \. /g, '&nbsp;.&emsp;')
		string = string.replace(/ \./g, '&nbsp;.')
		string = string.replace(/ \? /g, '&nbsp;?&emsp;')
		string = string.replace(/ \?/g, '&nbsp;?')
		string = string.replace(/ ¿ /g, '&nbsp;&iquest;&emsp;')
		string = string.replace(/ ¿/g, '&nbsp;&iquest;')
		string = string.replace(/¿ /g, '&iquest;&nbsp;')
		item.innerHTML = string
	})
}
