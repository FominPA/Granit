// import yellow-button from '_button/_button';

const index = Vue.createApp({
	data: {
		test: 'Hello, Vue!',
	},

	сomponents: {
		// yellow-button
	}
})

index.component('yellow-button', {
	props: ['value', 'href'],
	template: `<a :href="href" class="button">{{ value }}</a>`
})

index.mount('#secondBlock');