# Browser Technologies
Het van Browser Technologies draait volledig om het toegankelijk maken van het web op browser niveau. Dit houdt in dat als je de website bekijkt als je geen JavaScript of CSS in je browser hebt, de website alsnog werkt.

## De Case
De Case die ik gekozen heb, is de 'tosti-webshop'.
**Uitdagingen**
 - Server-side scripting
   - Ik wilde server-side toepassen zodat de website ook gebruikt kan worden zonder JavaScript. Dit was extra moeilijk omdat ik naast project Tech nooit gewerkt had met het afhandelen van server-side formulieren. Formulieren handelde ik namelijk vooral af met Javascript
 - Vormgeving
   - Vormgeving was voor mij altijd al een kritiek puntje. Nu moest ik er ook nog rekening mee houden dat ik CSS schreef die leesbaar was voor elke browser. 
 - Het ontwerpen van een unieke ervaring
   - Aangezien ik mijn hoofddoel al bereikt had met de server-side javascript, vroeg ik me af wat in nog zou moeten toevoegen met JavaScript. Uiteindelijk heb ik veel gave features toegevoegd. Hier vertel ik verder in dit verslag meer over.
   
## De Aanpak
#### HTML
De html-laag was verreweg de moeilijkste laag. Ik wist dat ik de opbouw logisch moest maken. Dit zou namelijk het skelet van de site worden. Hier was semantiek en logica belangrijk. Naast plane HTML heb ik in deze laag ook veel gewerkt aan het samenstellen van de data (de producten die vertoond worden op de site), het maken van de .ejs templates en werken aan de server-side scripting. Na een aantal tutorials te hebben gekeken over het afhandelen van formulieren via Node, kon ik aan de slag. 

#### CSS
Om ervoor te zorgen dat de webshop niet alleen accesible was voor browsers, maar ook voor mensen... Heb ik hover en focus states toegepast, rekening gehouden met kleur-contrasten. De Tab-route is logisch en optimaal. Om ervoor te zorgen dat de pagina er altijd goed uitziet, heb ik zowel `display: grid` en `display: flex` toegepast. De pagina ziet er vrijwel hetzelfde uit met grid en flex. De enige reden waarom ik `display: flex` heb toegevoegd, is zodat hij op oudere devices en browsers goed zichtbaar is. 

#### JS
Om de ervaring "super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken" te maken, heb ik nagedacht over gave features. 
- Afbeelding zweeft het winkelwagentje in
  - Omdat er vrij weinig feedback was (als het gaat om het winkelwagentje), heb ik ervoor gekozen om de plaatjes van de producten die je in je winkelwagen stopt, daadwerkelijk 'vliegen' naar het winkelwagentje
- Winkelwagen niet meer als aparte pagina
  - Om mensen een paar miliseconde van hun tijd te besparen, heb ik ervoor gezorgd dat je niet naar de winkelwagen pagina toe hoeft, maar dat de winkelwagen naar jou toekomt.
- Afbeeldingen faden in bij aankomst op de pagina
  - Dit valt in de categorie "super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken"
- Winkelwagen wordt "onchange" aangepast
  - De knop "stop product in winkelwagen" wordt weggehaald. Zodra je een product toevoegd, vliegt hij naar je winkelwagentje. Hierdoor ziet de gebruiker dat het goed zit.
        
## Wie support wat & wat doe ik eraan?
Leuk dat je het vraagt!

##### CSS
 - Display : grid
   - 88,1 %
     - Om ervoor te zorgen dat bijna 10% extra gebruikers alsnog kunnen genieten van een strak design, heb ik ook `display: flex` toegevoegd als fallback. Dit wordt ge-support door 97.3% van de gebruikers' browsers
 - CSS Animations
   - 94.6 %
     - Zonder animations ziet het design er iets minder "cool" uit, maar hij werkt alsnog
 - Box Shadows
   - 94.8 %
     - Zonder box-shadows ziet het design er iets minder "cool" uit, maar hij werkt alsnog

##### JS
 - ForEach loop
   - 97,5 %
 - Arrow Functions 
   - 87,9 %
     - Hoe los ik dit op? Ik zou al mijn arrow functions eruit kunnen halen en vervangen door `function() {}`.
 - QuerySelector
   - 97.6 %
     - Om ervoor te zorgen dat 100% van mijn gebruikers de site kan gebruiken, heb ik aan het begin van de code `if(document.querySelector){` staan. Als querySelector namelijk niet ge-support wordt, dan heb ik dus "plane" HTML en CSS als fallback.    
     
[bron : Caniuse](https://caniuse.com)

## DeviceLab Test 
Ook heb ik getest in het Device Lab. Op het eerste device deed de site het perfect. De animaties waren 60fps, het grid (in combinatie met relatieve eenheden ('rem' en '%')) zorgde voor een automatisch responsive layout. Het enige wat jammer was is dat de knoppen over de header-tekst heen kwamen. Gelukkig zijn de knoppen belangrijker dan de H1 tekst.

Bij een ander device merkte ik dat de Javascript niet werkte... Ik wist niet eens dat dat ook nog kon. Gelukkig werkte mijn serverside-javascript als een engeltje.

Al met al kan je wel stellen dat dit een zeer geslaagde test was.

## Conclussie
Mijn site is toegankelijk voor 100% van de internet-gebruikers. Of je nou alleen HTML support, HTML en CSS of HTML, CSS en JS. Je kan mijn website altijd bezoeken. Doe dat ook vooral en geniet van je nieuwe tosti-ijzer en heerlijke tosti's 

### Beoordelingscriteria
- [x] De code staat in een repository op GitHub
- [x] Er is een Readme toegevoegd met daarin beschreven:
  - [x] een beschrijving van de core functionality
  - [x] een beschrijving van de feature(s)/Browser Technologies
  - [x] welke browser de feature(s) wel/niet ondersteunen
  - [x] een beschrijving van de accessibility issues die zijn onderzocht
- [x] De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- [x] De user experience van de demo is goed
  - [x] de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - [x] het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
  - [x] met meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
- [x] Student kan de Basic functionaliteit van een use case doorgronden
- [x] Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development
