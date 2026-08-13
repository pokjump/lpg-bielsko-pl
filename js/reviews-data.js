const reviewsData = [
  {
    "author": "Damian Czech",
    "rating": 5,
    "text": "Polecam firmę. Montowałem w Auto Diag czujniki parkowania i zabezpieczenie antykradzieżowe w jednym aucie, po latach rejestrator jazdy oraz odpinany hak w drugim samochodzie. Dziś podjechałem z drobną usterką odpinanego haka, której przyczyna została ustalona w moment i usunięta na tak zwanym \"poczekaniu\". Miła, kulturalna obsługa, fachowcy wiedzą co robią i znają się na robocie."
  },
  {
    "author": "Mateusz Dąbrowski",
    "rating": 5,
    "text": "Szef zna się na robocie. Potrafi zdiagnozować perfekcyjnie usterkę nie dotyczaca instalacji LPG. Dziękuję. Polecam"
  },
  {
    "author": "Andrzej Dziedzic",
    "rating": 5,
    "text": ""
  },
  {
    "author": "AutoSpot Łukasz Krawiec",
    "rating": 5,
    "text": "Bardzo pomocni i życzliwi\n⭐️⭐️⭐️⭐️⭐️"
  },
  {
    "author": "Wiktor Adamczyk",
    "rating": 5,
    "text": "Szybko, schludnie zamontowana butla w bagażniku. Regulacja 1.8 is wyszła bardzo fajnie. Polecam"
  },
  {
    "author": "Mikołaj Targosz",
    "rating": 5,
    "text": "Montowana instalacja gazowa STAG w Fordzie Mustangu , fachowe podejście do klienta, wykonane zgodne ze sztuką . Cena bardzo konkurencyjna. Realizacja w terminie.\nPolecam"
  },
  {
    "author": "krzysiek krzyziek",
    "rating": 5,
    "text": "Miła konkretna obsługa.\nZakładałem u Panow juz trzecią instalacje i eksploatacja bez problemów.\nPolecam!!"
  },
  {
    "author": "Daniel",
    "rating": 5,
    "text": "Polecam, korzystałem z usług i wszystko elegancko"
  },
  {
    "author": "W G",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Barbara W.",
    "rating": 5,
    "text": "Polecam ten serwis. Panowie znają się na swojej pracy, doradzą.\nObsługa miła i przede wszystkim kompetentna."
  },
  {
    "author": "It's Kriss",
    "rating": 5,
    "text": "Polecam tą firme . Diagnostyka elektr.perfect."
  },
  {
    "author": "Tomasz Pietraszko",
    "rating": 5,
    "text": "Panowie mechanicy znają się na regulacji\nPolecam."
  },
  {
    "author": "Maciek M",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wojciech Honkisz",
    "rating": 5,
    "text": "Montaż haka w aucie z grupy VAG z pełną adaptacją oryginalnego sterownika, wszystko tak jak należy i w rozsądnej cenie\nPolecam"
  },
  {
    "author": "Vito",
    "rating": 5,
    "text": "Super obsługa, z właścicielem można dogadać każdy szczegół. Bardzo elastyczne podejście do klienta. Polecam."
  },
  {
    "author": "Serhii Neroda",
    "rating": 5,
    "text": "Dobrzy specjaliści HBO"
  },
  {
    "author": "Grzegorz Olma",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Szymon Kowalski",
    "rating": 5,
    "text": "Pomimo kilkukrotnej kalibracji gazu ze względu na zmiany w samochodzie, wszystko zawsze na czas i dobrze zrobione!"
  },
  {
    "author": "Piotr Wieciek",
    "rating": 5,
    "text": "Już od jej założenia świetna firma"
  },
  {
    "author": "Gwynbleidd",
    "rating": 5,
    "text": "Zrobiłem tam instalacje gazowa do 3 aut (e46, ceed, cruze), robię przegląd instalacji itp tylko u nich od prawie 10 lat, jeszcze nigdy nie miałem awarii. Kolejne auto też tam zrobię, jest git"
  },
  {
    "author": "Joanna M.",
    "rating": 5,
    "text": "Fachowa i kulturalna obsługa\nKilka aut, trafna diagnostyka za każdym razem\nBardzo dziękuję\nPolecam"
  },
  {
    "author": "Patryk Krupa",
    "rating": 5,
    "text": "Super fachowcy godni polecenia, instalacja wykonana wzorcowo. V6 w gazie Stag, polecam firma rzetalna, pełen profesjonalizm"
  },
  {
    "author": "Ryszard RACZEK",
    "rating": 5,
    "text": "Jak co roczny przegląd ins.gazowej p.Wojtek podszedł profesjonanie + skasowane błędy. POLECAM . Właściciel SKODY"
  },
  {
    "author": "Tetiana Rostalnaya",
    "rating": 5,
    "text": "Profesjonalna i szybka obsługa.  Świetny zespół profesjonalistów. Polecam."
  },
  {
    "author": "AL. GA",
    "rating": 5,
    "text": "Doskonali fachowcy. Sprawnie i szybko a przy tym nie drogo załatwią każdy temat."
  },
  {
    "author": "Jerzy Gibas",
    "rating": 5,
    "text": "Fachowa i szybka obsługa, a także doradztwo i sympatyczna atmosfera"
  },
  {
    "author": "Maciek „Kiwi” Hejnowicz",
    "rating": 5,
    "text": "Super firma, konkretni za biurkiem i w warsztacie. Zostaję u nich na zawsze."
  },
  {
    "author": "janusz tomala",
    "rating": 5,
    "text": "Profesjonalne podejście do klienta.  Polecam"
  },
  {
    "author": "Tomasz",
    "rating": 5,
    "text": "Super fachowa obsługa. Pełen profesjonalizm."
  },
  {
    "author": "Dawid Lapczyk",
    "rating": 5,
    "text": "Super obsluga. Wszystko z czym mialem problemy zawsze bylo naprawiane."
  },
  {
    "author": "Ангелина Кожемякина",
    "rating": 5,
    "text": "Super, polecam 🔥🔥🔥, jestem bardzo zadowolona 💃…"
  },
  {
    "author": "Janusz",
    "rating": 5,
    "text": "Szybka diagnoza i naprawa, kulturalnie i rzeczowo."
  },
  {
    "author": "Łukasz Kupczak",
    "rating": 5,
    "text": "Pełny profesjonalizmu.  Polecam."
  },
  {
    "author": "Mariusz Szymla",
    "rating": 5,
    "text": "Profesjonalizm pełny od A do Z. Bardzo polecam."
  },
  {
    "author": "Dariusz Kolarczyk",
    "rating": 5,
    "text": "Jak zawsze pełny profesjonalizm"
  },
  {
    "author": "Jarosław Bukowski",
    "rating": 5,
    "text": "Profesjonaliści"
  },
  {
    "author": "Grzegorz Królewski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Ryszard Ploskonka",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Ignacy Byrdziak",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Eugeniusz Galazka",
    "rating": 5,
    "text": ""
  },
  {
    "author": "4Pickup",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Lunch Fast",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Александр Егоров",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Grzegorz Cholewka",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Przemysław Ziółkowski",
    "rating": 5,
    "text": "Korzystałem z usług z polecenia i nie żałuję. Montaż wideorejestratora przód i tył  zamontowany perfekcyjnie! Na duży + zauważyłem dołożoną zaślepkę gdzie mogła woda się w dostawać jestem megaa zadowolony. Wszystko schludnie zrobione no nie ma do czego się doczepić. Pozdrawiam :)"
  },
  {
    "author": "Szymon Leśniak",
    "rating": 5,
    "text": "Miła obsługa, goście bardzo konkretni, znający się na swojej robocie i słowni. W ogóle jako jedyni w okolicy ogarnęli fabryczną instalacje LPG i to za normalne pieniądze a nie jak Ci naciągacze z ASO. Duży plus za całokształt, polecam👌…"
  },
  {
    "author": "katarzyna slezak",
    "rating": 5,
    "text": "Bardzo fachowa pomoc. Autko naprawione szybko, sprawnie. Diagnoza w punkt. Chodzi jak żyleta. I przede wszystkim w rozsądnej cenie. Szczerze polecam❤️"
  },
  {
    "author": "Wojciech Fabia",
    "rating": 5,
    "text": "Super fachowcy od instalacji gazowych i nie tylko, od pierwszej wizyty widać że się znają na robocie i robią to co lubią  ...  Bardzo dobrze."
  },
  {
    "author": "Justyna Poluszejko",
    "rating": 5,
    "text": "Pełny profesjonalizm. Odbiór auta w wyznaczonych, wcześniej umówionych godzinach. Polecam właścicielom aut na gaz ☘️"
  },
  {
    "author": "Dariusz",
    "rating": 5,
    "text": "Jak zawsze fachowa obsługa. Najlepszy serwis instalacji gazowych w Bielsku. Polecam"
  },
  {
    "author": "Anna Januszewska",
    "rating": 5,
    "text": "Można polecić znają się na robocie fachowcy pierwsza klasa"
  },
  {
    "author": "Kreymor",
    "rating": 5,
    "text": "wymiana przewodu oraz diagnostyka lpg sprawnie i w terminie"
  },
  {
    "author": "Andrzej Kowalski",
    "rating": 5,
    "text": "Doskonała firma jestem zadowolony z usług"
  },
  {
    "author": "Beata Kapias",
    "rating": 5,
    "text": "Bardzo rzetelni fachowcy"
  },
  {
    "author": "Marek P",
    "rating": 5,
    "text": "Bardzo dobrzy fachowcy"
  },
  {
    "author": "Roman Didyk",
    "rating": 5,
    "text": "Polecam, w szczególności elektronika Wojtka. Profesjonalista"
  },
  {
    "author": "Flying Team Szkoła Paralotniowa - Serwis",
    "rating": 5,
    "text": "Perfect obsługa. Polecam"
  },
  {
    "author": "Jaroslaw Gajda",
    "rating": 5,
    "text": "Polecam."
  },
  {
    "author": "S Pal",
    "rating": 5,
    "text": "Profesjonalne"
  },
  {
    "author": "Mariusz Bogdanski",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "Kamil Kamil",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Darek Markowski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "redrex84",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Adrian",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Sedat Keskin",
    "rating": 5,
    "text": ""
  },
  {
    "author": "mariusz sablik",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Lukasz W",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Kasia Mydlarz",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Tomasz Kubica",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Tomasz Naglik",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Mirosław Szurdyga",
    "rating": 5,
    "text": ""
  },
  {
    "author": "KK KK",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Sebastian Białek",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Grzegorz fx",
    "rating": 5,
    "text": ""
  },
  {
    "author": "And Q",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Norbert Markiel",
    "rating": 5,
    "text": "Przyjechałem samochodem z problemem gasnącego auta i dławiącym zimnym silnikiem, wyjezdzałem lawetą, z wyrwanym lewarkiem. Widocznie ktos miał za dużo siły podczas zmieniania biegu, no cóz, jak sie okazuje w praktyce moja wina, mój koszt. W sensie usługa wyrwania lewarka okazała się bezpłatna, ale sama naprawa musi być dokonana w innym serwisie gdzie zajmują się mechaniką samochodową.\nI zeby być szczerym - zmiana biegu z  wstecznego na bieg pierwszy wymagała pewnego wyczucia, wiec cóż, nie moge oczekiwać cudów.\n\nAuto oddane w środe, otrzymałem informacje ze mam uszkodzona skrzynię biegów, osoba kontaktowa obiecała ze będzie dzwonić. Zadzwoniłem w piątek, osoba kontaktowa mówiła ze w poniedziałek o 10 da mi znać co i jak. W poniedziałek nie otrzymałem telefonu, zadzwoniłem o 11:30 i umówiłem się na odbiór samochodu.\n\nNie mniej jednak do samego serwisu elektroniki samochodowej  trafiłem z polecenia, i wiem ze naprawili skomplikowany problem, tak więc osoby zadowolone raczej nie kłamią."
  },
  {
    "author": "Kris Sam",
    "rating": 5,
    "text": "To jest serwis godny polecenia. Kiedy zakładałem tam instalacje gazowa obsługa była miła, dokładna i szybka, instalacja założona estetycznie w samochodzie pozostawiony porządek a z tym u wielu różnie bywa.\nCena za instalacje była przystępna.\nPo 2 latach od założenia instalacji byłem tam innym autem na przeglądzie i nic się nie zmieniło. Servis ten z tych \"top\".\nWarsztat ma nowa lokalizację a często pojawia się stary adres na komorowockiej więc to mogli by zmienić. 😁"
  },
  {
    "author": "Dariusz Pietras",
    "rating": 5,
    "text": "Najlepsza firma, najlepsi fachowcy od elektroniki samochodowej i instalacji gazowych. Bynajmniej o lepszych szpecach nie słyszałem. Nie słyszałem też nigdy u nich, że czegoś się nie da zdiagnozować. Mają tam swoje sposoby i rozwiązanie zawsze jakieś się znajdzie.  Do tego mili i życzliwi."
  },
  {
    "author": "lankhnet lankhnet",
    "rating": 5,
    "text": "Panowie znają się na gazie lepiej niż PGNiG. Instalacja działa bez problemu a nawet jak coś się pojawi to usterkę usuwają a nie zamiatają pod dywan mówiąc, że tak ma być. Nie jest to moja pierwsza instalacja w samochodzie i muszę przyznać, że do tej pory najlepsza jaką miałem. Pozdrawiam całą ekipę Auto Diag i do zobaczenia na przeglądzie.🙂"
  },
  {
    "author": "Mirek K",
    "rating": 5,
    "text": "POLECAM Auto Diag znakomici fachowcy pełny profesjonalizm. U mnie montowali hak i adapter kamerki. Wszystko zrobione szybko, starannie i na najwyższym poziomie!!!"
  },
  {
    "author": "Iwona Gibas",
    "rating": 5,
    "text": "Najlepszy serwis gazu w okolicy, kolejne auto oddane w ręce \"Autodiagu\" i poraz kolejny się nie zawiodłam, bez problemu oraz szybko potrafią naprawić usterkę po \"innym serwisie\" serdecznie polecam"
  },
  {
    "author": "Artur Warcholiński",
    "rating": 5,
    "text": "Momtowałem już kilka instalacji lpg w tej firmie i zawszę byłem bardzo zadowolony , usługi na najwyższym poziomie. Polecam serdecznie :)"
  },
  {
    "author": "Mateusz Murawski",
    "rating": 5,
    "text": "Bardzo konkurencyjne ceny, szybki i w pełni profesjonalny montaż instalacji LPG. Serwis godny polecenia."
  },
  {
    "author": "Jar Zol",
    "rating": 5,
    "text": "Gaz założony perfekcyjnie. Szybka realizacja. Dobra cena. Miła obsługa. Serdecznie dziekuje i polecam."
  },
  {
    "author": "Józef Dmitrowski",
    "rating": 5,
    "text": "Zawsze konkretnie i na czas.\n3 instalacje gazowe zakładane u nich i z kolejną na pewno też do nich trafię."
  },
  {
    "author": "Jarek Nalewajek",
    "rating": 5,
    "text": "Szybko fachowo i w dobrej cenie instalacją gazowa\nPolecam"
  },
  {
    "author": "Mariusz Kacprzak",
    "rating": 5,
    "text": "Najlepszy warsztat od lat, już od 10 lat jeżdżę i niejedną instalacje zakładałem."
  },
  {
    "author": "Ims Ims",
    "rating": 5,
    "text": "Jak zawsze szybko i profesjonalnie kolejny przegląd po kolejnym bezawaryjnym roku - Ireneusz Marszałek"
  },
  {
    "author": "Marcin",
    "rating": 5,
    "text": "Bardzo dobra obsługa i wszystko zrobione jak trzeba 💪💪💪…"
  },
  {
    "author": "Grzegorz N",
    "rating": 5,
    "text": "Najlepsi fachowcy od elektroniki i nie tylko. Rozsądne ceny."
  },
  {
    "author": "Agnieszka Straż",
    "rating": 5,
    "text": "Bardzo polecam Auto Diag  . Szybko, profesjonalnie i miło :)"
  },
  {
    "author": "Kazimierz Wichura",
    "rating": 5,
    "text": "Prawdziwi fachowcy, nie naciągacze. Polecam"
  },
  {
    "author": "Jacek Drabek",
    "rating": 5,
    "text": "Problem z gazem rozwiązany szybko, skutecznie i tanio. Polecam"
  },
  {
    "author": "Marcin Kołodziejczyk",
    "rating": 5,
    "text": "Polecam z całego serca pełna profeska"
  },
  {
    "author": "Joanna K",
    "rating": 5,
    "text": "Wymiana zbiornika LPG ,szybko ,sprawnie i fachowo,polecam."
  },
  {
    "author": "Ewa Jasek",
    "rating": 5,
    "text": "Awaria szybko usunięta, wszystko działa. Polecam."
  },
  {
    "author": "Rafał Szopa",
    "rating": 5,
    "text": "Jak zawsze fachowo i miło"
  },
  {
    "author": "RYŚ",
    "rating": 5,
    "text": "Profesjonalna obsługa polecam"
  },
  {
    "author": "adasbb",
    "rating": 5,
    "text": "Jest oki :) polecam warsztat"
  },
  {
    "author": "Regina Batelt",
    "rating": 5,
    "text": "Fachowa szybka obsługa"
  },
  {
    "author": "Rafał Pagacz",
    "rating": 5,
    "text": "Wiedzą co robią. Polecam !!!"
  },
  {
    "author": "Kamil Glenc",
    "rating": 5,
    "text": "Wsyztsko super polecam"
  },
  {
    "author": "Beata Góra",
    "rating": 5,
    "text": "Super obsługa"
  },
  {
    "author": "Andrzej Andrukianiec",
    "rating": 5,
    "text": "Solidna firma !"
  },
  {
    "author": "Oleg Shtaiher",
    "rating": 5,
    "text": "FACHOWĄ OBSŁUGĘ I POMOC."
  },
  {
    "author": "Magda Duda",
    "rating": 5,
    "text": "Fachowcy"
  },
  {
    "author": "Piotr Pokorny",
    "rating": 5,
    "text": "Rzetelna firma"
  },
  {
    "author": "Beata Kubiszyn",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "Упоротой Турыст",
    "rating": 5,
    "text": "Szybko i sprawnie rozwiązują problemy. Polecam."
  },
  {
    "author": "Paweł Knieszner",
    "rating": 5,
    "text": "Profesor!"
  },
  {
    "author": "Sebastian Musick",
    "rating": 5,
    "text": ""
  },
  {
    "author": "andrzej kokora",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wojtek Wojtek",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marek Cembala",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Андрей Стасюк",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Michał Moc",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Paweł Hodana",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Piotr Powrosławski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "leny8205",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Karol Krutak",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Dariusz Zieleźnik",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Błażej Sawiński",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marcin Kolarzyk",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wojciech Kijanka",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marek Rytlewski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Piotr Szarek",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Krzysztof S.",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Volodymyr Sikachevskyy",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wowekk",
    "rating": 5,
    "text": "Najlepszy gazownik w Bielsku i okolicach. 340 konne Q50 śmiga na Landi Renzo od roku aż miło,polecam."
  },
  {
    "author": "Michał Migdałek",
    "rating": 5,
    "text": "Zdecydowanie mogę polecić ten warsztat.\n\nPełen profesjonalizm, wszystko zrobione na czas. Podejście do klienta wzorowe.\n\nNie dziwne, że jest tam tak duży ruch i trzeba troszkę poczekać na planowaną usługę.\nAle jak dla mnie - było warto."
  },
  {
    "author": "Ania Kiser",
    "rating": 5,
    "text": "Jako stała klientka, wracam z każdym problemem z instalacją gazową, nigdy się nie zawiodłam. Zawsze jestem zadowolona z usług, głównie jest to przegląd instalacji. Oprócz wykrycia nieprawidłowości związanych z LPG, panowie idealnie diagnozują inne problemy z pojazdem również. Serdecznie polecam! Sympatyczna i profesjonalna obsługa, jedyny minus to dość odległe terminy."
  },
  {
    "author": "Kat Bat",
    "rating": 5,
    "text": "Najlepsi fachowcy na Śląsku. Pan Wojtek i Krzysztof od lat serwisują moje samochody. Bardzo grzeczna i miła obsługa. Samochód po naprawie w innym warsztacie, nie chciał jechać na benzynie. Dławił się, szarpało autem. Panowie znaleźli usterkę i naprawili. Teraz samochód jeździ jak nowy. Czekałam na termin ale jestem bardzo zadowolona. Uslugi wykonane za uczciwą stawkę. Jest to mój trzeci samochód w którym Panowie montowali instalację LPG. Z czystym sumieniem wszystkim polecam."
  },
  {
    "author": "Franek Mikus",
    "rating": 5,
    "text": "Polecam ten warsztat i oczywiście usługi jakie świadczą. Prywatnie zakładałem tam gaz a teraz tylko okresowe przeglądy. Samochód zrobił na instalacji 40tys bez najmniejszego problemu. Dodatkowym plusem jak dla mnie jest to że zazwyczaj każą zostawić samochód albo czekać 2 godziny a dzisiaj pykło sprawnie i po 40min samochód gotowy do jazdy👍"
  },
  {
    "author": "Jacek",
    "rating": 5,
    "text": "W Auto Diag. Zakładano mi instalacje gazowe do dwóch aut. A dwa inne były tam serwisowane. W żadnym z nich nie było problemów. Jeśli była potrzeba regulacji, przeglądu czy wymiany filtrów to wiadomo, trzeba było się umówić bo pracy mają dużo. Obecnie jeżdżę szusty rok na instalacji gazowej zamontowanej do Renault grand scenic 2 2.0. Na gazie zrobiłem 140 tysięcy i jedyna rzecz do po pięciu latach do wymiany była listwa wtryskowa i auto śmiga dalej. Cenowo jest również Ok. Sama obsługa jest również na wysokim poziomie a to się ceni . Polecam bo robią naprawdę dobrą robotę."
  },
  {
    "author": "Pawel H",
    "rating": 5,
    "text": "Zakupiłem używane auto z instalacją gazową robioną w AutoDiagu. Zbiegło się w to w czasie z corocznym przeglądem instalacji gazowej. Były problemy z gaśnięciem auta na wolnych obrotach i przy ruszaniu. Przy pierwszym podejściu mimo regulacji - problem nie zniknął. Na szczęście przy drugim podejściu usterka została skorygowana ZA DARMO w ramach pierwszej wizyty. Czeka się na wizytę więcej niż tydzień, ale warto. Polecam."
  },
  {
    "author": "Dariusz Rokowski",
    "rating": 5,
    "text": "Lokalizacja się zmieniła na dużo lepszą. Warsztat się prezentuje bardzo okazałe, dużo więcej miejsca na parkingu no i ci sami fachowcy w szeregach załogi. Z czystym sumieniem mogę polecić to miejsce, zawsze oddaje w ciemno tam auto jak pojawiają się jakieś problemy z elektryka czy elektronika. Wszystko jest naprawiane szybko i sprawnie, oraz co najważniejsze tanio."
  },
  {
    "author": "Mariusz Mirowski",
    "rating": 5,
    "text": "Profesjonalizm na najwyższym poziomie  ,słowność i rzetelność. Serwis godny polecenia. Ja jestem klientem od samego początku istnienia i nigdy się nie zawiodłem. Bardzo Polecam"
  },
  {
    "author": "Marcin Trzeciak",
    "rating": 5,
    "text": "Jak LPG to tylko Auto Diag. Zakładałem tam instalację LPG do mojego samochodu. Jeździ bez awarii od 2016 roku. Serwisuję tam swoje samochody z instalacją LPG. Obsługa rewelacyjna, znają się na tym co robią. Pełen profesjonalizm, posiadają samochód zastępczy do dyspozycji klienta. POLECAM"
  },
  {
    "author": "Jakub Włodek",
    "rating": 5,
    "text": "Byłem u czterech różnych mechaników , nikt sobie nie poradził z moim problemem , Tu chłopaki poradzili sobie na 5 + polecam jak najbardzej 🙂…"
  },
  {
    "author": "Marek Kalicki",
    "rating": 5,
    "text": "Fachowcy, nie drogo a dobrze. Mazda 6 2002 5 lat jeżdżone na gazie i żadnych problemów."
  },
  {
    "author": "Asia eM",
    "rating": 5,
    "text": "Polecono mi tego gazownika i ja również polecam ! Wszystko zrobione terminowo, konkretnie i niedrogo. Bardzo dziękuję i będę wracać 👍🏻…"
  },
  {
    "author": "Florian M",
    "rating": 5,
    "text": "Super ekipa. Jestem z nimi \" na gazie\" już 9 lat. Nie narzekam. Gorąco polecam"
  },
  {
    "author": "Andrzej Oliwa",
    "rating": 5,
    "text": "Obsługa klienta i wykonanie pracy na najwyższym poziomie. Polecam 👍…"
  },
  {
    "author": "Mateusz Janda",
    "rating": 5,
    "text": "Pełen profesjonalizm i usługi na najwyższym poziomie! Polecam!"
  },
  {
    "author": "Mirek K",
    "rating": 5,
    "text": "Jestem bardzo zadowolony z usług tego warsztatu. Polecam"
  },
  {
    "author": "Bartłomiej Wodecki",
    "rating": 5,
    "text": "Miła, szybka i profesjonalna obsługa! Polecam! :)"
  },
  {
    "author": "Zbigniew Pietraszko",
    "rating": 5,
    "text": "Grzeczna i fachową obsługą.Polecam.Serwid super."
  },
  {
    "author": "Wojciech Skrzypek",
    "rating": 5,
    "text": "Zawsze profesjonalna obsługa. Pozdrawiam"
  },
  {
    "author": "Jakub Rudolf",
    "rating": 5,
    "text": "Profesjonalna obsługa, wiedzą co robią."
  },
  {
    "author": "Majkel 1968",
    "rating": 5,
    "text": "Super. Pelna profeska. Polecam w 100%."
  },
  {
    "author": "Marcin Puda",
    "rating": 5,
    "text": "Elegancko, sprawnie, profesjonalnie. Polecam"
  },
  {
    "author": "Paweł M.",
    "rating": 5,
    "text": "Super fachowcy.  Polecam"
  },
  {
    "author": "Alina Duda",
    "rating": 5,
    "text": "Profesjonalizm i zaangażowanie. Polecam"
  },
  {
    "author": "Bogumił Matonóg",
    "rating": 5,
    "text": "Wymieniałem zbiornik LPG."
  },
  {
    "author": "Dar Pod",
    "rating": 5,
    "text": "Szybko dobrze skutecznie"
  },
  {
    "author": "Krzysztof Stec",
    "rating": 5,
    "text": "Miła obsługa."
  },
  {
    "author": "Ozajst Event Dj",
    "rating": 5,
    "text": "Najlepsi"
  },
  {
    "author": "luki kałuża",
    "rating": 5,
    "text": "Super obsługa"
  },
  {
    "author": "Adam",
    "rating": 5,
    "text": "Polecam."
  },
  {
    "author": "Grzegorz Przybyła",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "Mateusz Kos",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Adam Rzadek",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Andrzej Kamiński",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Kamil Komendera",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Kamil Polok (Hondziarz69)",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Klaudiusz Fuchs",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marcin Sadlik",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Malgorzata Pytlarz",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Kacper Drewniak",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Mark Production 3",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Dariusz Wandzel",
    "rating": 5,
    "text": ""
  },
  {
    "author": "P S",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Michał Barcikowski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Artur Dudek",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Mateusz",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wojtek Targosz",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Adrian Wiera",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Dariusz Honkisz",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Mirosław Tamul",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wojtek",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marko Polo",
    "rating": 5,
    "text": ""
  },
  {
    "author": "MirekGZ Kabanos",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Tomasz Pajestka",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Paweł",
    "rating": 5,
    "text": "Pragnę zaznaczyć, że bardzo rzadko dzieje się tak, że zamieszczam opinie, lecz jeśli chodzi o instalacje LPG, panowie ogarniają ją w małym palcu, to czego jeden warsztat nie potrafił zrobić przez ponad 2 tygodnie jeżdżenia, kalibrowania, podmieniania, panowie z AutoDiagu ogarnęli to dosłownie w jeden dzień - BARDZO POLECAM!"
  },
  {
    "author": "Grzegorz Zgondek",
    "rating": 5,
    "text": "Od kilku lat korzystam z instalacji założonej w tej firmie. Odwiedzam Auto Diag z przyjemnością tylko z okazji okresowych przeglądów. Dodatkowo w nowej lokalizacji duży parking i miejsce dla klientów. Zdecydowanie polecam."
  },
  {
    "author": "Marek Lewandowski",
    "rating": 5,
    "text": "Profesjonalny serwis. Rok temu wymiana wtrysków gazu, tym razem zbiornik. W obydwu usługach bez zarzutu w umówionym dniu w cenie konkurencyjnej - weryfikowałem. Świetna robota."
  },
  {
    "author": "Magdalena Dybał",
    "rating": 5,
    "text": "Od lat miejsce, w którym montują mi w kolejnych autach instalacje gazowe.\nBezawaryjnie, serwis (przeglądy) szybko, bezproblemowo.\nZ kolejnym autem dziś montaż, oczywiście u nich"
  },
  {
    "author": "Adrian S",
    "rating": 5,
    "text": "Wszystkie zgłoszone usterki naprawione, nawet taka prozaiczna sprawa jak śruby mocujące wlew gazu wymienione na nowe - po takich szczegółach widać, że mamy doczynienia z fachowcami. Dziękuję za porządną robotę"
  },
  {
    "author": "Krystian Kretschmer",
    "rating": 5,
    "text": "Obsługa na dobrym poziomie, usługi wykonują zgodnie ze sztuką, ekipa b. Kontaktowa, szczerze polecam:)"
  },
  {
    "author": "Sławomir Szęszoł",
    "rating": 5,
    "text": "Pierwszy raz tam byłem. Z polecenia. Szybko. Przyjaźnie. Efekty przyjdzie ocenić po jakimś czasie 😀…"
  },
  {
    "author": "Marcin Tomala",
    "rating": 5,
    "text": "Kompleksowa obsługa instalacji gazowej i elektrycznej. Gorąco polecam i uprzedzam: czas oczekiwania ponad tydzień ale warto."
  },
  {
    "author": "P K",
    "rating": 5,
    "text": "Gorąco polecam. LPG w 3 kolejnych autach, w każdym bezawaryjnie. Najwyższa jakość wykonania i obsługa klienta."
  },
  {
    "author": "Bogdan Hankus",
    "rating": 5,
    "text": "Pełna profesjonalka, wiedzą co robić, czasem trzeba poczekać, ale to świadczy o dobrej opinii."
  },
  {
    "author": "Seweryn Tomalczyk",
    "rating": 5,
    "text": "Świetne miejsce. Wszystko zrobione tak jak należy. Polecam w stu procentach"
  },
  {
    "author": "Instalvel",
    "rating": 5,
    "text": "Najlepszy serwis - ZAWSZE pomogą. Polecam serdecznie!"
  },
  {
    "author": "Marcin T",
    "rating": 5,
    "text": "Bardzo dobrzy fachowcy w szczególności pan Krzysztof"
  },
  {
    "author": "Slawomir Przybyl",
    "rating": 5,
    "text": "Najwyższej klasy fachowcy od instalacji LPG oraz innych problemów elektroniki samochodowej"
  },
  {
    "author": "Bogumił Roehrich",
    "rating": 5,
    "text": "z czystym sumieniem polecić mogę AutoDiag. rzetelna firma"
  },
  {
    "author": "Tomasz Kopczyński",
    "rating": 5,
    "text": "Jeden z najlepszych punktów w BB obsługi auto mechaniki, elektromechaniki i gazu."
  },
  {
    "author": "Andrzej Pędziwiatr",
    "rating": 5,
    "text": "Najlepszy serwis w bb, szczerze polecam 🙂…"
  },
  {
    "author": "Arkadiusz Kamiński",
    "rating": 5,
    "text": "Polecam  wszystkim  fachowa i miła obsługa"
  },
  {
    "author": "Mariusz mario",
    "rating": 5,
    "text": "Fachowo,szybko bez żadnego ciśnienia.\nPolecam."
  },
  {
    "author": "Adrian Niedziela",
    "rating": 5,
    "text": "Bardzo miła i fachowa obsługa. Bardzo polecam."
  },
  {
    "author": "Krzysiek Sikorski",
    "rating": 5,
    "text": "Fajnie że trafiłem na fachowca. SUPER robota"
  },
  {
    "author": "Bartłomiej Bertoldi",
    "rating": 5,
    "text": "Wszystko w pożądku. Wysoka jakość usługi"
  },
  {
    "author": "piotr domiter",
    "rating": 5,
    "text": "Bardzo dobrzy fachowcy i grzeczni"
  },
  {
    "author": "Piotr Cecerski",
    "rating": 5,
    "text": "Fachowcy i w dodatku mili ;)"
  },
  {
    "author": "Mihalka",
    "rating": 5,
    "text": "Najlepszy serwis od gazu w aucie"
  },
  {
    "author": "krzysiek herma",
    "rating": 5,
    "text": "Bardzo fachowa obsluga"
  },
  {
    "author": "Jurek Jurkiewicz",
    "rating": 5,
    "text": "Bardzo porządny warsztat."
  },
  {
    "author": "Artur Osiński",
    "rating": 5,
    "text": "Szybko, tanio i bezproblemowo. Polecam"
  },
  {
    "author": "Arek Man",
    "rating": 5,
    "text": "Wszystko ok. Polecam."
  },
  {
    "author": "Małgorzata W",
    "rating": 5,
    "text": "Super! Będziemy wracać."
  },
  {
    "author": "Mateusz Szczygielski",
    "rating": 5,
    "text": "Bez naciągania, dobrze i konkretnie."
  },
  {
    "author": "Witold Jurasz",
    "rating": 5,
    "text": "Znają się chłopy na rzeczy..."
  },
  {
    "author": "Michal Ignatowicz",
    "rating": 5,
    "text": "Wszystko świetnie"
  },
  {
    "author": "M S",
    "rating": 5,
    "text": "Obsluga jak zwykle profesjonalna."
  },
  {
    "author": "Paweł Korzus",
    "rating": 5,
    "text": "Specjaliści w swojej dziedzinie"
  },
  {
    "author": "Twinskillers T",
    "rating": 5,
    "text": "W porządku."
  },
  {
    "author": "Michał F",
    "rating": 5,
    "text": "Fachowcy"
  },
  {
    "author": "Kamil Kacała",
    "rating": 5,
    "text": "Szybko, sprawnie"
  },
  {
    "author": "Majk bb",
    "rating": 5,
    "text": "Polecam."
  },
  {
    "author": "Adrian Oskar",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "Selewerst Garay",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Grzegorz M.",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Andrzej wróbel",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Maciej Zdrowak",
    "rating": 5,
    "text": ""
  },
  {
    "author": "161AT117 Martin",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marek Machlowski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Jacek Kowalski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "damian forma",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Tomek Szopa",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Zuve M.",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marek Wymysło (Marek)",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Marcin Juras",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Adam Fic",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Paweł Sajdak",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Krzysztof Foksinski",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Sławek Barcik",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Krzysztof Koncewicz",
    "rating": 5,
    "text": ""
  },
  {
    "author": "agn zim",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Wojciech Sd",
    "rating": 5,
    "text": ""
  },
  {
    "author": "mirek kowalczyk",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Pawel Fudala",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Hadsonukes",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Krzysiek L.",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Paweł Jacek Smolec",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Maciej Muras",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Widmowy",
    "rating": 5,
    "text": ""
  },
  {
    "author": "Pawel BB",
    "rating": 5,
    "text": "Polecam solidna firma  , od wielu lat na niezmiennie wysokim poziomie  (ja korzystam od 10 lat) terminowo ,dobrze dobrane instalacje gazowe  do samochodu.  Ja zrobilem na instalacji 120 tys km i wymienilem butle na kolejną . W warsztacie  zawsze sa klienci więc to tylko potwierdza   moją ocenę."
  },
  {
    "author": "Sławomir M.",
    "rating": 5,
    "text": "Jako jedyna firma z pięciu, z którymi rozmawiałem zajmująca się LPG zaproponowała mi to czego oczekiwałem od fachowców, czyli naprawę wadliwie działającej instalacji. W pozostałych 4 przypadkach wszyscy proponowali założenie nowej, marudzili że nie da się lub nie mogą się połączyć z moją instalacją, a bez tego nic nie mogą zrobić. Po kontakcie z Auto-Diag pracownik obiecał, że to naprawią i tego samego dnia mój problem zniknął. Cała robota trwała 10min, koszt 10 razy mniejszy niż montaż nowej instalacji. Szczerze polecam."
  },
  {
    "author": "R B",
    "rating": 5,
    "text": "Pierwsze miejsce, w którym rozwiazano skutecznie i definitywnie problem z właściwym oprogramowaniem komputerowym do mojego volvo C30. Fachowo, szybko i w cenie poniżej zakładanej szacowanej kwoty. Zdecydowanie polecam. RB"
  },
  {
    "author": "Bartlomiej Grabczynski",
    "rating": 5,
    "text": "Założyłem tutaj już 3 instalację w 3 autach, gdy się regularnie wymienia filtr gazu i wpada na kontrolę to samochód śmiga normalnie, Panowie zawsze powiedzą jak coś jest jeszcze przy autko do zrobienia, polecam"
  },
  {
    "author": "Mateusz Kutyba",
    "rating": 5,
    "text": "Profesjonalne podejście do klienta. Bardzo zadowolony z zakupionej instalacji jak i późniejszej obsługi."
  },
  {
    "author": "Marek Golas",
    "rating": 5,
    "text": "Wymienili kostkę do cewki w renówce porządnie to zrobili bo działa do dzisiaj po za tym niewielkim kosztem."
  },
  {
    "author": "Karol Kwiatkowski",
    "rating": 5,
    "text": "Wspaniali fachowcy,  gaz buzuje w butli aż miło i nic się nie ulatnia."
  },
  {
    "author": "Sławomir Z.",
    "rating": 5,
    "text": "Miła pani w obsłudze klienta. Robota wykonana szybko i fachowo."
  },
  {
    "author": "DZiQ",
    "rating": 5,
    "text": "Zalatwiałem tam sprawę nie związaną z gazem tylko z elektryką. Szybko i niedrogo."
  },
  {
    "author": "tom tom",
    "rating": 5,
    "text": "Szybka i trafna diagnoza, usunięcie usterki szybko i profesjonalnie. Polecam"
  },
  {
    "author": "Michał Zarzecki",
    "rating": 5,
    "text": "Pełen profesjonalizm! Szczerze można polecać!"
  },
  {
    "author": "Kamil Pindelski",
    "rating": 5,
    "text": "Szybko, sprawnie i w rozsądnej cenie ( Volvo XC90 )."
  },
  {
    "author": "Maciej Chowaniec",
    "rating": 5,
    "text": "Polecam ! Fachowcy 1-klasa"
  },
  {
    "author": "Marcin „Nicram” Iskrzycki",
    "rating": 5,
    "text": "Niskie ceny porządne wykonanie"
  },
  {
    "author": "Ewa Wielopolska",
    "rating": 5,
    "text": "Świetni fachowcy. Polecam."
  },
  {
    "author": "bog zal",
    "rating": 5,
    "text": "fachowa obsługa klienta"
  },
  {
    "author": "Mar Mar",
    "rating": 5,
    "text": "Najlepsi w okolicy Polecam"
  },
  {
    "author": "rafal jacak",
    "rating": 5,
    "text": "Super fachowcy"
  },
  {
    "author": "Marcin Pezdek",
    "rating": 5,
    "text": "Znają się na tym co robią :)"
  },
  {
    "author": "Paweł Moroń",
    "rating": 5,
    "text": "Szybko, tanio i solidnie"
  },
  {
    "author": "Przemysław D",
    "rating": 5,
    "text": "Znają się na robocie."
  },
  {
    "author": "Admin 5555",
    "rating": 5,
    "text": "profesjonalnie i szybko"
  },
  {
    "author": "Grzesiek kóska",
    "rating": 5,
    "text": "Super"
  },
  {
    "author": "Jacek Zając",
    "rating": 5,
    "text": "Szybko i sprawnie"
  },
  {
    "author": "X Garage",
    "rating": 5,
    "text": "👍…"
  },
  {
    "author": "Tomasz Orczyk",
    "rating": 5,
    "text": "Nie wiem jak radzą sobie z LPG, ale montaż blokady skrzyni wykonany sprawnie i estetycznie. Biuro trochę odstrasza w pierwszym kontakcie, ale do jakości usługi nie mogę się przyczepić. Cena też dobra."
  },
  {
    "author": "Daniel „Smowling” Smółka",
    "rating": 5,
    "text": "Banda fachowców. Szybka diagnoza i naprawa gazu w moim samochodzie. Cena też była zdecydowanie lepsza, niż się spodziewałem. Zdecydowanie najlepszy gazownik w Bielsku."
  },
  {
    "author": "habdasik",
    "rating": 5,
    "text": "Błyskawiczny montaż instalacji, bardzo schludne wykonanie dodatkowo panowie mają ogromną wiedzę z zakresu samochodów. Polecam z czystym sumieniem!"
  },
  {
    "author": "Tomasz Gawęda",
    "rating": 5,
    "text": "Najlepsi gazownicy w okolicy. Wiem co mówię, ponad 250 tys. na gazie...\nPomocni w każdej chwili. Jak trzeba to i koło napompują. Jedynie to kolejki - cóż w dzisiejszych czasach na fachowców się czeka..."
  },
  {
    "author": "Marek Lewandowski",
    "rating": 5,
    "text": "Profesjonalna obsługa, błyskawiczna diagnoza kompleksowym sprzętem i perfekcyjne wykonanie."
  },
  {
    "author": "Arek Litwin",
    "rating": 5,
    "text": "Bardzo dobrzy fachowcy kurtka naprawa i tania"
  },
  {
    "author": "Bogusław Buczek",
    "rating": 5,
    "text": "Polecam. Fachowa obsługa."
  },
  {
    "author": "Wojciech Małecki",
    "rating": 5,
    "text": "Termino i solidnie"
  },
  {
    "author": "auto serwis viva",
    "rating": 5,
    "text": "Ok."
  },
  {
    "author": "Przemysław Kozieł",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "ROBERT STERNAL",
    "rating": 5,
    "text": "Męczyłem się z usterką mojego samochodu od roku. Byłem u kilku mechaników, strzelali, snuli dziwne teorie i nic. W \"Autodiag\" diagnoza z naprawą trwała 2 godziny i auto uzdrowione. Polecam ich z ręką na sercu."
  },
  {
    "author": "Sad To",
    "rating": 5,
    "text": "Polecam Warsztat.  Fachowe podejscie do klijenta. Konkuracja nie mogła zrobic tego co oni wykonali od ręki. Dziekuje i polecam."
  },
  {
    "author": "Witold Klimczak",
    "rating": 5,
    "text": "Mega fachowa obsługa. Bardzo kompetentni ludzie. Polecam"
  },
  {
    "author": "Ania Stopczyk",
    "rating": 5,
    "text": "Super warsztat, profesjonalna obsługa\nZakład godny polecenia"
  },
  {
    "author": "Piotr Kozieł",
    "rating": 5,
    "text": "Fachowcy pod każdym względem, gorąco polecam"
  },
  {
    "author": "Sebastian Poniatowski",
    "rating": 5,
    "text": "Najlepszy warsztat LPG w Bielsku!"
  },
  {
    "author": "Damian Jaromin",
    "rating": 5,
    "text": "Fachowa i szybka pomoc."
  },
  {
    "author": "Krzysztof Handzlik",
    "rating": 5,
    "text": "Sprawdzenie fachowcy"
  },
  {
    "author": "Zbigniew Kowalczyk",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "Witalij Denysewicz",
    "rating": 5,
    "text": "Miałem problem z instalacją 3 gen. Po naprawie nie poznaję ata, śmiga jak samolot. Polecam jak najbardziej!"
  },
  {
    "author": "Pawel Lang",
    "rating": 5,
    "text": "Chyba najtańszy auto-gaz w BB."
  },
  {
    "author": "Janusz Sołtysek",
    "rating": 5,
    "text": "Profesjonalnie i przystępnie cenowo"
  },
  {
    "author": "Józef Walter",
    "rating": 5,
    "text": "Mój osobisty mechanik"
  },
  {
    "author": "Wojciech Rosegnal",
    "rating": 5,
    "text": "Kompetentni  i polecani."
  },
  {
    "author": "Rafał „blackangel” Waligóra",
    "rating": 5,
    "text": "Polecam"
  },
  {
    "author": "Marek",
    "rating": 5,
    "text": "super robota Panowie dbają o powierzone samochody jak o własne dzieci"
  }
];
