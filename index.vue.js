import { header } from './_header/_header.vue.js';
import { catalog } from './_catalog/_catalog.vue.js';
import { ourAdvantages } from './_our-advantages/_our-advantages.vue.js';
import { popular } from './_popular/_popular.vue.js';
import { ourServices } from './_our-services/_our-services.vue.js';
import { contacts } from './_contacts/_contacts.vue.js';
import { footer } from './_footer/_footer.vue.js';

const index = Vue.createApp({
	data() { return {

	}},

	components: {
		'index-header': header,
		catalog,
		'our-advantages': ourAdvantages,
		popular,
		'our-services': ourServices,
		contacts,
		'index-footer': footer,
	}
});

index.mount('body');