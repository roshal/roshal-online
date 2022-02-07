
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '/commons/helpers'
import d__layouts__common from '/components/layouts/common'

import s__styles from './style.sass'

console.log('s__styles', s__styles)

const component: p__react.FC<{
	assets?: {
		css: string[], js: string[],
	},
}> = (props) => {

	return $([
		$(d__layouts__common, {
			assets: props.assets,
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal'],
		}, [
			$('div' + m__helpers.style(s__styles['container']), [
				$('div' + m__helpers.style(s__styles['wrapper']), [
					$('div' + m__helpers.style(s__styles['head']), [
						$('div' + m__helpers.style(s__styles['block']), [
							$('div' + m__helpers.style(s__styles['box']), [
								'box',
							]),
						]),
						//$('div' + m__helpers.style(s__styles['footer']), [
						//	'footer',
						//]),
					]),
					$('div' + m__helpers.style(s__styles['body']), [
						$('div' + m__helpers.style(s__styles['content']), [
							'content',
						]),
					]),
				]),
			]),
		]),
	])

}

export default component
