
import * as p__typograf from 'typograf'
import i__lodash from 'lodash'

window.addEventListener('load', () => {
	const instance = new p__typograf({
		locale: ['ru'],
	})
	i__lodash.each(document.querySelectorAll('.js-format-text'), (item) => {
		item.innerHTML = instance.execute(item.innerHTML)
	})
})
