let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Inicializa o carrossel
showSlide(currentSlide);

