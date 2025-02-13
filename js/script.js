// Mobile Menu Toggle (if applicable)
const nav = document.querySelector('nav ul');
const toggleButton = document.createElement('button');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Slideshow Logic
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let intervalId;

// Function to Show a Slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
    slide.style.zIndex = i === index ? '1' : '0';
  });
}

// Next & Previous Slide Functions
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Event Listeners for Buttons
nextButton.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevButton.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

// Auto-play every 3 seconds
function startAutoPlay() {
  intervalId = setInterval(nextSlide, 3000);
}

// Reset Timer on Manual Click
function resetTimer() {
  clearInterval(intervalId);
  startAutoPlay();
}

// Initialize
showSlide(currentIndex);
startAutoPlay();
