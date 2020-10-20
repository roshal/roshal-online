
import d__layouts__common from './layouts/common'

const $ = require('react-hyperscript')

const style = (value) => {
	return ['.', value].join('')
}

export default (props) => {
	return [
		$(d__layouts__common, {
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal', 'github'],
		}, [
			$(props.blocks.section, [
				$('h1', 'github'),
				$('p' + style('js-format-text'), [
					'profile', $('a', {
						href: 'https://github.com/roshal',
						content: '@roshal',
					}),
				]),
			]),
		]),
	]
}
