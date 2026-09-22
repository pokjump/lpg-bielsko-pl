# lpg.bielsko.pl

Strona wizytówka warsztatu samochodowego **Auto Diag** w Bielsku-Białej.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
![Apache](https://img.shields.io/badge/Apache-D22128?style=flat-square&logo=apache&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)

![bez frameworka](https://img.shields.io/badge/bez%20frameworka-0a0b0d?style=flat-square)
![bez bundlera](https://img.shields.io/badge/bez%20bundlera-0a0b0d?style=flat-square)
![zero zależności npm](https://img.shields.io/badge/zero%20zale%C5%BCno%C5%9Bci%20npm-0a0b0d?style=flat-square)
![deploy przez FTPS](https://img.shields.io/badge/deploy-FTPS-35d6a6?style=flat-square)
![strona statyczna](https://img.shields.io/badge/strona-statyczna-35d6a6?style=flat-square)

## O projekcie

Warsztat zajmuje się montażem instalacji LPG, montażem haków holowniczych, diagnostyką
komputerową oraz elektroniką samochodową, a strona ma te usługi opisać i doprowadzić
klienta do kontaktu. Poza opisem usług udostępnione są: kalkulator opłacalności instalacji
gazowej, galeria realizacji, opinie z Google, sekcja FAQ oraz dane kontaktowe z mapą.

Serwis jest napisany w czystym HTML, CSS i JavaScript. Framework, bundler ani zależności
npm nie są używane, a każda podstrona jest osobnym plikiem `.html`. Całość jest serwowana
z hostingu Apache pod adresem https://lpg.bielsko.pl/ i wdrażana automatycznie przez FTP
po pushu na `main`.

Przyjęte założenia:

- **Lekkość**: brak builda i bibliotek zewnętrznych, fonty trzymane lokalnie, obrazy w `.webp`.
- **Prywatność**: Google Analytics, Cloudflare Web Analytics oraz osadzenia (mapa, YouTube)
  są uruchamiane dopiero po zgodzie użytkownika.
- **Bezpieczeństwo**: nagłówki i wąska polityka CSP są ustawione w `.htaccess`, przez co
  inline'owy JavaScript jest w projekcie zabroniony.
- **SEO**: komplet meta, dane strukturalne JSON-LD, `sitemap.xml`, `robots.txt` oraz
  przekierowania 301 ze starej domeny i poprzedniej struktury adresów.

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

| Kolor | Zmienna | Wartość | Zastosowanie |
| :---: | --- | --- | --- |
| ![#0a0b0d](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-0a0b0d?style=flat-square) | `--bg` | `#0a0b0d` | tło dokumentu |
| ![#0e1013](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-0e1013?style=flat-square) | `--bg-raised` | `#0e1013` | sekcje wyniesione ponad tło |
| ![#141619](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-141619?style=flat-square) | `--surface` | `#141619` | karty i panele |
| ![#1b1e22](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-1b1e22?style=flat-square) | `--surface-high` | `#1b1e22` | element aktywny lub najechany |
| ![#24272c](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-24272c?style=flat-square) | `--surface-highest` | `#24272c` | najwyższa warstwa, np. pola formularzy |
| ![#000000](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-000000?style=flat-square) | `--surface-lowest` | `#000000` | czerń, m.in. tło lightboksa |

### Treść

| Kolor | Zmienna | Wartość | Zastosowanie |
| :---: | --- | --- | --- |
| ![#eceef0](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-eceef0?style=flat-square) | `--fg` | `#eceef0` | tekst podstawowy |
| ![#9aa0a7](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-9aa0a7?style=flat-square) | `--fg-muted` | `#9aa0a7` | tekst pomocniczy, leady |
| ![#666b71](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-666b71?style=flat-square) | `--fg-faint` | `#666b71` | tekst najmniej istotny, podpisy |

### Akcent

| Kolor | Zmienna | Wartość | Zastosowanie |
| :---: | --- | --- | --- |
| ![#35d6a6](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-35d6a6?style=flat-square) | `--accent` | `#35d6a6` | kolor marki, linki, ikony, CTA |
| ![#4ff0bc](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-4ff0bc?style=flat-square) | `--accent-strong` | `#4ff0bc` | stan hover akcentu |
| ![#0f231f](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-0f231f?style=flat-square) | `--accent-dim` | `rgba(53, 214, 166, 0.12)` | delikatne tło akcentowane |
| ![#184c3e](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-184c3e?style=flat-square) | `--accent-border` | `rgba(53, 214, 166, 0.32)` | obramowania akcentowane |
| ![#032019](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-032019?style=flat-square) | `--on-accent` | `#032019` | tekst na tle akcentu |

### Obramowania

| Kolor | Zmienna | Wartość | Zastosowanie |
| :---: | --- | --- | --- |
| ![#202123](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-202123?style=flat-square) | `--border` | `rgba(255, 255, 255, 0.09)` | domyślna linia |
| ![#2c2d2f](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-2c2d2f?style=flat-square) | `--border-hairline` | `rgba(255, 255, 255, 0.14)` | cienka linia rozdzielająca |
| ![#3b3c3d](https://img.shields.io/badge/%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-3b3c3d?style=flat-square) | `--border-strong` | `rgba(255, 255, 255, 0.20)` | obramowanie wyróżnione |

Kolory półprzezroczyste są pokazane jako wynik nałożenia na `--bg`, bo sama próbka nie
odda kanału alfa. W kodzie używane są wartości `rgba` z kolumny obok.

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
