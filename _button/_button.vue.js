export const yellowButton = {
	props: ['text', 'buttonHref'],
	template: `<a :href=buttonHref class="button">{{ text }}</a>`
}