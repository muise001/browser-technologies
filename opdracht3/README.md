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
Om ervoor te zorgen dat de webshop niet alleen accesible was voor browsers, maar ook voor mensen... Heb ik hover en focus states toegepast, rekening gehouden met kleur-contrasten. De Tab-route is logisch en optimaal. 

#### JS
Om de ervaring "super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken" te maken, heb ik nagedacht over gave features. 
- Afbeelding zweeft het winkelwagentje in
 - Omdat er vrij weinig feedback was (als het gaat om het winkelwagentje), heb ik ervoor gekozen om 
- Winkelwagen niet meer als aparte pagina
- Afbeeldingen faden in bij aankomst op de pagina
- Winkelwagen wordt "onchange" aangepast
        

## Opdracht 3 - Progressive Enhanced Browser Technologies
//Browser Technologies onderzoeken en implementeren als enhancement. Basic functionaliteit van een use case doorgronden.

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

### Beoordelingscriteria
- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
  - een beschrijving van de core functionality
  - een beschrijving van de feature(s)/Browser Technologies
  - welke browser de feature(s) wel/niet ondersteunen
  - een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
  - met meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
- Student kan de Basic functionaliteit van een use case doorgronden
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development

### Usecases
Kies één van deze use cases. Combineren mag ook. De aangeboden Browser Technologie is bedoeld als tip om te onderzoeken, je kan ook een andere kiezen.
1. Ik wil in een lijst contacten kunnen zoeken, en details kunnen bekijken - Sticky Position
2. Ik wil een notificatie krijgen als mijn favoriete voetbalteam heeft gewonnen Notifications
3. Ik wil favoriete t-shirts-met-nerdy-teksten kunnen opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken - Web storage
4. Ik wil boodschappen-om-tostis-te-maken in mijn boodschappenlijstje kunnen gooien - Drag Drop
5. Ik wil tegen de helpdesk kunnen klagen over een i-frame-dat-het-niet-doet, en direct antwoord krijgen - Web RTC
6. Ik wil tijdens een college aan studenten een poll kunnen voorleggen en de resultaten meteen kunnen laten zien - Websocket
7. Ik wil kunnen beatboxen! - Web Audio
8. Ik wil tegen iemand anders een spelletje Pong spelen - Multi touch

