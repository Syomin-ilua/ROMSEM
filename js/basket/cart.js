const setsWrapper = document.querySelector('.sets-wrapper');

// Отслеживаю клик на странице
window.addEventListener('click', function(event) {
    // Проверяю что клик был совершён по кнопке "Хочу"
    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card');

        // Собираю данные с этого товара и записываю их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
        };

        // Проверяю если ли уже такой товар в корзине
        const itemInSet = setsWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        // Если товар находится в корзине
        if(itemInSet) {
            const counterElement = itemInSet.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // Если товара нет в корзине


            // Собранные данные подставлю в шаблон для товара в корзине
            const cartItemHTML = `
                                    <div class="set-item" data-id="${productInfo.id}">
                                        <div class="set-item__top">
                                        <div class="set-item__img">
                                             <img class="set_image" src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                        </div>
                                    <div class="set-item__desc">
                                        <div class="set-item__title">${productInfo.title}</div>
                                        <div class="set-item__weight">${productInfo.weight}</div>

                                    <!-- cart-item__details -->
                                    <div class="set-item__details">

                                        <div class="items items--small counter_wrap">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>

                                        <div class="set_price">
                                            <div class="price__currency">${productInfo.price}</div>
                                        </div>

                                    </div>
                                <!-- // cart-item__details -->

                                </div>
                                </div>
                                </div>`;

            // Отображу товар в корзине
            setsWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        }

        // Сбрасываю счётчик добавлёенного товара на "1"
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчёт общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }
});