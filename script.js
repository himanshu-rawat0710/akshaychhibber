const menuBar = document.querySelector(".menu img");
const menuList = document.querySelector(".list-menu");
const closeButton = document.querySelectorAll('.close-button');
const skillButton = document.querySelectorAll('.skill-menu-open');
const skillBody = document.querySelector('.skill-body');

menuBar.addEventListener('click', () => {
	menuList.classList.add('show-menu');
	document.querySelector('body').style.overflow = "hidden";
});

closeButton.forEach((ele, index) => {
	ele.addEventListener('click', () => {
		menuList.classList.remove('show-menu');
		skillBody.classList.remove('show-menu');
		document.querySelector('body').style.overflow = "visible";
	})
});

skillButton.forEach((ele, index) => {
	ele.addEventListener('click', () => {
		skillBody.classList.add('show-menu');
		document.querySelector('body').style.overflow = "hidden";
	})
});
