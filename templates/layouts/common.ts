
import * as $ from 'react-hyperscript'

import * as m__helpers from '/templates/commons/helpers'
import d__favicon from '/assets/favicon.png'
import s__styles from '/styles/common.sass'

const style = m__helpers.styler(s__styles)

const c__og = (props) => {
	if (props.og == null) {
		return null
	}
	return ['description', 'image', 'title', 'type', 'url'].map((value) => {
		return [
			props.og?.['value'] && $('meta', {
				property: ['og', value].join(':'),
				content: props.og?.[value],
			}),
		]
	})
}

export default (props: {
	[key: string]: any,
} = {}) => {
	const head = [
		$('meta', {
			charSet: 'UTF-8',
		}),
		$('meta', {
			name: 'viewport',
			content: 'width=device-width',
		}),
		props.title && $('title', [
			props.title,
		]),
		props.description && $('meta', {
			name: 'description',
			content: props.description,
		}),
		props.keywords?.length && $('meta', {
			name: 'keywords',
			content: props.keywords?.join(', '),
		}),
		//props.image,
		//props.type,
		//props.url,
		$('link', {
			rel: 'icon',
			href: d__favicon,
		}),
		props.assets?.css.map((value) => {
			return [
				$('link', {
					rel: 'stylesheet',
					href: ['/', value].join(''),
				}),
			]
		}),
		props.assets?.js.map((value) => {
			return [
				$('script', {
					async: true,
					src: ['/', value].join(''),
				}),
			]
		}),
		$('script', {
			async: true,
			src: '//mc.yandex.ru/metrika/watch.js',
		}),
		$('script', {
			async: true,
			src: '//www.googletagmanager.com/gtag/js?id=UA-92032319-1',
		}),
		$(c__og, {
			og: props.og,
		}),
	]
	const body = [
		$('div' + style('page'), [
			$('header' + style('section-header'), [
				$('div' + style('section-header--container'), [
					$('div' + style('section-header--content'), [
						$('ul' + style('section-header--list'), [
							$('li' + style('section-header--list-item'), [
								$('a', {
									href: '/',
									title: 'roshal',
								}, 'root'),
							]),
						]),
					]),
				]),
			]),
			props.children,
			$('footer' + style('section-footer'), [
				$('div' + style('section-footer--container'), [
					$('div' + style('section-footer--content'), [
						$('div' + style('section-footer--item', 'social-links'), [
							$('div' + style('section-footer--content--l'), 'roshal'),
							$('div' + style('section-footer--content--r'), '1337-1970'),
						]),
					]),
				]),
			]),
		]),
	]
	return [
		$('html', {
			lang: 'ru',
			prefix: 'og: http://ogp.me/ns#',
		}, [
			$('head', head),
			$('body', body),
		]),
	]
}
