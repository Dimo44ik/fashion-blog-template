const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open'); // Анимация бургера
    menu.classList.toggle('open');   // Показываем/скрываем меню
});
