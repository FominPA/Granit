export const feedback = {
	props: ['number'],
	template:
		`<div class="feedback">
			<div class="feedback__number">
				<h2 class="feedback__title">{{ number }}</h2>
				<p class="feedback__description">Бесплатный звонок по России</p>
			</div>

			<a href="" class="feedback__button">Обратный звонок</a>
		</div>`,
}

// 8 800 342-13-33