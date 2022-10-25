const btnForm = document.querySelector('.btn_form');

btnForm.addEventListener('click', function(event) {

    const basketWrap = event.target.closest('.basket_wrap');
    sets = basketWrap.querySelector('.sets-wrapper');
    setItem = sets.querySelectorAll('.set-item');
    
    let products = [];

    let total = document.querySelector('.total-price').innerText;
    let delivery = document.querySelector('.delivery_cost').innerText;

    for(item of setItem) {
        let product = {
            id: item.dataset.id,
                imgSrc: item.querySelector('.set_image').getAttribute('src'),
                title: item.querySelector('.set-item__title').innerText,
                weight: item.querySelector('.set-item__weight').innerText,
                price: item.querySelector('.price__currency').innerText,
                counter: item.querySelector('[data-counter]').innerText, 
        };
        addToProducts(products, product);
    }

    saveOrder(products);
    saveTotal(total);
    saveDelivery(delivery);
});


function saveOrder(products) {
    localStorage.setItem('order', JSON.stringify(products));
}

function saveTotal(total) {
    localStorage.setItem('total', JSON.stringify(total));
}  

function saveDelivery(delivery) {
    localStorage.setItem('delivery', JSON.stringify(delivery)); 
}

function addToProducts(products, product) {
    products.push(product);
}