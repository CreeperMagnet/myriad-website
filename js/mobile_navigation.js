const button = document.querySelector(".header-hamburger");
const menu = document.querySelector(".mobile-navigation");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  button.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("hamburger-opened")
});
window.onresize = function () {
  if (window.outerWidth > 600) {
    button.classList.remove("active");
    menu.classList.remove('active');
    body.classList.remove("hamburger-opened")
  }
};