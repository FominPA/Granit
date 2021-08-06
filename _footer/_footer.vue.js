import { feedback } from '../_feedback/_feedback.vue.js';
import { logo } from '../_logo/_logo.vue.js';

export const footer = {
	components: {
		feedback,
		logo,
	},

	template: 
	`<footer class="footer">
		<div class="footer__inner wrapper">
			<div class="footer__column footer__column_left">
				<logo
					class = 'logo_footer'
					imageUrl = '_logo/images/white-logo.png'
					title = 'Granit'
					description = 'Доставка нерудных материалов'
				></logo>
				<p class="copyright">© 2016. Гранит</p>
			</div>
			<feedback
				class="footer__column footer__column_right feedback_footer"
				number="8 800 342-13-33"
			></feedback>
		</div>
	</footer>`,
}