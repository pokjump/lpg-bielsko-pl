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

  var header = document.querySelector(".site-header");

  function setActive(id) {
    sections.forEach(function (s) {
      s.link.classList.toggle("is-active", s.id === id);
    });
  }

  function updateActive() {
    var viewportTop = header ? header.offsetHeight : 0;
    var viewportBottom = window.innerHeight;
    var bestId = sections[0].id;
    var bestVisible = 0;

    sections.forEach(function (s) {
      var rect = s.section.getBoundingClientRect();
      var visible = Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop);
      if (visible > bestVisible) {
        bestVisible = visible;
        bestId = s.id;
      }
    });

    setActive(bestId);
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
