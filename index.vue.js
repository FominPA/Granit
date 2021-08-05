import { header } from './_header/_header.vue.js';
import { catalog } from './_catalog/_catalog.vue.js';

const index = Vue.createApp({
	data() { return {

	}},

	components: {
		'index-header': header,
		catalog,
	}
});

index.mount('body');