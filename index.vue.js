import { header } from './_header/_header.vue.js';

const index = Vue.createApp({
	data() { return {

	}},

	components: {
		'index-header': header,
	}
});

index.mount('body');