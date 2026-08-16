window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
var storedConsent;
try {
  storedConsent = window.localStorage.getItem('cookie-consent-analytics');
} catch (e) {
  storedConsent = null;
}
if (storedConsent === 'granted') {
  gtag('consent', 'update', { 'analytics_storage': 'granted' });
}
gtag('config', 'G-WXFQ5M9ZVY');
