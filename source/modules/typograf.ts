
import p__typograf  from 'typograf'

const typograf = new p__typograf({
	locale: ['en-US', 'ru'],
})

export default (value: string) => {
	return typograf.execute(value)
}
