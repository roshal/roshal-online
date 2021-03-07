
import * as m__helpers from '/commons/helpers'

const s__styles = require('/styles/common.sass')

const d__favicon = require('/assets/favicon.png')

const $ = require('react-hyperscript')

const style = m__helpers.styler(s__styles)

const c__og = (props) => {
	if (props.og == null) {
		return null
	}
	return ['description', 'image', 'title', 'type', 'url'].map((value) => {
		return [
			props.og?.[value] && [
				$('meta', {
					property: ['og', value].join(':'),
					content: props.og?.[value],
				}),
			],
		]
	})
}

interface t__props {
	assets?: {
		css: string[],
		js: string[],
	},
	children?: any,
	description?: string,
	keywords?: string[],
	og?: {},
	title?: string,
}

export default (props: t__props = {}) => {
	const head = [
		$('meta', {
			charSet: 'UTF-8',
		}),
		$('meta', {
			name: 'viewport',
			content: 'width=device-width',
		}),
		props.title && [
			$('title', [
				props.title,
			]),
		],
		props.description && [
			$('meta', {
				name: 'description',
				content: props.description,
			}),
		],
		props.keywords?.length && [
			$('meta', {
				name: 'keywords',
				content: props.keywords?.join(', '),
			}),
		],
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
					$('div' + style('section-header--content--l'), [
						$('ul' + style('section-header--list'), [
							$('li' + style('section-header--list-item'), [
								$('a', {
									href: '/',
									title: 'roshal',
								}, 'root'),
							]),
							$('li' + style('section-header--list-item'), [
								$('a', {
									href: 'https:t.me/roshal',
									title: 'telegram',
								}, 'telegram'),
							]),
						]),
					]),
				]),
			]),
			props.children,
			$('footer' + style('section-footer'), [
				$('div' + style('section-footer--container'), [
					$('div' + style('section-footer--content'), [
						$('div' + style('section-footer--item.social-links'), [
							$('div' + style('section-footer--content--l'), '1970'),
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
