// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");


// Hide the navbar menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
});
