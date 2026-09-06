const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});

const menu = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.onclick = function () {
  navLinks.classList.toggle("active");
};