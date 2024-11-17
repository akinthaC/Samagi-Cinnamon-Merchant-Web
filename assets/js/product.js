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
        620: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 3
        }
    }
});
