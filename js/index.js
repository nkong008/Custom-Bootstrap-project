// const bootstrap = require('bootstrap');

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
  pause: "hover"
})

console.log("test");