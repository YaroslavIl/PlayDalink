//Зміна фону картинками зі слайдеру
const sliderItems = document.querySelectorAll(".card");
const banner = document.querySelector(".banner");

function changeFon() {
  sliderItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imageUrl = this.dataset.imageUrl; // Отримати URL з атрибута data-image-url

      // Змінити фонову картинку банера на обрану картинку зі слайдера
      banner.style.backgroundImage = `url(${imageUrl})`;
    });
  });
};

export default changeFon;
