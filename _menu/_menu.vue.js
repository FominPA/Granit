export const menu = {

	methods: {
		burgerSwitch() {
			let burger = document.querySelector('.burger');
			let menu = (document.querySelector('.menu') || document.querySelector('.mobile-menu'));
			menu.classList.toggle("menu");
			menu.classList.toggle("mobile-menu");
			burger.classList.toggle("burger_open");
			burger.classList.toggle("burger_close");
		}
	},

	props: ['menu-items'],

	template:
		`<div @click='burgerSwitch()' class="burger burger_close">
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