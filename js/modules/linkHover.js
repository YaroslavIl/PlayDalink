
let arrLi = document.querySelectorAll(".menu__item");
function linkClick() {
  arrLi.forEach((element) => {
    element.addEventListener("click", () => {
      arrLi.forEach((element) => {
        if (element.classList.contains("menu__item--active")) {
          element.classList.remove("menu__item--active");
        }
      });
      element.classList.add("menu__item--active");
    });
  });
};

export default linkClick;