export const menu = {
	props: ['menu-items'],
	template:
		`<div class="burger burger_close">
			<div class="burger__hl burger__top"></div>
			<div class="burger__hl"></div>
			<div class="burger__hl burger__down"></div>
		</div>
		<div class="menu">
			<a href="#" class="menu__item">Главная</a>
			<a href="#" class="menu__item">Каталог</a>
			<a href="#" class="menu__item">Услуги</a>
			<a href="#" class="menu__item">Доставка</a>
			<a href="#" class="menu__item">О компании</a>
			<a href="#" class="menu__item">Контакты</a>
		</div>`,
}