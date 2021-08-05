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
				imageurl = "_catalog/images/sand.png"
				imagealt = 'sand'
				title = 'Песок речной'
				description = 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'
				price = 'от 330 р./т'
				hrefabout = '#'
			></catalogProduct>

			<catalogProduct
				imageurl = "_catalog/images/dirt.png"
				imagealt = 'dirt'
				title = 'Щебень'
				description = 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'
				price = 'от 330 р./т'
				hrefabout = '#'
			></catalogProduct>

			<catalogProduct
				imageurl = "_catalog/images/stone.png"
				imagealt = 'stone'
				title = 'Грунт'
				description = 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'
				price = 'от 330 р./т'
				hrefabout = '#'
			></catalogProduct>
		</div>
	</section>`,
}