(function () {
  if (location.hostname.indexOf("lpg.bielsko.pl") !== -1) return;
  var origin = location.origin + "/";
  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", origin);
  var ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", origin);
})();
