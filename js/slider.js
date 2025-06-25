const images = [
  '/img/home/3rd.jpg',                      
  '/img/home/1st.jpg',
  '/img/home/2nd.jpg',
  '/img/home/4th.jpg',
  '/img/home/5th.jpg',
  '/img/home/6th.jpg',                      
  '/img/home/7th.jpg',
  '/img/home/8th.jpg',
  '/img/home/9th.jpg',
  '/img/home/10th.jpg',
  '/img/home/11th.jpg',                      
];
let index = 0;
const slider = document.getElementById('slides');

// Set initial background image
slider.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.backgroundImage = `url(${images[index]})`;
}, 3000); // Change image every 3 seconds
const elements = document.querySelectorAll('.slide-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of the element is visible
});

elements.forEach((element) => {
  observer.observe(element);
});
