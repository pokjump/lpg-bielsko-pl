function initLightbox() {
  var triggers = document.querySelectorAll("[data-lightbox]");
  var lightbox = document.getElementById("lightbox");
  if (!triggers.length || !lightbox) return;

  var imgEl = document.getElementById("lightboxImg");
  var closeBtn = document.getElementById("lightboxClose");
  var lastFocused = null;

  function open(src, alt) {
    lastFocused = document.activeElement;
    imgEl.src = src;
    imgEl.alt = alt || "";
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
      open(btn.getAttribute("data-lightbox"), btn.getAttribute("data-lightbox-alt"));
    });
  });

  closeBtn.addEventListener("click", close);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("is-visible")) close();
  });
}

document.addEventListener("DOMContentLoaded", initLightbox);
