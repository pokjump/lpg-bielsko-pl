function initApp() {
  [
    initHeader,
    initServicesDropdown,
    initRevealAnimations,
    initCountUp,
    initHeroScanner,
    initAboutVideos,
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
    document.documentElement.classList.toggle("has-mobile-menu-open", open);
    document.body.classList.toggle("has-mobile-menu-open", open);
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

function initRevealAnimations() {
  var targets = document.querySelectorAll(".reveal, .reveal-x-left, .about__logo");

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

function getWorkshopStatus() {
  if (!window.Intl) return null;

  var parts = {};
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Warsaw", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  }).formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });

  var day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(parts.weekday);
  var minutes = parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10);
  if (day < 0 || isNaN(minutes)) return null;

  var weekday = day < 5;
  var status = { open: false, time: parts.hour + ":" + parts.minute };
  if (weekday && minutes >= 7 * 60 && minutes < 17 * 60) {
    status.open = true;
    status.label = "Otwarte";
    status.note = "Zapraszamy do 17:00";
  } else {
    status.label = "Zamknięte";
    if (weekday && minutes < 7 * 60) status.note = "Otwieramy dziś o 7:00";
    else if (day < 4) status.note = "Otwieramy jutro o 7:00";
    else status.note = "Otwieramy w poniedziałek o 7:00";
  }
  return status;
}

function initHeroScanner() {
  var obd = document.querySelector("[data-obd]");
  if (!obd) return;

  var statusEl = obd.querySelector("[data-obd-status]");
  var noteEl = obd.querySelector("[data-obd-note]");
  var rescan = obd.querySelector("[data-obd-rescan]");
  var clockEl = obd.querySelector("[data-obd-clock]");
  var counters = obd.querySelectorAll(".count-up");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timers = [];

  function showResult() {
    var status = getWorkshopStatus();
    if (status) {
      statusEl.textContent = status.label;
      noteEl.textContent = status.note;
      statusEl.classList.toggle("is-open", status.open);
    }
    obd.setAttribute("data-phase", "result");
    if (reduceMotion) {
      counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
    } else {
      animateCountUpGroup(obd);
    }
  }

  function run(skipBoot) {
    timers.forEach(clearTimeout);
    timers = [];
    var now = getWorkshopStatus();
    if (clockEl && now) clockEl.textContent = now.time;
    if (reduceMotion) {
      showResult();
      return;
    }
    var scanAt = skipBoot ? 0 : 1400;
    if (skipBoot) {
      obd.setAttribute("data-phase", "scan");
    } else {
      obd.setAttribute("data-phase", "boot");
      timers.push(setTimeout(function () { obd.setAttribute("data-phase", "scan"); }, scanAt));
    }
    timers.push(setTimeout(showResult, scanAt + 3200));
  }

  if (rescan) rescan.addEventListener("click", function () { run(true); });

  if (!("IntersectionObserver" in window)) {
    run(false);
    return;
  }

  obd.setAttribute("data-phase", "boot");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          run(false);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.3 }
  );
  observer.observe(obd);
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


