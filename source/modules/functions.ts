
export const ready = (handle: () => void): void => {{
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', handle, {
			once: true,
		})
	} else {
		handle()
	}
}}
