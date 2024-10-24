const list = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .slides');
const dots = document.querySelectorAll('.dots li');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let active = 1; // Start from the first real slide (ignore the cloned slide)
const totalSlides = items.length;

// Set initial position for the cloned slides (showing first real slide)
list.style.transform = `translateX(-${active * 100}vw)`;

// Function to update the slider position
function reloadSlider() {
    list.style.transition = 'transform 0.5s ease';
    list.style.transform = `translateX(-${active * 100}vw)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === (active - 1) % (totalSlides - 2)) {
            dot.classList.add('active');
        }
    });
}

// Next slide event
next.addEventListener('click', () => {
    active++;
    reloadSlider();

    // Check if it's the cloned last slide, and reset to the first real slide
    if (active === totalSlides - 1) {
        setTimeout(() => {
            list.style.transition = 'none'; // Disable transition for instant jump
            active = 1; // Go back to the first real slide
            list.style.transform = `translateX(-${active * 100}vw)`;
        }, 500); // Delay must match transition duration (0.5s)
    }
});

// Previous slide event
prev.addEventListener('click', () => {
    active--;
    reloadSlider();

    // Check if it's the cloned first slide, and reset to the last real slide
    if (active === 0) {
        setTimeout(() => {
            list.style.transition = 'none'; // Disable transition for instant jump
            active = totalSlides - 2; // Go to the last real slide
            list.style.transform = `translateX(-${active * 100}vw)`;
        }, 500); // Delay must match transition duration (0.5s)
    }
});

// Autoplay function (5 seconds per slide)
setInterval(() => {
    next.click();
}, 5000);
