import { yellowButton } from '../_button/_button.vue.js';

export const catalogProduct = {
	props: ['imageUrl', 'imageAlt', 'title', 'description', 'price', 'hrefAbout'],

	components: {
		'yellow-button': yellowButton,
	},

	template: 
	`<article class="catalog__item">
		<img :src='imageUrl' :alt='imageAlt' class="catalog__item-image">
		<h3 class="catalog__item-title">{{ title }}</h3>
		<p class="catalog__item-description">{{ description }}</p>
		<h3 class="catalog__item-price">{{ price }}</h3>
		<yellow-button :buttonHref='hrefAbout' text='Подробнее' class="catalog__item-button"></yellow-button>
	</article>`,
}