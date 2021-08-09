import { yellowButton } from '../_button/_button.vue.js';

export const popularProduct = {
	props: ['imageUrl', 'hrefBuy', 'title', 'sale', 'basicPrice', 'oldPrice', 'hotPrice'],

	computed: {
		bgImageStyle() { return ('background-image: url(' + this.imageUrl + ');') }
	},

	components: {
		'yellow-button': yellowButton,
	},

	template:
	`<div class="popular__item">
		<div class="popular__item-image" :style='bgImageStyle'><h3 v-if='sale' class="popular__item-sale">Акция</h3></div>
		<h3 class="popular__item-title">{{ title }}</h3>
		<div class="popular__item-price">
			<h3 v-if='!sale' class='popular__item-price_basic-price'>{{ basicPrice }}</h3>
			<p v-if='sale' class="popular__item-price_old-price">{{ oldPrice }}</p>
			<h3 v-if='sale' class="popular__item-price_hot-price">{{ hotPrice }}</h3>
		</div>
		<yellow-button :buttonHref='hrefBuy' text='Купить' class="popular__item-button"></yellow-button>
	</div>`,
}