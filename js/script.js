"use strict";
const menuBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const copyrightTxt = document.querySelector(".copyright");
const allLinks = document.querySelectorAll("a:link");
const SectionHeroEl = document.querySelector(".section-hero");

// Nav Open
menuBtn.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Current Year
const date = new Date();
const year = date.getFullYear();
copyrightTxt.textContent = `Copyright ${"\u00A9"}  ${year} by omnifood.Inc All rights reserved`;

// smooth scrolling
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Stoping LInks from ging to point
    e.preventDefault();
    const href = link.getAttribute("href");
    // scrollBack to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href != "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({
        behavior: "smooth",
      });
    }
    // close mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
/********************************************************************* */
// Sticky Nav
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      console.log(ent);
      document.querySelector("body").classList.add("sticky");
    } else {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    // options
    root: null, //in the viewport
    threshold: 0, //when event will fire
    rootMargin: "-80px", //trigger margin
  }
);
obs.observe(SectionHeroEl);
