import { yellowButton } from '../_button/_button.vue.js';
import { roof } from '../_roof/_roof.vue.js';

export const header = {
	props: [],

	components: {
		'yellow-button': yellowButton,
		roof,
	},

	template: 
	`<header class="header">
		<roof></roof>
		<div class="header__content">
			<div class="header__inner wrapper">
				<h1 class="header__title">Быстрая доставка</h1>
				<p class="header__description">бетона, щебня, песка <br>
				и других нерудных материалов <br>
				по Москве и Московской области</p>
				<yellow-button href='#' text='Подробнее о доставке' class="header__button"></yellow-button>
				<span class="header__separator">или</span>
				<a href="#" class="header__link link">перейти в каталог</a>
			</div>
		</div>
	</header>`,
}