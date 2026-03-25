// Global scripts for Inspire Static Site

document.addEventListener("DOMContentLoaded", function() {
    // 1. Mobile Menu functionality
    const openIcons = document.querySelectorAll('.oxy-pro-menu-mobile-open-icon');
    if (openIcons.length > 0) {
        openIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const parentMenu = this.closest('.oxy-pro-menu');
                if (parentMenu) parentMenu.classList.add('oxy-pro-menu-open');
                const container = this.nextElementSibling;
                if (container) container.classList.add('active');
            });
        });
    }

    const closeIcons = document.querySelectorAll('.oxy-pro-menu-mobile-close-icon');
    if (closeIcons.length > 0) {
        closeIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const parentMenu = this.closest('.oxy-pro-menu');
                if (parentMenu) parentMenu.classList.remove('oxy-pro-menu-open');
                const container = this.closest('.oxy-pro-menu-container');
                if (container) container.classList.remove('active');
            });
        });
    }

    const dropdowns = document.querySelectorAll('.menu-item-has-children > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const subMenu = this.nextElementSibling;
                if (subMenu) {
                    subMenu.classList.toggle('active');
                }
            }
        });
    });

    // 2. Hero Slider functionality (for homepage)
    const sliderBox = document.querySelector('.ct-slider');
    if (sliderBox) {
        const slides = sliderBox.querySelectorAll('li');
        const prevBtn = sliderBox.querySelector('.slider-prev');
        const nextBtn = sliderBox.querySelector('.slider-next');
        
        if (slides.length > 1) {
            slides[0].classList.add('active');
            let current = 0;
            let slideInterval;

            const showSlide = (index) => {
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
            };

            const nextSlide = () => {
                current = (current + 1) % slides.length;
                showSlide(current);
            };

            const prevSlide = () => {
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
            };

            const startSlider = () => {
                slideInterval = setInterval(nextSlide, 5000);
            };

            const resetSlider = () => {
                clearInterval(slideInterval);
                startSlider();
            };

            startSlider();
            
            if (nextBtn && prevBtn) {
                nextBtn.addEventListener('click', () => {
                    nextSlide();
                    resetSlider();
                });
                prevBtn.addEventListener('click', () => {
                    prevSlide();
                    resetSlider();
                });
            }
        } else if (slides.length === 1) {
            slides[0].classList.add('active');
        }
    }
});
