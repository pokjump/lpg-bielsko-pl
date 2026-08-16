(function () {
  "use strict";

  var KEY_ANALYTICS = "cookie-consent-analytics";
  var KEY_EMBEDS = "cookie-consent-embeds";

  function readConsent(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeConsent(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
  }

  function grantAnalyticsConsent() {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }

  function denyAnalyticsConsent() {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }

  function showBanner() {
    var banner = document.getElementById("cookieConsent");
    if (banner) banner.classList.add("is-visible");
  }

  function hideBanner() {
    var banner = document.getElementById("cookieConsent");
    if (banner) banner.classList.remove("is-visible");
  }

  function applyConsent(analyticsGranted, embedsGranted) {
    writeConsent(KEY_ANALYTICS, analyticsGranted ? "granted" : "denied");
    writeConsent(KEY_EMBEDS, embedsGranted ? "granted" : "denied");

    if (analyticsGranted) {
      grantAnalyticsConsent();
    } else {
      denyAnalyticsConsent();
    }

    hideBanner();

    if (embedsGranted) {
      window.dispatchEvent(new Event("cookieConsentEmbedsAccepted"));
    }
  }

  function setOptionsExpanded(optionsPanel, toggleBtn, expanded) {
    if (expanded) {
      optionsPanel.removeAttribute("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");
      toggleBtn.textContent = "Ukryj wybór";
    } else {
      optionsPanel.setAttribute("hidden", "");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "Dostosuj";
    }
  }

  function initCookieConsent() {
    var banner = document.getElementById("cookieConsent");
    var acceptBtn = document.getElementById("cookieConsentAccept");
    var rejectBtn = document.getElementById("cookieConsentReject");
    var saveBtn = document.getElementById("cookieConsentSave");
    var toggleBtn = document.getElementById("cookieConsentToggle");
    var optionsPanel = document.getElementById("cookieConsentOptions");
    var analyticsCheckbox = document.getElementById("cookieConsentAnalytics");
    var embedsCheckbox = document.getElementById("cookieConsentEmbeds");
    if (!banner || !acceptBtn || !rejectBtn || !saveBtn) return;

    if (toggleBtn && optionsPanel) {
      toggleBtn.addEventListener("click", function () {
        setOptionsExpanded(optionsPanel, toggleBtn, optionsPanel.hasAttribute("hidden"));
      });
    }

    acceptBtn.addEventListener("click", function () {
      if (analyticsCheckbox) analyticsCheckbox.checked = true;
      if (embedsCheckbox) embedsCheckbox.checked = true;
      applyConsent(true, true);
    });

    rejectBtn.addEventListener("click", function () {
      if (analyticsCheckbox) analyticsCheckbox.checked = false;
      if (embedsCheckbox) embedsCheckbox.checked = false;
      applyConsent(false, false);
    });

    saveBtn.addEventListener("click", function () {
      var analyticsGranted = !!(analyticsCheckbox && analyticsCheckbox.checked);
      var embedsGranted = !!(embedsCheckbox && embedsCheckbox.checked);
      applyConsent(analyticsGranted, embedsGranted);
    });

    var analyticsConsent = readConsent(KEY_ANALYTICS);
    var embedsConsent = readConsent(KEY_EMBEDS);

    if (analyticsConsent === "granted") grantAnalyticsConsent();
    if (analyticsCheckbox) analyticsCheckbox.checked = analyticsConsent === "granted";
    if (embedsCheckbox) embedsCheckbox.checked = embedsConsent === "granted";

    if (analyticsConsent === null && embedsConsent === null) {
      showBanner();
    }

    var manageBtn = document.getElementById("cookieConsentManageBtn");
    if (manageBtn) {
      manageBtn.addEventListener("click", function () {
        showBanner();
        if (toggleBtn && optionsPanel) setOptionsExpanded(optionsPanel, toggleBtn, true);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCookieConsent);
  } else {
    initCookieConsent();
  }
})();
