const carousel = document.querySelector('.carousel')
const items = document.querySelectorAll('.carousel_item')

const prevBtn = document.getElementById('carousel_prev');
const nextBtn = document.getElementById('carousel_next');


let slides = 3
let currentIndex = 0


function updateCarousel() {
    const itemWidth = carousel.clientWidth / slides;
    items.forEach(item => item.style.width = `${itemWidth}px`);
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    updateCarousel();
}


prevBtn.addEventListener('click', () => moveCarousel(-1));
nextBtn.addEventListener('click', () => moveCarousel(1));


function handleResize() {
    if (window.innerWidth < 600) {
        slides = 1;
    } else if (window.innerWidth < 900) {
        slides = 2;
    } else {
        slides = 3;
    }
    updateCarousel();
}

window.addEventListener('resize', handleResize);
handleResize(); 