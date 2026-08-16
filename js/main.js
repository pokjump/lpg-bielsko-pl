function initApp() {
  [
    initHeader,
    initServicesDropdown,
    initHeroHighlight,
    initRevealAnimations,
    initCountUp,
    initAboutVideos,
    initReviews,
    loadAllEmbeds,
    function () {
      document.getElementById("currentYear").textContent = new Date().getFullYear();
    }
  ].forEach(function (init) {
    try {
      init();
    } catch (e) {
      console.error(e);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function initHeader() {
  var header = document.getElementById("siteHeader");
  var burgerBtn = document.getElementById("burgerBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  var logoLink = document.getElementById("logoLink");

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  var mobileOpen = false;
  function setMobileOpen(open) {
    mobileOpen = open;
    burgerBtn.classList.toggle("is-open", open);
    burgerBtn.setAttribute("aria-expanded", String(open));
    mobileMenu.classList.toggle("is-open", open);
  }

  burgerBtn.addEventListener("click", function () {
    setMobileOpen(!mobileOpen);
  });

  document.querySelectorAll(".site-header__mobile-link, .site-header__mobile-call").forEach(function (link) {
    link.addEventListener("click", function () {
      setMobileOpen(false);
    });
  });

  var desktopQuery = window.matchMedia("(min-width: 768px)");
  function handleBreakpointChange(e) {
    if (e.matches) setMobileOpen(false);
  }
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleBreakpointChange);
  } else {
    desktopQuery.addListener(handleBreakpointChange);
  }

  logoLink.addEventListener("click", function (e) {
    if (logoLink.getAttribute("href") !== "#top") return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initServicesDropdown() {
  var dropdown = document.querySelector(".site-header__dropdown");
  if (!dropdown) return;
  var toggle = dropdown.querySelector(".site-header__dropdown-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    dropdown.classList.add("is-closed");
    toggle.blur();
  });

  dropdown.addEventListener("mouseleave", function () {
    dropdown.classList.remove("is-closed");
  });
}

function initHeroHighlight() {
  var bgWrap = document.querySelector(".hero__bg-wrap");
  if (!bgWrap) return;

  document.querySelectorAll(".site-header a, .hero a").forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      bgWrap.classList.add("is-highlighted");
    });
    link.addEventListener("mouseleave", function () {
      bgWrap.classList.remove("is-highlighted");
    });
  });
}

function initRevealAnimations() {
  var targets = document.querySelectorAll(".reveal, .reveal-x-left");

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "-100px 0px", threshold: 0.01 }
  );

  targets.forEach(function (el) { observer.observe(el); });
}

function animateCountUp(el) {
  var target = parseFloat(el.getAttribute("data-count"));
  var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
  var duration = parseInt(el.getAttribute("data-duration") || "2800", 10);
  var finalText = el.getAttribute("data-final-text");
  var fadeAt = el.hasAttribute("data-fade-at") ? parseFloat(el.getAttribute("data-fade-at")) : null;
  var start = null;
  var fading = false;
  var swapped = false;
  var lastText = null;

  function startFade() {
    fading = true;
    el.style.opacity = "0";
    setTimeout(function () {
      swapped = true;
      el.textContent = finalText;
      el.style.opacity = "1";
    }, 300);
  }

  function step(timestamp) {
    if (swapped) return;
    if (start === null) start = timestamp;
    var progress = Math.min((timestamp - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    var value = target * eased;

    var next = value.toFixed(decimals);
    if (next !== lastText) {
      el.textContent = next;
      lastText = next;
    }

    if (!fading && finalText && fadeAt !== null && value >= fadeAt) {
      startFade();
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (finalText && !fading) {
      startFade();
    }
  }
  requestAnimationFrame(step);
}

function resolveCountSince() {
  var currentYear = new Date().getFullYear();
  document.querySelectorAll(".count-up[data-count-since]").forEach(function (el) {
    var since = parseInt(el.getAttribute("data-count-since"), 10);
    el.setAttribute("data-count", String(currentYear - since));
  });
}

function animateCountUpGroup(container) {
  container.querySelectorAll(".count-up").forEach(animateCountUp);
}

function initCountUp() {
  resolveCountSince();

  var heroStats = document.querySelector(".hero__stats");
  var heroIsMobile = window.matchMedia("(max-width: 767px)").matches;
  if (heroStats && heroIsMobile && "IntersectionObserver" in window) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            heroObserver.unobserve(entry.target);
            animateCountUpGroup(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.01 }
    );
    heroObserver.observe(heroStats);
  } else if (heroStats) {
    animateCountUpGroup(heroStats);
  }

  var groups = document.querySelectorAll(".about__stats, .reviews__heading");
  if (!groups.length) return;

  if (!("IntersectionObserver" in window)) {
    groups.forEach(animateCountUpGroup);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          animateCountUpGroup(entry.target);
        }
      });
    },
    { root: null, rootMargin: "-80px 0px", threshold: 0.2 }
  );

  groups.forEach(function (g) { observer.observe(g); });
}

function initAboutVideos() {
  var overhead = document.getElementById("videoOverhead");
  var inside = document.getElementById("videoInside");
  var section = document.getElementById("o-nas");
  if (!overhead || !inside || !section) return;

  var active = "overhead";
  var started = false;

  function showOverhead() {
    active = "overhead";
    overhead.classList.add("is-active");
    inside.classList.remove("is-active");
    overhead.currentTime = 0;
    overhead.play().catch(function () {});
  }

  function showInside() {
    active = "inside";
    inside.classList.add("is-active");
    overhead.classList.remove("is-active");
    inside.currentTime = 0;
    inside.play().catch(function () {});
  }

  overhead.addEventListener("ended", showInside);
  inside.addEventListener("ended", showOverhead);

  if (!("IntersectionObserver" in window)) {
    overhead.play().catch(function () {});
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!started) {
            started = true;
            overhead.play().catch(function () {});
          } else {
            (active === "overhead" ? overhead : inside).play().catch(function () {});
          }
        } else {
          overhead.pause();
          inside.pause();
        }
      });
    },
    { root: null, rootMargin: "200px 0px", threshold: 0 }
  );

  observer.observe(section);
}

var STAR_SVG =
  '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';

function getInitials(name) {
  var words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return words[0].slice(0, 2).toUpperCase();
}

function getColorForName(name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  var hue = Math.abs(hash) % 360;
  return "hsl(" + hue + ", 55%, 45%)";
}

function buildReviewCard(review) {
  var card = document.createElement("div");
  card.className = "review-card";

  var stars = "";
  for (var i = 0; i < (review.rating || 5); i++) stars += STAR_SVG;

  var text = review.text
    ? '&ldquo;' + escapeHtml(review.text) + '&rdquo;'
    : '';

  card.innerHTML =
    '<div class="review-card__quote-mark">&ldquo;</div>' +
    '<div class="review-card__head">' +
    '<div class="review-card__avatar" style="background-color:' + getColorForName(review.author) + '">' + escapeHtml(getInitials(review.author)) + '</div>' +
    '<div>' +
    '<div class="review-card__author">' + escapeHtml(review.author) + '</div>' +
    '</div>' +
    '</div>' +
    '<div class="review-card__stars">' + stars + '</div>' +
    '<p class="review-card__text">' + text + '</p>';

  return card;
}

function escapeHtml(str) {
  var div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function appendCards(container, list) {
  var frag = document.createDocumentFragment();
  list.forEach(function (r) { frag.appendChild(buildReviewCard(r)); });
  container.appendChild(frag);
}

function initReviews() {
  if (typeof reviewsData === "undefined") return;

  var visible = reviewsData;
  var half = Math.ceil(visible.length / 2);
  var firstRow = visible.slice(0, half);
  var secondRow = visible.slice(half);
  var speedFactor = 6;

  var desktopBuilt = false;
  var mobileBuilt = false;

  function buildDesktop() {
    if (desktopBuilt) return;
    var row1 = document.getElementById("marqueeRow1");
    var row2 = document.getElementById("marqueeRow2");
    if (!row1 || !row2) return;
    desktopBuilt = true;

    appendCards(row1, firstRow);
    appendCards(row1, firstRow);
    appendCards(row2, secondRow);
    appendCards(row2, secondRow);

    row1.style.animationDuration = (firstRow.length * speedFactor) + "s";
    row2.style.animationDuration = (secondRow.length * speedFactor) + "s";
  }

  function buildMobile() {
    if (mobileBuilt) return;
    var track = document.getElementById("reviewsMobileTrack");
    if (!track) return;
    mobileBuilt = true;

    appendCards(track, visible);
    initMobileReviews();
  }

  var mobileQuery = window.matchMedia("(max-width: 767px)");
  function syncVariant() {
    if (mobileQuery.matches) buildMobile();
    else buildDesktop();
  }
  syncVariant();

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", syncVariant);
  } else {
    mobileQuery.addListener(syncVariant);
  }
}

function initMobileReviews() {
  var track = document.getElementById("reviewsMobileTrack");
  var progressFill = document.getElementById("reviewsProgressFill");
  var swipeHint = document.getElementById("reviewsSwipeHint");
  if (!track || !progressFill) return;

  var ticking = false;
  var loopTimer = null;
  var loopThreshold = 4;
  var loopDelay = 700;

  function updateProgress() {
    var maxScroll = track.scrollWidth - track.clientWidth;
    var ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    progressFill.style.width = (ratio * 100) + "%";

    if (swipeHint) swipeHint.classList.add("is-hidden");

    if (loopTimer) clearTimeout(loopTimer);
    if (maxScroll > 0 && track.scrollLeft >= maxScroll - loopThreshold) {
      loopTimer = setTimeout(function () {
        track.scrollTo({ left: 0, behavior: "smooth" });
      }, loopDelay);
    }

    ticking = false;
  }

  track.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateProgress);
  }, { passive: true });
}

function hasEmbedConsent() {
  try {
    return window.localStorage.getItem("cookie-consent-embeds") === "granted";
  } catch (e) {
    return false;
  }
}

function loadEmbed(container) {
  if (!container || container.dataset.embedLoaded === "true") return;
  var iframe = document.createElement("iframe");
  iframe.src = container.getAttribute("data-embed-src");
  iframe.title = container.getAttribute("data-embed-title") || "";
  iframe.loading = "lazy";
  iframe.allowFullscreen = true;
  var allow = container.getAttribute("data-embed-allow");
  if (allow) iframe.setAttribute("allow", allow);
  var referrer = container.getAttribute("data-embed-referrer");
  if (referrer) iframe.referrerPolicy = referrer;
  container.dataset.embedLoaded = "true";
  container.innerHTML = "";
  container.appendChild(iframe);
}

function renderEmbedPlaceholder(container) {
  if (!container || container.dataset.embedLoaded === "true") return;
  var isMap = container.getAttribute("data-embed-kind") === "map";
  var text = isMap
    ? "Mapa Google - załaduj, aby zobaczyć lokalizację. Ładowanie spowoduje zapisanie plików cookies Google."
    : "Film z YouTube - załaduj, aby zobaczyć montaż w naszym warsztacie. Ładowanie spowoduje zapisanie plików cookies Google.";
  var btnLabel = isMap ? "Załaduj mapę" : "Załaduj film";

  var wrap = document.createElement("div");
  wrap.className = "embed-placeholder";

  var p = document.createElement("p");
  p.className = "embed-placeholder__text";
  p.textContent = text;

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn--outline";
  btn.textContent = btnLabel;
  btn.addEventListener("click", function () {
    loadEmbed(container);
  });

  wrap.appendChild(p);
  wrap.appendChild(btn);
  container.innerHTML = "";
  container.appendChild(wrap);
}

function loadAllEmbeds() {
  var containers = document.querySelectorAll("[data-embed-src]");
  if (!containers.length) return;

  function apply() {
    containers.forEach(function (container) {
      if (hasEmbedConsent()) {
        loadEmbed(container);
      } else {
        renderEmbedPlaceholder(container);
      }
    });
  }

  if ("requestIdleCallback" in window) {
    requestIdleCallback(apply, { timeout: 3000 });
  } else {
    setTimeout(apply, 1200);
  }

  window.addEventListener("cookieConsentEmbedsAccepted", function () {
    containers.forEach(loadEmbed);
  });
}


