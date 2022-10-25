const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
    const response = await fetch('products.json');
    const productsArray = await response.json();
    renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function(item) {
        const productHTML = `
        <div data-id="${item.id}" class="set_item card">
            <img class="product-img set_image" src="${item.imgSrc}">
            <h2 class="cart_title item-title">${item.title}</h2>
            <p class="price__weight structur_title">${item.weight} грамм ${item.pieces} кусочек</p>
            <p class="price price__currency">${item.price} COM</p>
            <div class="counter_wrap">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter>1</div>
                <div class="items__control" data-action="plus">+</div>
            </div>
            <button data-cart class="to-cart">Хочу</button>
        </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}