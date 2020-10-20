
import d__layouts__common from '/templates/layouts/common'
import d__style from '/templates/helpers/style'

const $ = require('react-hyperscript')

export default (props) => {
	return [
		$(d__layouts__common, {
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal', 'google'],
		}, [
			$(props.blocks.section, [
				$('h1', 'google'),
				$('p' + d__style('js-format-text'), [
					'profile', $('a', {
						href: 'https://google.com',
						content: 'google.com',
					}),
				]),
			]),
		]),
	]
}
