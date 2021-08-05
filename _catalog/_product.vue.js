import { yellowButton } from '../_button/_button.vue.js';

export const catalogProduct = {
	props: ['imageurl', 'imagealt', 'title', 'description', 'price', 'hrefabout'],

	components: {
		'yellow-button': yellowButton,
	},

	template: 
	`<article class="catalog__item">
		<img :src='imageurl' :alt='imagealt' class="catalog__item-image">
		<h3 class="catalog__item-title">{{ title }}</h3>
		<p class="catalog__item-description">{{ description }}</p>
		<h3 class="catalog__item-price">{{ price }}</h3>
		<yellow-button :buttonHref='hrefabout' text='Подробнее' class="catalog__item-button"></yellow-button>
	</article>`,
}