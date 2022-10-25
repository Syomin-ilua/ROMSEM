function toggleCartStatus() {
    const setsWrapper = document.querySelector('.sets-wrapper');
    const setEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order_form')

    if(setsWrapper.children.length > 0) {
        setEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        setEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}