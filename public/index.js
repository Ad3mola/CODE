let burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("changed");
  document.querySelector(".menu").toggleAttribute("transform");
});
