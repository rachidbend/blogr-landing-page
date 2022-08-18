"use strict";

// making navigation open and close
const btnNavEl = document.querySelector(".btn-nav");
const bodyEl = document.querySelector("body");
const dropdowns = document.querySelectorAll(".nav__list--tab");
const arrows = document.querySelectorAll(".lab__link--arrow");

btnNavEl.addEventListener("click", (e) => {
  e.preventDefault();
  bodyEl.classList.toggle("nav-open");
});

// making nav tabs functional

const navTabLinkEls = document.querySelectorAll(".nav__link--open");

navTabLinkEls.forEach((link) => {
  link.addEventListener("click", (e) => {
    //  prevent link from refreshing page
    e.preventDefault();
    resetDropdown();
    const arrowEl = e.target.lastChild;
    const tab = e.target.nextElementSibling;
    tab.classList.toggle("tab-open");
    arrowEl.classList.toggle("arrow-open");
  });
});

// closing nav when body is clicked and closing dropdowns
bodyEl.addEventListener("click", (e) => {
  // if the target is not the nav button or nav itself, then close the nav
  if (!e.target.closest(".nav--main") && !e.target.closest(".btn-nav")) {
    if (bodyEl.classList.contains("nav-open")) {
      bodyEl.classList.remove("nav-open");
    }
  }

  //  if the body is clicked but not the main nav or the dropdown itself then close all dropdowns
  if (!e.target.closest(".nav--main")) {
    resetDropdown();
  }
});

console.log(dropdowns);

// if the nav is clicked keep the one clikced open but close the rest

const resetDropdown = function () {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("tab-open");
  });
  arrows.forEach((arrow) => arrow.classList.remove("arrow-open"));
};
