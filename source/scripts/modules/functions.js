const forEach = (items, call) => {
	Array.prototype.forEach.call(items, call)
}
const onReady = (node, call) => {
	if (node.attachEvent ? node.readyState === 'complete' : node.readyState !== 'loading') {
		call()
	} else {
		node.addEventListener('DOMContentLoaded', call)
	}
}
export default {
	forEach,
	onReady,
}
