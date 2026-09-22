# lpg.bielsko.pl

Strona wizytówka warsztatu **Auto Diag** z Bielska-Białej: instalacje LPG, haki holownicze,
diagnostyka komputerowa oraz elektronika samochodowa. Serwis jest napisany w czystym HTML,
CSS i JavaScript, bez frameworka, bez bundlera i bez zależności npm. Całość jest serwowana
z hostingu Apache pod adresem https://lpg.bielsko.pl/ i wdrażana automatycznie przez FTP.

## Stack

| Warstwa | Rozwiązanie |
| --- | --- |
| HTML | HTML5 pisany ręcznie, jeden plik na jedną podstronę |
| CSS | `css/style.css` + `css/fonts.css`, zmienne w `:root`, bez preprocesora |
| JS | styl ES5 (`var`, `function`, IIFE), bez modułów i bez frameworka |
| Fonty | self-hosted `.woff2`: Inter, Space Grotesk, JetBrains Mono |
| Serwer | Apache, konfiguracja w `.htaccess` |
| Analityka | Google Analytics (gtag) oraz Cloudflare Web Analytics, obie za zgodą |
| Narzędzia | Node.js wyłącznie do `tools/cache-bust.js` (same moduły wbudowane) |

## Uruchomienie lokalne

Instalacja nie jest wymagana, nie ma builda ani testów. Podgląd jest uruchamiany dowolnym
serwerem statycznym:

```
npx serve
```

Trzeba pamiętać, że `.htaccess` nie jest obsługiwany lokalnie, więc ładne adresy
(`/haki-holownicze` zamiast `/haki-holownicze.html`) i przekierowania 301 są widoczne
dopiero na serwerze produkcyjnym.

## Cache busting

Jedyna komenda w projekcie:

```
node tools/cache-bust.js
```

Odwołania do `css/*.css` i `js/*.js` we wszystkich plikach `*.html` z katalogu głównego są
stemplowane hashem treści (`?v=xxxxxxxx`). Skrypt jest idempotentny, więc przy braku zmian
nic nie jest modyfikowane. Polecenie powinno być uruchamiane po każdej zmianie w `css/`
lub `js/`, jeszcze przed commitem. Hashe nie są edytowane ręcznie.

## Struktura

```
*.html            wszystkie podstrony (index, strony usług, faq, galeria, polityka, 404)
css/              style.css, fonts.css oraz fonts/ z plikami .woff2
js/               skrypty ładowane per strona
images/           gallery/ (pary nazwa.webp + nazwa-full.jpg), logos/, certificates/
videos/           materiały wideo z warsztatu (mp4)
icons/            favicony i site.webmanifest
tools/            cache-bust.js (nie trafia na FTP)
_seo/             raporty audytów SEO (nie trafia na FTP)
unused/           materiały odłożone na bok (nie trafia na FTP)
.github/          workflow deployu
```

### Podstrony

| Plik | Adres | Zawartość |
| --- | --- | --- |
| `index.html` | `/` | strona główna, usługi, opinie, kontakt |
| `instalacje-lpg.html` | `/instalacje-lpg` | montaż instalacji gazowych, kalkulator oszczędności |
| `haki-holownicze.html` | `/haki-holownicze` | montaż haków, certyfikat ORIS |
| `diagnostyka-komputerowa.html` | `/diagnostyka-komputerowa` | diagnostyka i programowanie |
| `elektronika-alarmy.html` | `/elektronika-alarmy` | alarmy, immobilisery, czujniki |
| `galeria.html` | `/galeria` | zdjęcia realizacji w lightboksie |
| `faq.html` | `/faq` | najczęstsze pytania |
| `polityka-prywatnosci.html` | `/polityka-prywatnosci` | polityka prywatności i cookies |
| `404.html` | fallback | strona błędu |

### Skrypty

| Plik | Rola | Gdzie jest ładowany |
| --- | --- | --- |
| `main.js` | nagłówek, menu, animacje, liczniki, opinie, osadzenia | wszędzie |
| `consent.js` | banner cookie i obsługa zgód | wszędzie |
| `ga-init.js` | inicjalizacja gtag z domyślnie odrzuconymi zgodami | wszędzie |
| `tracking.js` | zdarzenia analityczne | wszędzie |
| `reviews-data.js` | dane opinii Google | `index.html` |
| `lpg-calc.js` | kalkulator opłacalności LPG | `instalacje-lpg.html` |
| `lightbox.js` | podgląd zdjęć | `galeria.html`, `haki-holownicze.html` |
| `policy-toc.js` | spis treści polityki | `polityka-prywatnosci.html` |

Funkcje `initX()` z `main.js` są wywoływane z tablicy w `initApp()`. Nowy moduł powinien
zostać dopisany do tej listy.

## Paleta barw

Kolory są zdefiniowane wyłącznie jako zmienne CSS w `:root` (`css/style.css`). Wartości nie
są wpisywane na sztywno w regułach. Motyw jest ciemny (`color-scheme: dark`).

### Tła i powierzchnie

| Zmienna | Wartość | Zastosowanie |
| --- | --- | --- |
| `--bg` | `#0a0b0d` | tło dokumentu |
| `--bg-raised` | `#0e1013` | sekcje wyniesione ponad tło |
| `--surface` | `#141619` | karty i panele |
| `--surface-high` | `#1b1e22` | element aktywny lub najechany |
| `--surface-highest` | `#24272c` | najwyższa warstwa, np. pola formularzy |
| `--surface-lowest` | `#000000` | czerń, m.in. tło lightboksa |

### Treść

| Zmienna | Wartość | Zastosowanie |
| --- | --- | --- |
| `--fg` | `#eceef0` | tekst podstawowy |
| `--fg-muted` | `#9aa0a7` | tekst pomocniczy, leady |
| `--fg-faint` | `#666b71` | tekst najmniej istotny, podpisy |

### Akcent

| Zmienna | Wartość | Zastosowanie |
| --- | --- | --- |
| `--accent` | `#35d6a6` | kolor marki, linki, ikony, CTA |
| `--accent-strong` | `#4ff0bc` | stan hover akcentu |
| `--accent-dim` | `rgba(53, 214, 166, 0.12)` | delikatne tło akcentowane |
| `--accent-border` | `rgba(53, 214, 166, 0.32)` | obramowania akcentowane |
| `--on-accent` | `#032019` | tekst na tle akcentu |

### Obramowania

| Zmienna | Wartość | Zastosowanie |
| --- | --- | --- |
| `--border` | `rgba(255, 255, 255, 0.09)` | domyślna linia |
| `--border-hairline` | `rgba(255, 255, 255, 0.14)` | cienka linia rozdzielająca |
| `--border-strong` | `rgba(255, 255, 255, 0.20)` | obramowanie wyróżnione |

### Typografia i geometria

| Zmienna | Wartość |
| --- | --- |
| `--font-sans` | `"Inter"` + systemowe |
| `--font-head` | `"Space Grotesk"` + systemowe |
| `--font-mono` | `"JetBrains Mono"` + systemowe |
| `--r-sm` / `--r-md` | `2px` / `4px` |
| `--container-max` | `80rem` |
| `--container-max-narrow` | `62rem` |

## Konwencje

- Treść, komentarze w kodzie i komunikaty commitów są pisane po polsku.
- Wcięcia mają 2 spacje w HTML, CSS i JS. Sekcje najwyższego poziomu w HTML nie są wcinane.
- Nazwy klas CSS są w stylu BEM (`hero__stat-value`, `btn--primary`), a stany oznaczane
  przez `is-` oraz `has-` (`is-scrolled`, `has-mobile-menu-open`).
- `style.css` jest podzielony komentarzami `/* ---------- nazwa sekcji ---------- */`.
  Nowa reguła powinna być dopisana do właściwej sekcji, nie na koniec pliku.
- Inline'owy JavaScript jest zabroniony: żadnych `onclick=` ani `<script>` z kodem w HTML.
  Blokuje go CSP z `.htaccess` (`script-src 'self'` plus GTM i Cloudflare). Wyjątkiem są
  bloki `application/ld+json` z danymi strukturalnymi, które nie są wykonywane.
- Nagłówek (`nav.site-header`) i stopka są skopiowane w każdym pliku HTML. Zmiana w menu
  lub stopce musi zostać powtórzona we wszystkich `*.html`. W `index.html` używane są linki
  kotwicowe (`#uslugi`), a na podstronach i w `404.html` adresy bezwzględne.
- Każda podstrona ma komplet meta: `title`, `description`, `canonical`, Open Graph,
  Twitter Card oraz JSON-LD. Przy dodawaniu strony wzorzec jest kopiowany z istniejącej.
- Obrazy są wyświetlane jako `.webp`, a wersje `-full.jpg` służą jako podgląd w lightboksie.
- Linki wewnętrzne są pisane bez `.html`. Adresy z rozszerzeniem są przepisywane
  i przekierowywane przez `.htaccess`.

## Deploy

Push na gałąź `main` uruchamia GitHub Actions (`.github/workflows/deploy.yml`), gdzie
`SamKirkland/FTP-Deploy-Action` wysyła pliki przez FTPS do `/public_html/`. Build nie jest
wykonywany: na serwer trafia zawartość repozytorium jeden do jednego, poza wykluczeniami
z pola `exclude`. Dane logowania są trzymane w sekretach repozytorium (`FTP_SERVER`,
`FTP_USERNAME`, `FTP_PASSWORD`).

Kolejność przy zmianie plików produkcyjnych:

```
node tools/cache-bust.js
git commit
git push
```

## Pułapki

- Wszystko, co zostanie dodane do katalogu głównego repozytorium, wyląduje na serwerze WWW.
  Pliki robocze powinny być trzymane w `_seo/`, `tools/` lub `unused/`, ewentualnie dopisane
  do `exclude` w `deploy.yml`.
- Lista `exclude` w `deploy.yml` nadpisuje domyślną listę akcji. Przy dopisywaniu wpisów
  muszą zostać zachowane `**/.git*`, `**/.git*/**` i `**/node_modules/**`.
- CSP w `.htaccess` jest wąska. Nowy zewnętrzny skrypt, font, obraz czy iframe wymaga
  dopisania hosta do odpowiedniej dyrektywy, inaczej zostanie zablokowany przez przeglądarkę.
- Google Analytics oraz osadzone treści (mapa, YouTube) są uruchamiane dopiero po zgodzie
  z bannera cookie (`js/consent.js`, klucze `cookie-consent-analytics`
  i `cookie-consent-embeds`). Śledzenie nie może być podpinane z pominięciem tego mechanizmu.
- Przekierowania 301 w `.htaccess` obsługują stare adresy z domeny `autodiag.bielsko.pl`
  oraz poprzedniej struktury serwisu. Nie powinny być kasowane, bo przenoszą moc linków.
- W `sitemap.xml` data `lastmod` jest podnoszona tylko dla adresów, których treść faktycznie
  się zmieniła. Hurtowa aktualizacja dat obniża wiarygodność tego sygnału w Google.
- Plik `google120d8cfd6a20b59a.html` służy do weryfikacji Google Search Console i nie może
  zostać ruszony.
