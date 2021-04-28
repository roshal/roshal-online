
import * as $ from 'react-hyperscript'
import * as p__react from 'react'
import * as p__react_hot_loader__root from 'react-hot-loader/root'
import * as p__react_router_dom from 'react-router-dom'

import d__switch from './switch'

const component: p__react.FC<{
	assets?: {
		css: string[], js: string[],
	},
	path?: string,
}> = (props) => {

	return $([
		$(p__react_router_dom.StaticRouter, {
			location: props.path,
			//history: history.createBrowserHistory(),
		}, [
			$(d__switch, {
				head: props,
			}),
		]),
	])

}

export default p__react_hot_loader__root.hot(component)
