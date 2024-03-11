export const initSlider = () => {

    // слайдер "Категории"
    const category = document.querySelector('.category');
    if (category) {
        const item = new Swiper('.category-swiper', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next--category',
                prevEl: '.swiper-button-prev--category',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

    // слайдер "Новые категории"
    const newSlider = document.querySelector('.new-swiper');
    if (newSlider) {
        const item = new Swiper('.new-swiper', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next--new',
                prevEl: '.swiper-button-prev--new',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }
}