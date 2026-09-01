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

  function setActive(id) {
    sections.forEach(function (s) {
      s.link.classList.toggle("is-active", s.id === id);
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s.section); });
  }

  setActive(sections[0].id);
})();
