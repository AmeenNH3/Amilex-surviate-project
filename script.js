const headerElement = document.querySelector(".header");
console.log(headerElement);
const toggleBtn = document.querySelector(".btn-mobile-nav");
toggleBtn.addEventListener("click", function () {
  console.log(this);
  headerElement.classList.toggle("nav-open");
});
