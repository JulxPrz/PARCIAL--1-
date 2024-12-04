//   all ------------------
function initParadoxWay() {
    "use strict";
    if ($(".galeria-carrusel").length > 0) {
        var j2 = new Swiper(".galeria-carrusel .swiper-container", {
            preloadImages: false,
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.carrusel-boton-next',
                prevEl: '.carrusel-boton-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    setInterval(function () {
        var size = 6;
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}
    $(document).ready(function () {
        initParadoxWay();
});