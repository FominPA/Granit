export const contacts = {

	props: ['mapurl', 'address', 'mail', 'numbers'],

	template: 
	`<section class="contacts" :style='"background-image: url(" + mapurl + ")"'>
		<div class="contacts__inner wrapper">
			<div class="contacts__second-inner">
				<h2 class="contacts__title">Контакты</h2>
				<div class="contacts__content">
					<img src="_contacts/images/phone-icon.png" alt="icon" class="contacts__icon">
					<div class="contacts__numbers">
						<h3 class="contacts__number" v-for="number in numbers">{{ number }}</h3>
					</div>
					<img src="_contacts/images/location-icon.png" alt="icon" class="contacts__icon">
					<p class="contacts__description">{{ address }}</p>
					<img src="_contacts/images/mail-icon.png" alt="icon" class="contacts__icon">
					<p class="contacts__description">{{ mail }}</p>
				</div>
			</div>
		</div>
	</section>`,
}