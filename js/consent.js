(function () {
  "use strict";

  var STORAGE_KEY = "cookie-consent";

  function grantAnalyticsConsent() {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }

  function getConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }

  function showBanner() {
    var banner = document.getElementById("cookieConsent");
    if (banner) banner.classList.add("is-visible");
  }

  function hideBanner() {
    var banner = document.getElementById("cookieConsent");
    if (banner) banner.classList.remove("is-visible");
  }

  function initCookieConsent() {
    var banner = document.getElementById("cookieConsent");
    var acceptBtn = document.getElementById("cookieConsentAccept");
    var rejectBtn = document.getElementById("cookieConsentReject");
    if (!banner || !acceptBtn || !rejectBtn) return;

    acceptBtn.addEventListener("click", function () {
      setConsent("accepted");
      grantAnalyticsConsent();
      hideBanner();
    });

    rejectBtn.addEventListener("click", function () {
      setConsent("rejected");
      hideBanner();
    });

    var consent = getConsent();
    if (consent === "accepted") {
      grantAnalyticsConsent();
    } else if (consent !== "rejected") {
      showBanner();
    }

    var privacyLink = document.getElementById("footerPrivacyBtnConsent");
    if (privacyLink) {
      privacyLink.addEventListener("click", function () {
        if (typeof window.openPrivacyPolicy === "function") {
          window.openPrivacyPolicy();
        }
      });
    }

    var manageBtn = document.getElementById("cookieConsentManageBtn");
    if (manageBtn) {
      manageBtn.addEventListener("click", function () {
        if (typeof window.closePrivacyPolicy === "function") {
          window.closePrivacyPolicy();
        }
        showBanner();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCookieConsent);
  } else {
    initCookieConsent();
  }
})();
