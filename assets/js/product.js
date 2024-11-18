const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,

    // Autoplay configuration
    autoplay: {
        delay: 2500, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay even if the user interacts with the slider
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Breakpoints for responsive design
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        350: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        978: {
            slidesPerView: 3
        },
        1198: {
            slidesPerView: 3
        }
    }


});
