import { popularProduct } from './_product.vue.js';

export const popular = {
	components: {
		popularProduct,
	},

	template:
	`<section class="popular wrapper">
		<h2 class="popular__title">Популярные товары</h2>
		<div class="popular__items">
			<popularProduct
				bgUrl = 'images/pop-product-bg1.png'
				hrefBuy = '#'
				title = 'Гранитный щебень 5-20мм'
				sale = 'true'
				basicPrice = ''
				oldPrice = '1 500 р./т'
				hotPrice = '1 350 р./т'
			></popularProduct>

			<popularProduct
				bgUrl = 'images/pop-product-bg2.png'
				hrefBuy = '#'
				title = 'Гранитный щебень 5-20мм'
				sale = 'true'
				basicPrice = ''
				oldPrice = '1 350 р./т'
				hotPrice = '1 500 р./т'
			></popularProduct>

			<popularProduct
				bgUrl = 'images/pop-product-bg3.png'
				hrefBuy = '#'
				title = 'Гранитный щебень 0-5мм (отбор)'
				sale = ''
				basicPrice = '1 350 р./т'
				oldPrice = ''
				hotPrice = ''
			></popularProduct>

			<popularProduct
				bgUrl = 'images/pop-product-bg4.png'
				hrefBuy = '#'
				title = 'Гранитный щебень 5-20мм'
				sale = ''
				basicPrice = '1 350 р./т'
				oldPrice = ''
				hotPrice = ''
			></popularProduct>
		</div>
	</section>`
}
			
