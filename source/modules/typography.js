
import p__lodash from 'lodash'
import p__typograf  from 'typograf'

export default () => {
	const instance = new p__typograf({
		locale: ['ru'],
	})
	p__lodash.each(document.querySelectorAll('.js-format-text'), (item) => {
		const string = item.innerHTML
			.replace(/ ,/g, '&nbsp;,')
			.replace(/ - /g, ' -&nbsp;')
			.replace(/ \. /g, '&nbsp;.&emsp;')
			.replace(/ \./g, '&nbsp;.')
			.replace(/ \? /g, '&nbsp;?&emsp;')
			.replace(/ \?/g, '&nbsp;?')
			.replace(/ ¿ /g, '&nbsp;&iquest;&emsp;')
			.replace(/ ¿/g, '&nbsp;&iquest;')
			.replace(/¿ /g, '&iquest;&nbsp;')
		item.innerHTML = string
	})
}
