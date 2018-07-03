# Browser Technologies

## Opdracht 1 - Progressive Enhancement
### Het Javascript-loze web
* **[Steam](http://store.steampowered.com/)**
  * Er staan altijd grote sliders op de startpagina. Deze laten populaire games zien. Als JavaScript uitstaat, is de slider leeg. De slider zelf staat nog wel in beeld.
  * Steam heeft een heel handig menu bovenaan de pagina. Dit menu klapt open als je er overheen hovert en laat veel opties zien. Als JavaScript uitstaat, dan klapt het menu niet open. Dit is gek aangezien je geen JavaScript nodig hebt om een menu te laten openklappen. Dit zouden ze makkelijk met CSS kunnen oplossen.
  * Als je een spelletje aanklikt in de lijst, dan krijg je soms een leeftijd-controlle. Deze leeftijd-controlle zorgt ervoor dat je een game niet kan kopen of bekijken als je niet oud genoeg bent. De controlle bestaat uit 3 input's en een submit. Deze werkt ook niet zonder JavaScript.
  
### The Mouseless web
* **[Dumpert](https://dumpert.nl)**
  * Als je op Dumpert komt zonder muis, dan ben je de sjaak. Je moet **22x** tabben om nbij de main content te komen en maarliefst **46x** tabben om bij de "Top 5" te komen. Dit zouden ze kunnen fixen door een knop toe te voegen die zichtbaar wordt als je eenmaal op tab klikt. Een "skip to content" of "Bekijk Top 5" knop zou hier goed kunnen.

# Opdracht 2 - Fork je Wafs
Als Wafs Project had ik een website gemaakt die eigenlijk hetzelfde werkt als Giphy. Je krijgt bovenaan in de pagina een zoekoptie. Als je deze gebruikt, zoekt hij via de API van Giphy zes gifjes die horen bij jou zoekopdracht. Hij laat dan het plaatje zien en een titel. Als je op het plaatje klikt, dan krijg je een detailpagina waar je gifje groter wordt weergegeven. Ook krijg je informatie over de maker van het gifje.

Onderin 

### Toegankelijkheid zonder muis
- [x] **Tabben**
  * Waarom?
    * Mensen die geen muis bezitten
    * Mensen die wegens fysieke gesteldheden geen muis kunnen gebruiken
  * Wat heb ik toegevoegd aan de site waardoor het toegankelijk wordt?
    * De HTML hierarchie is heel goed. Plaatjes staan in een `<a>`, etc. Hierdoor kan je er goed doorheen tabben. Ook op de andere pagina's werkt het tabben goed.
- [ ] **Shortkeys**
  * Waarom?
    * Als je een grote website hebt, dan zijn shortkeys handig om snel door de pagina heen te gaan.
  * Wat heb ik gedaan?
    * Aangezien mijn site heel klein is, hoef je maar 11x te tabben om aan het eind van de website te komen. Hierdoor vond ik het niet noodzakelijk om shortkeys toe te voegen.
- [ ] **"Skip to content" knop**     
  * Waarom?
    * Als je een grote website hebt, kan je doormiddel van zo'n knop alle menu's en minder relevante HTML elementen skippen, om bij de kern (main-content) van je website te komen.
  * Wat heb ik gedaan?
    * Ook deze functie heb ik niet toegevoegd, omdat je na twee tabs bij de main-content bent. 
    
### Voice Interface (Blindheid)
- [x] **Duidelijke `<img alt=" ">`**
  * Waarom?
    * Een screenreader kan natuurlijk niet een afbeelding beschrijven. Daar is de "alt" tag voor. De "alt" tag zorgt ervoor dat een foto wordt beschreven als hij niet zichtbaar is, of voor schreenreaders.
  * Wat heb ik gedaan?  
    * In de eerste instantie had ik een "alt" tag toegevoegd, maar ook een titel. Deze combinatie is niet handig, aangezien mijn titel hetzelfde is als mijn "alt" tag. Hierdoor leest een screenreader dezelfde tekst twee keer.
- [x] **Consistent zijn in taalgebruik** 
  * Waarom? 
    * Een screenreader leest òf Nederlands òf Engels, hij kan zelf niet zien aan het woord in welke taal het gescreven is.
  * Wat heb ik gedaan?
    * Ik heb de taal op mijn hele website overgezet naar het Engels.
  * Wat kan je nogmeer doen?
    * Je zou een "lang attribute" toe kunnen voegen, zodat de screenreader kan switchen naar een andere taal. 
### Kleurenblindheid
- [x] **Contrast**
  * Waarom?
    * Als je contrast op een pagina slecht is, dan is het voor Kleurenblinden slecht of niet te zien.
  * Wat heb ik gedaan?
    * Ik heb dikke witte borders om de ingeladen "gifjes" gedaan. Hierdoor is het duidelijk dat de gifjes op de pagina niet horen bij de achtergrond.
  * Test
    * Ik heb getest met de Google Chrome Plugin "[Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa)". Deze plugin laat heel duidelijk verschillende vormen van kleurenblindheid zien. 
### Mensen zonder JS
- [ ] **Server-side scripting**
  * Waarom?
    * Als je server-side JavaScript gebruikt, hoeft de gebruiker geen JavaScript te hebben en zouden de functies alsnog werken.
  * Wat heb ik gedaan?
    * Ik heb geen server-side scripting toegevoegd
### Overig
- [x] **Fallback-fonts**
  * Waarom?
    * Stel je internet is heel langzaam. Dan kan het zijn dat je (als je geen Fallback Font hebt) helemaal geen tekst op de website te zien krijgt. Dat is natuurlijk nooit de bedoeling.
  * Wat heb ik gedaan?
    * Ik gebruik "Sans-serif". Dat is een font die elke browser standaart heeft. Hierdoor heb ik geen fall-back font nodig.
- [x] **Error afhandeling**
  * Waarom? 
    * Stel je zit op een website en je internet valt uit. Dan is de website alsnog zichtbaar, maar kan het zo zijn dat functionaliteiten wegvallen. 
    * Stel je doet een zoekopdracht en er komt niks uit, dan zou de "Loading" feedback constant doorgaan.
    * Stel de API ligt eruit, dan krijg je geen resultaten en lijkt het alsof die er nog wel komen.
  * Wat heb ik gedaan?
    * Ik heb een error-afhandeling gemaakt voor alle bovenstaande punten.
- [x] **Gebruik van cookies of local storage**
  * Waarom?
    * Je zou kunnen zeggen dat je local-storage of cookies ook kan gebruiken als errorafhandeling. Als je cookies en local-storage namelijk goed gebruikt, zou je ervoor kunnen zorgen dat je pagina nooit leeg is. Ookal ligt bijvoorbeeld de API eruit.
  * Wat heb ik gedaan?
    * Ik heb local-storage toegevoegd die je laatste succesvolle zoekopdracht opslaat. Hierdoor kan je altijd je laatstbezochte opdracht terugzien.
- [ ] **Device-lab testing**   
  * Waarom? 
    * Als je test op meerdere devices, zie je of je website goed werkt op allerlei verschillende apparaten. Je kan bijvoorbeeld testen op "responsiveness" of verschillende mobiele browsers
  * Wat heb ik gedaan?
    * Niet getest

### Device Lab Test

Ook heb ik getest in het Device lab. Hier testte ik op:
 * Is mijn site responsive
 * Werkt mijn site goed
 * Is de grootte van het menu goed
  
Zoals ook te zien is op onderstaande foto's, is mijn site erg responsive. Dit is goed omdat hierdoor iedereen met een smartphone toegang heeft tot de website. 

##### Wat opviel in de tests.
 * Test 1 en 2. 
   * De pagina werd snel geladen
   * De content was goed zichtbaar
   * Het formulier was makkelijk te bereiken
 * Test 3. (javascript-loze telefoon)
   * Na het zoeken kwamen er geen resultaten in beeld. Mijn error-afhandeling deed het niet (werkt ook met JS)
   * Het navigeren werkte niet omdat hij het "event : hashchange" niet kon uitvoeren. 
 * Algemeen
   * De website was goed responsive.
   * Het menu was altijd goed zichtbaar, zelfs met het toetsenbord in beeld

<img src="https://github.com/muise001/browser-technologies/blob/master/opdracht1/IMG_9584.JPG" alt="devicelab test"> 
<img src="https://github.com/muise001/browser-technologies/blob/master/opdracht1/IMG_9585.JPG" alt="devicelab test"> 
<img src="https://github.com/muise001/browser-technologies/blob/master/opdracht1/IMG_9594.JPG" alt="devicelab test>

