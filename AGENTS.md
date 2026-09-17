# AGENTS.md

## Opis projektu

Statyczna strona wizytówka warsztatu Auto Diag w Bielsku-Białej (instalacje LPG, haki
holownicze, diagnostyka komputerowa, elektronika samochodowa). Czysty HTML + CSS + JS,
bez frameworka, bez bundlera i bez zależności npm. Serwowana z hostingu Apache pod
`https://lpg.bielsko.pl/`, wdrażana automatycznie przez FTP.

## Stack

- HTML5 pisany ręcznie, jeden plik = jedna podstrona (brak szablonów/partiali)
- CSS: jeden arkusz `css/style.css` + `css/fonts.css`, zmienne w `:root`, bez preprocesora
- JS: ES5-owy styl (`var`, `function`, IIFE), bez modułów, bez frameworka
- Fonty self-hosted (`css/fonts/*.woff2`): Inter, Space Grotesk, JetBrains Mono
- Node.js (u autora v24) – wyłącznie do uruchomienia `tools/cache-bust.js`; skrypt korzysta
  tylko z modułów wbudowanych (`fs`, `path`, `crypto`), nic nie trzeba instalować
- Apache: `.htaccess` (nagłówki bezpieczeństwa, CSP, przekierowania 301, ładne URL-e, cache)
- Analityka: Google Analytics (gtag) + Cloudflare Web Analytics, obie za zgodą cookie

## Komendy

Nie ma instalacji, builda, testów ani lintera. Jedyna komenda w projekcie:

```
node tools/cache-bust.js
```

Stempluje odwołania do `css/*.css` i `js/*.js` we wszystkich `*.html` w katalogu głównym
hashem treści (`?v=xxxxxxxx`). Idempotentny – bez zmian w plikach nic nie modyfikuje.
**Uruchamiaj po każdej zmianie w `css/` lub `js/`, przed commitem.**

Podgląd lokalny: dowolny serwer statyczny (np. `npx serve`), z zastrzeżeniem że `.htaccess`
nie działa lokalnie – ładne URL-e (`/haki-holownicze` zamiast `.html`) i przekierowania
zobaczysz dopiero na serwerze.

## Struktura katalogów

- `*.html` (root) – wszystkie podstrony; `index.html`, `404.html` oraz strony usług
- `css/` – `style.css` (całość stylów), `fonts.css`, `fonts/` (pliki .woff2)
- `js/` – skrypty ładowane per strona: `main.js`, `consent.js`, `tracking.js`, `ga-init.js`,
  `lightbox.js`, `lpg-calc.js`, `policy-toc.js`, `reviews-data.js` (dane opinii Google)
- `images/` – `gallery/` (pary `nazwa.webp` + `nazwa-full.jpg`), `logos/`, `certificates/`
- `videos/` – materiały wideo z warsztatu (mp4)
- `icons/` – favicony i `site.webmanifest`
- `tools/` – `cache-bust.js`; **nie trafia na FTP**
- `_seo/` – raporty audytów SEO w Markdown; **nie trafia na FTP**
- `unused/` – graty odłożone na bok, nieużywane przez stronę; **nie trafia na FTP**
- `.github/workflows/deploy.yml` – deploy FTP

## Konwencje kodu

- Język treści: polski. Komentarze w kodzie i komunikaty commitów też po polsku.
- Wcięcia: 2 spacje (HTML, CSS, JS). HTML nie wcina sekcji najwyższego poziomu.
- CSS: nazwy w stylu BEM (`hero__stat-value`, `btn--primary`), stany przez `is-` / `has-`
  (`is-scrolled`, `has-mobile-menu-open`). Kolory, fonty, promienie i szerokości wyłącznie
  przez zmienne CSS z `:root` – nie wstawiaj wartości na sztywno.
- `style.css` podzielony komentarzami `/* ---------- nazwa sekcji ---------- */`; nową
  regułę dopisuj do właściwej sekcji, nie na koniec pliku.
- JS: `var`, klasyczne `function`, `"use strict"` w IIFE, cudzysłowy podwójne. `main.js`
  wystawia funkcje `initX()` wołane z tablicy w `initApp()` – nowy moduł dopisz do tej listy.
- **Zero inline'owego JS** – żadnych `onclick=`, żadnych `<script>` z kodem w HTML. Zabrania
  tego CSP z `.htaccess` (`script-src 'self'` + GTM/Cloudflare). Wyjątkiem są bloki
  `application/ld+json` z danymi strukturalnymi (nie są wykonywane).
- Nagłówek (`nav.site-header`) i stopka są **skopiowane w każdym pliku HTML**. Zmiana w menu
  lub stopce = ta sama zmiana we wszystkich `*.html` (uwaga: `index.html` ma linki
  kotwicowe `#uslugi`, podstrony i `404.html` – bezwzględne).
- Każda podstrona ma komplet meta: `title`, `description`, `canonical`, OG, Twitter Card,
  JSON-LD. Dodając stronę, skopiuj wzorzec z istniejącej i podmień treść.
- Obrazy: `.webp` do wyświetlania, `-full.jpg` jako podgląd w lightboksie.
- Linki wewnętrzne bez `.html` (`/haki-holownicze`) – `.htaccess` przepisuje je na pliki
  i przekierowuje 301 wersję z rozszerzeniem.

## Deploy

Push na `main` → GitHub Actions (`.github/workflows/deploy.yml`) → `SamKirkland/FTP-Deploy-Action@v4.3.5`
→ FTPS na `/public_html/`. Nie ma buildu: na serwer leci zawartość repo jeden do jednego,
poza wykluczeniami z pola `exclude`. Dane logowania siedzą w sekretach repozytorium
(`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).

Kolejność przy zmianie plików produkcyjnych: `node tools/cache-bust.js` → commit → push.

## Zasady i pułapki

- Cokolwiek dodasz do katalogu głównego repo, **wyląduje na serwerze WWW**. Pliki robocze
  (notatki, materiały, backupy) trzymaj w `_seo/`, `tools/` lub `unused/`, albo dopisz nowe
  wykluczenie w `deploy.yml`.
- Lista `exclude` w `deploy.yml` **nadpisuje domyślną** listę akcji. Dopisując coś, zostaw
  na miejscu `**/.git*`, `**/.git*/**` i `**/node_modules/**`.
- `AGENTS.md`, `CLAUDE.md`, `CLAUDE.local.md` i `.claude/` są wykluczone z FTP – nie usuwaj
  tych wpisów.
- Nie edytuj hashy `?v=...` ręcznie – generuje je `tools/cache-bust.js`.
- `sitemap.xml`: `lastmod` podnoś **tylko** dla adresów, których treść faktycznie się
  zmieniła. Hurtowa aktualizacja wszystkich dat obniża wiarygodność sygnału w Google.
- CSP w `.htaccess` jest wąska. Nowy zewnętrzny skrypt, font, obraz czy iframe wymaga
  dopisania hosta do odpowiedniej dyrektywy, inaczej przeglądarka go zablokuje.
- GA i osadzone treści (mapa, YouTube) startują dopiero po zgodzie z bannera cookie
  (`js/consent.js`, klucze `cookie-consent-analytics` i `cookie-consent-embeds`). Nie
  podpinaj śledzenia z pominięciem tego mechanizmu.
- Przekierowania 301 w `.htaccess` obsługują stare adresy z domeny `autodiag.bielsko.pl`
  i poprzedniej struktury serwisu. Nie kasuj ich – to wypracowana moc linków.
- Nie ruszaj `google120d8cfd6a20b59a.html` (weryfikacja Google Search Console).
