import { logo } from '../_logo/_logo.vue.js';
import { feedback } from '../_feedback/_feedback.vue.js';
import { menu } from '../_menu/_menu.vue.js';

export const roof = {
	components: {
		'my-menu': menu,
		logo,
		feedback,
	},

	template: 
		`<div class="roof wrapper">
			<div class="roof__top">
				<logo
					imageUrl = '_logo/images/black-logo.png'
					title = 'Granit'
					description = 'Доставка нерудных материалов'
				></logo>
				<feedback number = '8 800 342-13-33'></feedback>
			</div>
			<my-menu></my-menu>
		</div>`,
}