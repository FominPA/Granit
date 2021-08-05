export const logo = {
	props: ['imageUrl', 'title', 'description'],
	template: 
		`<div class="logo">
			<img :src=imageUrl alt="logo">
			<div class="logo__text">
				<h2 class="logo__title">{{ title }}</h2>
				<p class="logo__description">{{ description }}</p>
			</div>
		</div>`,
}