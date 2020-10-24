
export const ready = (handle: () => void) => {{
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', handle, {
			once: true,
		})
	} else {
		handle()
	}
}}
