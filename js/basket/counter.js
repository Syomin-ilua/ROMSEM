// Добавляю прослушку на всём окне

window.addEventListener('click', function(event) {
    // Объявляю переменную для счётчика
    let counter;


    // Проверяю клик строго по кнопкам Плюс либо Минус
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Нахожу обёртку счётчика
        const counterWrapper = event.target.closest('.counter_wrap');
        // Нахожу див с числом счётчика
        counter = counterWrapper.querySelector('[data-counter]');
    }


    // Проверяю является ли элемент кнопкой Плюс
    if(event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяю является ли элемент кнопкой Минус
    if(event.target.dataset.action === 'minus') {

        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.sets-wrapper') &&  parseInt(counter.innerText) === 1) {
            // Проверяю на товар который находится в корзине

            // Удаляю товар из корзины 
            event.target.closest('.set-item').remove();

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            // Пересчёт общей стоимости товаров в корзине
            calcCartPriceAndDelivery();
        }

    }

    // Проверяю клик на + или - внутри корзины
    if(event.target.hasAttribute('data-action') && event.target.closest('.sets-wrapper')) {
        // Пересчёт общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    } 
});