
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import d__router from '/components/commons/router'

const component: p__react.FC<{
	assets?: {
		css: string[], js: string[],
	},
	path?: string,
}> = (props = {}) => {
	return $([
		$(d__router, {
			...props,
		}),
	])
}

export default component
