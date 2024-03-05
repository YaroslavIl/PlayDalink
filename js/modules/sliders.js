
let myImageSlider = new Swiper(".banner__slider", {
  autoplay: {
    // Пауза между прокруткой
    delay: 2000,
    // Закончить на последнем слайде
    stopOnLastSlide: false,
    // Отключить после ручного переключения
    disableOnInteraction: false,
  },

  // Скорость
  speed: 2000,

  // Бесконечный слайдер
  loop: false,

  // Отступ между слайдами
  spaceBetween: 36,

  // Количество слайдов для показа
  slidesPerView: 1,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    670: {
      slidesPerView: 2,
    },
  },
});



export default myImageSlider;

