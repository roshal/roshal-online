
import * as p__lodash from 'lodash'
import * as p__typograf from 'typograf'

window.addEventListener('load', () => {
	const instance = new p__typograf({
		locale: ['ru'],
	})
	p__lodash.each(document.querySelectorAll('.js-format-text'), (item) => {
		item.innerHTML = instance.execute(item.innerHTML)
	})
})
