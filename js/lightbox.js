function initLightbox() {
  var triggers = document.querySelectorAll("[data-lightbox]");
  var lightbox = document.getElementById("lightbox");
  if (!triggers.length || !lightbox) return;

  var imgEl = document.getElementById("lightboxImg");
  var closeBtn = document.getElementById("lightboxClose");
  var prevBtn = document.getElementById("lightboxPrev");
  var nextBtn = document.getElementById("lightboxNext");
  var lastFocused = null;

  var group = [];
  var groupIndex = 0;

  function showAt(index) {
    groupIndex = index;
    var item = group[groupIndex];
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    prevBtn.hidden = groupIndex <= 0;
    nextBtn.hidden = groupIndex >= group.length - 1;
  }

  function open(triggerBtn) {
    var container = triggerBtn.parentElement;
    var groupTriggers = Array.prototype.slice.call(container.querySelectorAll("[data-lightbox]"));
    group = groupTriggers.map(function (btn) {
      return { src: btn.getAttribute("data-lightbox"), alt: btn.getAttribute("data-lightbox-alt") || "" };
    });

    lastFocused = document.activeElement;
    showAt(groupTriggers.indexOf(triggerBtn));
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () {
      lightbox.classList.add("is-visible");
    });
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove("is-visible");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
    setTimeout(function () {
      lightbox.hidden = true;
      imgEl.src = "";
    }, 250);
  }

  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      open(btn);
    });
  });

  prevBtn.addEventListener("click", function () {
    if (groupIndex > 0) showAt(groupIndex - 1);
  });

  nextBtn.addEventListener("click", function () {
    if (groupIndex < group.length - 1) showAt(groupIndex + 1);
  });

  closeBtn.addEventListener("click", close);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-visible")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft" && groupIndex > 0) showAt(groupIndex - 1);
    if (e.key === "ArrowRight" && groupIndex < group.length - 1) showAt(groupIndex + 1);
  });
}

document.addEventListener("DOMContentLoaded", initLightbox);
