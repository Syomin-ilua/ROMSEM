// Данные о новых сетах

const cartNow = {
    "set1": {
        "name": "Саломон сет",
        "structure": "1050 грамм, 30 кусочков",
        "image": "./main_image/cart_image/solomon.png",
        "price": 1500,
        "url": "#",
    },
    "set2": {
        "name": "Филадельфия и лосось сет",
        "structure": "1260 грамм 36 кусочек",
        "image": "./main_image/cart_image/philadelphia_salmon.png",
        "price": 1499,
        "url": "#",
    },
    "set23": {
        "name": "Самая большая Филадельфия",
        "structure": "2050 грамм, 45 кусочков",
        "image": "./main_image/cart_image/big_philadelphia.png",
        "price": 2100,
        "url": "#",
    },
    "set4": {
        "name": "Сет 6 Филадельфий",
        "structure": "1320 грамм 46 кусочек",
        "image": "./main_image/cart_image/six_philadelphia.png",
        "price": 1559,
        "url": "#",
    },
}


// Вывод новых сетов на страницу

let outNew = '<div class="out_set_now">';
for (let key in cartNow) {
    outNew += `<div class="set_wrap">`;
    outNew += `<div class="set_s">`;
    outNew += `<img class="cart_img" src="${cartNow[key]['image']}">`;
    outNew += `<h2 class="cart_title">${cartNow[key]['name']}</h2>`;
    outNew += `<p class="structur_title">${cartNow[key]['structure']}</p>`;
    outNew += `<p class="price">${cartNow[key]['price']} COM</p>`;
    outNew += `<a href="sets.html" class="to-cart" data-articul="${key}">Хочу</a>`;
    outNew += `</div>`;
    outNew += `</div>`;
}
outNew += `</div>`;
document.querySelector('.set_items_now').innerHTML = outNew;

// Слайдер для новых сетов

$(document).ready(function(){
    $('.out_set_now').slick({
        infinite: true,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    arrows: false,
                }
            },
            {
              breakpoint: 1080,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 570,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 540,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 390,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 340,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 330,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
    });
  })



