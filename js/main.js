const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const slideCount = slideItems.length;
let currentIndex = 0;

// Clone first and last slides
const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[slideCount - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideItems[0]);

const allSlides = document.querySelectorAll('.slide');
const totalSlides = allSlides.length;

// Start at the real first slide (index 1 because of prepended clone)
slides.style.transform = `translateX(-100%)`;

// Function to update slide position
function updateSlide() {
    slides.style.transition = "transform 1s ease-in-out";
    slides.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
}

// Arrow navigation
document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    updateSlide();
});

// Handle transition end for seamless loop
slides.addEventListener('transitionend', () => {
    if (currentIndex >= slideCount) {
        // Jump back to real first slide
        slides.style.transition = "none";
        slides.style.transform = `translateX(-100%)`;
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        // Jump back to real last slide
        slides.style.transition = "none";
        slides.style.transform = `translateX(-${slideCount * 100}%)`;
        currentIndex = slideCount - 1;
    }
});

// Auto-slide every 4 seconds
setInterval(() => {
    currentIndex++;
    updateSlide();
}, 4000);
