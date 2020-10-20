((w, d, i) => {
	(w[i] = w[i] || []).push(() => {
		try {
			w.metrika = new Ya.Metrika({
				accurateTrackBounce: true,
				clickmap: true,
				id: 44408305,
				trackLinks: true,
				webvisor: true,
			})
		} catch(e) {}
	})
	const n = d.getElementsByTagName('script')[0]
	const s = d.createElement('script')
	s.async = true
	s.src = 'https://mc.yandex.ru/metrika/watch.js'
	n.parentNode.insertBefore(s, n)
})(window, document, 'yandex_metrika_callbacks')
