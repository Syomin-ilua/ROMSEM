// Меню бургер

const btnBurger = document.querySelector('.btn_burger');
const menuBurger = document.querySelector('.nav_link_burger');
const windowInnerWidth = document.documentElement.clientWidth;



btnBurger.addEventListener('click', function(event) {
    event.preventDefault();

    btnBurger.classList.toggle('active')
    menuBurger.classList.toggle('active');

    if(menuBurger.classList.contains('active')) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
    }
});
