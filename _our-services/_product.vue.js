export const ourServicesProduct = {
	props: ['imageUrl', 'imageAlt', 'title'],

	template:
	`<div class="our-services__item">
		<img :src="imageUrl" :alt="imageAlt" class="our-services__item-image">
		<h3 class="our-services__item-title">{{ title }}</h3>
	</div>`
}