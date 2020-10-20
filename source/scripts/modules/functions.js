export const ready = (node, call) => {{
	if (node.attachEvent ? node.readyState === 'complete' : node.readyState !== 'loading') {
		call()
	} else {
		node.addEventListener('DOMContentLoaded', call)
	}
}}
