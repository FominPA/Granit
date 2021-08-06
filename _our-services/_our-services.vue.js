import { ourServicesProduct } from './_product.vue.js'

export const ourServices = {
	components: {
		ourServicesProduct,
	},

	template: 
	`<section class="our-services">
		<div class="our-services__inner wrapper">
			<h2 class="our-services__title">Наши услуги</h2>
			<div class="our-services__items">
				<ourServicesProduct
					imageUrl = '_our-services/images/dumptruck.png'
					imageAlt = 'dumptruck'
					title = 'Аренда самосвала'
				></ourServicesProduct>

				<ourServicesProduct
					imageUrl = '_our-services/images/bulldozer.png'
					imageAlt = 'bulldozer'
					title = 'Аренда спецтехники'
				></ourServicesProduct>
				
				<ourServicesProduct
					imageUrl = '_our-services/images/tractor.png'
					imageAlt = 'tractor'
					title = 'Рытье траншеи'
				></ourServicesProduct>
			</div>
		</div>
	</section>`
}