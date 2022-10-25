const btnOrderForm = document.querySelector('.button_submit_order');

showOrder();

function showOrder() {
    let details = document.querySelector('.details');

    const products = JSON.parse(localStorage.getItem('order'));
    const total = JSON.parse(localStorage.getItem('total'));
    const delivery = JSON.parse(localStorage.getItem('delivery'));

    let out = '<div class="sets_out">'

    for(let i = 0; i < products.length; i++) {
        out += `<div data-id="${products[i]['id']}" class="set">`;
        out += `<img class="product-img set_image" src="${products[i]['imgSrc']}">`;
        out += `<div class="title_wrap">`;
        out += `<h3 class="cart_title item-title">${products[i]['title']}</h3>`;
        out += `<p class="price__weight structur_title">${products[i]['weight']} </p>`;
        out += `<p class="price price__currency">Цена: <b>${products[i]['price']}</b> </p>`;
        out += `<div class="items_current" data-counter>Кол-во: <b>${products[i]['counter']} шт.</b> </div>`;
        out += `</div>`;
        out += `</div>`;
    }
    out += `</div>`;
    document.querySelector('.details').innerHTML = out;  
    
    let outTotal = '<div class="delivery_total_wrap">'
    outTotal += `<p class="delivery_title">Доставка: <b>${delivery}</b> </p>`;
    outTotal += `<p class="total_title">Итого: <b>${total} COM</b> </p>`;
    outTotal += '</div>'

    document.querySelector('.details_total').innerHTML = outTotal;
}

window.addEventListener('click', function(event) {
    // Объявляю переменную для счётчика
    let counter;
    
    // Проверяю клик строго по кнопкам Плюс либо Минус
    if(event.target.dataset.action === 'plus_adit' || event.target.dataset.action === 'minus_adit') {
        // Нахожу обёртку счётчика
        const counterWrapper = event.target.closest('.counter_wrapper');
        // Нахожу див с числом счётчика
        counter = counterWrapper.querySelector('[data-counter-adit]');
    }


    // Проверяю является ли элемент кнопкой Плюс
    if(event.target.dataset.action === 'plus_adit') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяю является ли элемент кнопкой Минус
    if(event.target.dataset.action === 'minus_adit') {

        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});

btnOrderForm.addEventListener('click', function(event) {
    alert('Заказ одобрен и начинает готовиться. Когда заказ будет готов мы вам позвоним. Наш номер: +7 909 906 91 33');
    localStorage.clear();
})
