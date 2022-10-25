function calcCartPriceAndDelivery() {
    const setItems = document.querySelector('.sets-wrapper');
    const priceEl = setItems.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery_cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    // Общая стоимость товаров
    let priceTotal = 0;

    // Обхожу все блоки с ценами в корзине
    priceEl.forEach(function(item) {

        // Нахожу количество товара
        const amountEl = item.closest('.set-item').querySelector('[data-counter]');
        // Добавляю стоимость товара в общую стоимость (кол-во * цену) 
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });

    // Отображаю цену на странице
    totalPriceEl.innerText = priceTotal;


    // Скрываю / Показываю блок со стоимостью доставки
    if(priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }
 
    // Указываю стоимотсь доставки
    if (priceTotal >= 1500) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '500 COM'
    }
}