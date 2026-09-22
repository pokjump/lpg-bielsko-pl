# lpg.bielsko.pl

Strona wizytówka warsztatu samochodowego **Auto Diag** w Bielsku-Białej.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
![Apache](https://img.shields.io/badge/Apache-D22128?style=flat-square&logo=apache&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

![bez frameworka](https://img.shields.io/badge/bez%20frameworka-0a0b0d?style=flat-square)
![bez bundlera](https://img.shields.io/badge/bez%20bundlera-0a0b0d?style=flat-square)
![zero zależności npm](https://img.shields.io/badge/zero%20zale%C5%BCno%C5%9Bci%20npm-0a0b0d?style=flat-square)
![strona statyczna](https://img.shields.io/badge/strona-statyczna-35d6a6?style=flat-square)
![licencja prywatna](https://img.shields.io/badge/licencja-prywatna-35d6a6?style=flat-square)

**https://lpg.bielsko.pl/**

## O projekcie

Warsztat zajmuje się montażem instalacji LPG, montażem haków holowniczych, diagnostyką
komputerową oraz elektroniką samochodową. Strona ma te usługi opisać i doprowadzić klienta
do kontaktu, dlatego numer telefonu, adres i godziny otwarcia są dostępne z każdego miejsca
serwisu.

Serwis jest napisany w czystym HTML, CSS i JavaScript, a każda podstrona jest osobnym
plikiem. Framework, bundler ani zależności zewnętrzne nie są używane. Całość jest serwowana
z hostingu Apache.

Co jest udostępnione użytkownikowi:

- opisy czterech głównych usług, każda na własnej podstronie,
- kalkulator opłacalności instalacji gazowej, liczący oszczędność i czas zwrotu,
- galeria realizacji z podglądem zdjęć w pełnym rozmiarze,
- opinie klientów z Google,
- sekcja FAQ z odpowiedziami na najczęstsze pytania,
- dane kontaktowe wraz z mapą dojazdu.

Przyjęte założenia:

- **Lekkość**: brak builda i bibliotek zewnętrznych, fonty trzymane lokalnie, zdjęcia
  serwowane w `.webp`.
- **Prywatność**: analityka oraz osadzenia (mapa, YouTube) są uruchamiane dopiero po
  zgodzie wyrażonej w bannerze cookie.
- **Bezpieczeństwo**: nagłówki i wąska polityka CSP są ustawione po stronie serwera,
  przez co inline'owy JavaScript w ogóle nie występuje.
- **SEO**: komplet znaczników meta, dane strukturalne JSON-LD, mapa witryny oraz
  przekierowania 301 ze starej domeny i poprzedniej struktury adresów.

## Podstrony

| Adres | Zawartość |
| --- | --- |
| `/` | strona główna: hero, usługi, o warsztacie, opinie, kontakt |
| `/instalacje-lpg` | montaż instalacji gazowych, autoryzacje, kalkulator oszczędności |
| `/haki-holownicze` | montaż haków, certyfikat partnera ORIS |
| `/diagnostyka-komputerowa` | diagnostyka, kasowanie błędów, programowanie |
| `/elektronika-alarmy` | alarmy, immobilisery, czujniki, instalacje elektryczne |
| `/galeria` | zdjęcia realizacji w lightboksie |
| `/faq` | najczęstsze pytania i odpowiedzi |
| `/polityka-prywatnosci` | polityka prywatności i cookies ze spisem treści |

## Paleta barw

Motyw jest ciemny. Kolory są zdefiniowane jako zmienne CSS w `:root` i tylko stamtąd
pobierane, dzięki czemu cała strona jest przestawiana w jednym miejscu.

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

Akcentem jest zielona mięta. Kolor jest zarezerwowany dla elementów, które mają prowadzić
wzrok: linków, ikon, przycisków akcji, liczników i wyróżnień w nagłówkach. Reszta strony
jest utrzymana w szarościach, więc każde użycie akcentu od razu rzuca się w oczy.

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

Kolory półprzezroczyste są pokazane jako wynik nałożenia na `--bg`, bo sama próbka nie odda
kanału alfa. W kodzie używane są wartości `rgba` z kolumny obok.

## Typografia

Użyte są trzy kroje, wszystkie osadzone lokalnie w formacie `.woff2`, bez odpytywania
zewnętrznych serwerów.

| Krój | Zmienna | Rola | Grubości |
| --- | --- | --- | --- |
| Space Grotesk | `--font-head` | nagłówki, tytuły sekcji, liczby w statystykach | 500, 600, 700 |
| Inter | `--font-sans` | tekst ciągły, leady, elementy interfejsu | 300 do 800 |
| JetBrains Mono | `--font-mono` | etykiety, nadtytuły, podpisy techniczne | 400, 500, 600 |

Zasady, które trzymają całość w ryzach:

- Nagłówki są pisane wersalikami, ze ściśniętym odstępem liter (`letter-spacing: -0.02em`),
  przez co bloki tekstu czytają się jak tabliczka warsztatowa.
- Nadtytuły sekcji są składane krojem mono, wersalikami, z rozstrzelonym odstępem
  (`0.12em`) i poprzedzone krótką kreską w kolorze akcentu.
- Tekst ciągły jest utrzymany w lekkich grubościach na wyszarzonym kolorze, a pogrubienia
  są zarezerwowane dla fragmentów, które mają zostać zapamiętane.
- Interlinia tekstu wynosi 1.5, a nagłówków od 1.0 do 1.1.

Geometria jest celowo surowa: promienie zaokrągleń to `2px` i `4px`, a treść jest
ograniczona do `80rem` szerokości, w tekstach ciągłych do `62rem`.

## Licencja

Projekt jest objęty [licencją prywatną](LICENSE). Wszelkie prawa do kodu i projektu
graficznego są zastrzeżone, a repozytorium jest udostępnione wyłącznie do wglądu.
Prawa do zdjęć, materiałów wideo, logo i nazwy Auto Diag należą do Auto Diag.
