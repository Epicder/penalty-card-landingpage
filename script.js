function flipCard(element) {
  element.classList.toggle('flipped');
}

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    slides.forEach((slide, _) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide, _) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});