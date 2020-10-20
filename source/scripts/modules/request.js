import typograf from 'typograf'
const each = (items, procedure) => {
	Array.prototype.forEach.call(items, procedure)
}
window.addEventListener('load', () => {
	const instance = new typograf({
		locale: ['ru'],
	})
	each(document.querySelectorAll('.js-format-text'), (item) => {
		item.innerHTML = instance.execute(item.innerHTML)
	})
})
