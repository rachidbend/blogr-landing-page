"use strict";

// making navigation open and close
const btnNavEl = document.querySelector(".btn-nav");
const bodyEl = document.querySelector("body");

btnNavEl.addEventListener("click", (e) => {
  e.preventDefault();
  bodyEl.classList.toggle("nav-open");
});

// making nav tabs functional

const navTabLinkEls = document.querySelectorAll(".nav__link--open");
console.log(navTabLinkEls);

navTabLinkEls.forEach((link) => {
  link.addEventListener("click", (e) => {
    //  prevent link from refreshing page
    e.preventDefault();
    const tab = e.target.nextElementSibling;
    tab.classList.toggle("tab-open");
    console.log(tab);
  });
});
