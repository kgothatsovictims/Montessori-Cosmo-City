document.querySelector('.mobile-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });


// Programs Carousel
let currentProgramSlide = 0;
const programCarousel = document.getElementById('programs-carousel');
const programSlides = document.querySelectorAll('#programs-carousel .program-card');
const totalProgramSlides = programSlides.length;

function showProgramSlide(index) {
    if (index >= totalProgramSlides) currentProgramSlide = 0;
    else if (index < 0) currentProgramSlide = totalProgramSlides - 1;
    else currentProgramSlide = index;

    programCarousel.style.transform = `translateX(-${currentProgramSlide * 100}%)`;
}

function nextProgramSlide() {
    showProgramSlide(currentProgramSlide + 1);
}

function prevProgramSlide() {
    showProgramSlide(currentProgramSlide - 1);
}