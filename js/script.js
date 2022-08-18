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

    const arrowEls = e.target.children;
    const tab = e.target.nextElementSibling;

    // if the dropdown is already open then close it

    if (tab.classList.contains("tab-open")) {
      tab.classList.remove("tab-open");
      arrowEls[0].classList.remove("arrow-open");
      arrowEls[1].classList.remove("arrow-open");
      return;
    }
    // if the dropdown isn,'t already open then close the all and open that specific one
    // to make sure only one dropdown opens at a time
    resetDropdown();
    tab.classList.toggle("tab-open");
    arrowEls[0].classList.toggle("arrow-open");
    arrowEls[1].classList.toggle("arrow-open");
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

// if the nav is clicked keep the one clikced open but close the rest

const resetDropdown = function () {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("tab-open");
  });
  arrows.forEach((arrow) => arrow.classList.remove("arrow-open"));
};
