const hero = document.querySelector('.hero');
const images = [
  
  
  './assets/images/hero-banner2.jpeg',
  './assets/images/hero-banner3.jpeg',
  './assets/images/hero-banner.jpg',
  './assets/images/hero-banner1.jpeg',
  // Add more image URLs as needed
];
let currentIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 4500); // Change image every 5 seconds (adjust as needed)
