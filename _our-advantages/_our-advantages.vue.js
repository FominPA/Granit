import { advantage } from './advantage.vue.js';

export const ourAdvantages = {
	components: {
		advantage,
	},

	template:
	`<section class="our-advantages">
		<div class="our-advantages__inner wrapper">
			<h2 class="our-advantages__title">Наши преимущества</h2>
			<div class="our-advantages__items">
				<advantage
					imageUrl = '_our-advantages/images/piggy-bank.png'
					imageAlt = 'piggy-bank'
					title = 'Низкая цена'
					description = 'Мы сотрудничаем напрямую с производителем, поэтому можем гарантировать самую низкую цену.'
				></advantage>
				<advantage
					imageUrl = '_our-advantages/images/van.png'
					imageAlt = 'van'
					title = 'Быстрая доставка'
					description = 'Весь товар уже находится на нашем складе. Нам остается только погрузить его и в путь!'
				></advantage>
				<advantage
					imageUrl = '_our-advantages/images/wheelbarrow.png'
					imageAlt = 'wheelbarrow'
					title = 'Индивидуальный подход'
					description = 'Вам нужны бесперебойные поставки или большая партия товара со скидкой? Мы найдем решение!'
				></advantage>
				</div>
			</div>
		</div>
	</section>`,
}