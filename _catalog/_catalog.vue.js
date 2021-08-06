import { catalogProduct } from './_product.vue.js';

export const catalog = {
	props: [],

	components: {
		catalogProduct,
	},

	template: 
	`<section class="catalog wrapper">
		<h2 class="catalog__title">Всегда в наличии</h2>
		<div class="catalog__items">

			<catalogProduct
				imageUrl = "_catalog/images/sand.png"
				imageAlt = 'sand'
				title = 'Песок речной'
				description = 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'
				price = 'от 330 р./т'
				hrefAbout = '#'
			></catalogProduct>

			<catalogProduct
				imageUrl = "_catalog/images/dirt.png"
				imageAlt = 'dirt'
				title = 'Щебень'
				description = 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'
				price = 'от 330 р./т'
				hrefAbout = '#'
			></catalogProduct>

			<catalogProduct
				imageUrl = "_catalog/images/stone.png"
				imageAlt = 'stone'
				title = 'Грунт'
				description = 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'
				price = 'от 330 р./т'
				hrefAbout = '#'
			></catalogProduct>
		</div>
	</section>`,
}