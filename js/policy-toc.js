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

  var DOMINANCE_THRESHOLD = 0.85;

  function updateActive() {
    var viewportTop = header ? header.offsetHeight : 0;
    var viewportBottom = window.innerHeight;

    var visibilities = sections.map(function (s) {
      var rect = s.section.getBoundingClientRect();
      var visible = Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop);
      return { id: s.id, visible: Math.max(0, visible) };
    });

    var total = visibilities.reduce(function (sum, v) { return sum + v.visible; }, 0);
    var activeIds = {};

    if (total > 0) {
      var sorted = visibilities.slice().sort(function (a, b) { return b.visible - a.visible; });
      var threshold = total * DOMINANCE_THRESHOLD;
      var acc = 0;
      for (var i = 0; i < sorted.length && sorted[i].visible > 0; i++) {
        activeIds[sorted[i].id] = true;
        acc += sorted[i].visible;
        if (acc >= threshold) break;
      }
    } else {
      activeIds[sections[0].id] = true;
    }

    sections.forEach(function (s) {
      s.link.classList.toggle("is-active", !!activeIds[s.id]);
    });
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
