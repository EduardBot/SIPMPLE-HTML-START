new WOW().init();

// кнопка-бургер на js
const burgerButton = document.querySelector('.hamburger')
const burgerMenu = document.querySelector('.mnu_top')

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active')
    if(burgerButton.classList.contains('is-active')) {
        burgerMenu.classList.add('visible')
    } else {
        burgerMenu.classList.remove('visible')
    }
})
// кнопка-бургер на js

// кнопка-бургер на jQerry
// $(function() {



// 	$(".hamburger").click(function(){
// 		$(this).toggleClass("is-active");

// 		if($(this).hasClass('is-active')){
// 			$('.mnu_top').slideDown(300);
// 		}else{
// 			$('.mnu_top').slideUp(300);
// 		}
// 	});
// });
// кнопка-бургер на jQerry

// reviews tabs
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
        // убрать все классы 'active'
        tabHeaders.forEach(function (item) {
            item.classList.remove('active');
        });
        // подставить 'active' на нажатый таб
        this.classList.add('active');

        // скрыть все contentBox
        contentBoxes.forEach(function (item) {
            item.classList.add('content_hidden');
        });
        // выбрать нужный contentBox и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('content_hidden');
    });
});
// reviews tabs
// accordeon
const accHeaders = document.querySelectorAll("[data-name='accordeon-title']");

accHeaders.forEach((item) => {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('visible')
    })
})
// accordeon