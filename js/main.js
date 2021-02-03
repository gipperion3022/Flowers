const flowersSlider = new Swiper('.flowers_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  

  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
const reviews_slide = new Swiper('.reviews_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  

  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});