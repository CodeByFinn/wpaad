"use strict";

let scrollbar = document.getElementsByTagName("nav")[0];
// All paragraph links, not the home, gallery link
let children = Array.from(scrollbar.children).slice(3);

let tabs = [];
for (let child of children) {
  if (!child.classList.contains("connect")) {
    tabs.push(child);
  }
}

let paragraphs = document.getElementsByTagName("section");
let scrollPoints = []
scrollPoints[0] = 0;

// Initialise selected tab to the first one
tabs[0].classList.add("scroll-tab");
tabs[0].children[0].classList.add("scroll-img");
let currentTab = 0;

// Mobile scrollbar
let selectElement = document.getElementById("choose-paragraph");
let tabList = [];
for (let paragraph of paragraphs) {
  tabList.push(paragraph.id);
}

document.addEventListener("scroll", function(e) {
  // Calculate positions of paragraphs
  // Doing this each scroll, because the positions can vary, depending on which accordions are opened
  // Safari on iOS doesn't seem support window.scrollY
  let windowScroll = window.pageYOffset;
  for (let i = 1; i < paragraphs.length; i++) {
    scrollPoints[i] = windowScroll + paragraphs[i].getBoundingClientRect().top - window.innerHeight / 2;
  }

  let newTab = currentTab;

  for (let i = scrollPoints.length - 1; i >= 0; i--) {
    if (windowScroll > scrollPoints[i]) {
      newTab = i;
      break;
    }
  }

  if (currentTab != newTab) {
    tabs[newTab].classList.add("scroll-tab");
    tabs[newTab].children[0].classList.add("scroll-img");
    tabs[currentTab].classList.remove("scroll-tab");
    tabs[currentTab].children[0].classList.remove("scroll-img");

    selectElement.value = newTab;

    currentTab = newTab;
  }
});

function scrollParagraph() {
  let selectedParagraph = document.getElementById(tabList[+selectElement.value]);
  selectedParagraph.scrollIntoView();
}
