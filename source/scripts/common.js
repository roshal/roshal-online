import './common/google-analytics'
import './common/yandex-metrika'
import functions  from './modules/functions'
import typography from './modules/typography'
functions.onReady(document, () => {
	typography()
})
