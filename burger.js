let doc = document;
let burger = doc.querySelector('.burger');
let menu = doc.querySelector('.menu');
console.log(burger);

burger.onclick = function() {
	console.log('click');
	menu.classList.toggle("menu");
	menu.classList.toggle("mobile-menu");
	burger.classList.toggle("burger_open");
	burger.classList.toggle("burger_close");
}