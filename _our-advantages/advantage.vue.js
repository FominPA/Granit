export const advantage = {
	props: ['imageUrl', 'imageAlt', 'title', 'description'],

	template:
	`<div class="our-advantages__item">
		<img :src="imageUrl" :alt="imageAlt" class="our-advantages__image">
		<h3 class="our-advantages__title">{{ title }}</h3>
		<p class="our-advantages__description">{{ description }}</p>
	</div>`,
}