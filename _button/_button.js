export default yellow-button = {
	props: ['value', 'href'],
	template: <a :href="href" class="button">{{ value }}</a>
}