(function () {
  "use strict";

  function stripPrefix(value, prefix) {
    return value.indexOf(prefix) === 0 ? value.slice(prefix.length) : value;
  }

  function hasAnalyticsConsent() {
    try {
      return window.localStorage.getItem("cookie-consent-analytics") === "granted";
    } catch (e) {
      return false;
    }
  }

  document.addEventListener(
    "click",
    function (event) {
      if (typeof gtag !== "function") return;
      if (!hasAnalyticsConsent()) return;
      if (!event.target || typeof event.target.closest !== "function") return;

      var telLink = event.target.closest('a[href^="tel:"]');
      if (telLink) {
        gtag("event", "klikniecie_telefon", {
          numer: stripPrefix(telLink.getAttribute("href"), "tel:"),
          tytul_strony: document.title
        });
        return;
      }

      var mailLink = event.target.closest('a[href^="mailto:"]');
      if (mailLink) {
        gtag("event", "klikniecie_email", {
          adres: stripPrefix(mailLink.getAttribute("href"), "mailto:"),
          tytul_strony: document.title
        });
      }
    },
    true
  );
})();
