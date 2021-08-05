import { indexHeader } from './_header/_header.vue.js';

const index = Vue.createApp({
	data() { return {
		test: 'hello, Vue',
	}},

	components: {
		'index-header': indexHeader,
	}
});

index.mount('body');