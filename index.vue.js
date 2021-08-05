const index = Vue.createApp({
	data() { return {
		test: 'hello, Vue',
	}}
});

index.component('yellow-button', {
	props: ['text'],
	template: `<a class="button">{{ text }}</a>`
})

index.mount('body');