const hamburger = document.querySelector (".hamburger");
hamburger.addEventListener("click", () => document.querySelector(".mainmenu").classList.toggle ("active"));

const burger = document.querySelector (".fa-bars");
burger.onclick = () => {
    burger.classList.toggle ("fa-times");
}