(function () {
  "use strict";

  var links = document.querySelectorAll(".policy-toc__list a[href^=\"#\"]");
  if (!links.length) return;

  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (section) sections.push({ id: id, link: link, section: section });
  });
  if (!sections.length) return;

  var OFFSET = 120;

  function setActive(id) {
    sections.forEach(function (s) {
      s.link.classList.toggle("is-active", s.id === id);
    });
  }

  function updateActive() {
    var currentId = sections[0].id;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].section.getBoundingClientRect().top - OFFSET <= 0) {
        currentId = sections[i].id;
      } else {
        break;
      }
    }
    setActive(currentId);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateActive();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateActive();
})();
