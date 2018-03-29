# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 1 - Progressive Enhancement
#### Het Javascript-loze web
* **[Steam](http://store.steampowered.com/)**
  * Er staan altijd grote sliders op de startpagina. Deze laten populaire games zien. Als JavaScript uitstaat, is de slider leeg. De slider zelf staat nog wel in beeld.
  * Steam heeft een heel handig menu bovenaan de pagina. Dit menu klapt open als je er overheen hovert en laat veel opties zien. Als JavaScript uitstaat, dan klapt het menu niet open. Dit is gek aangezien je geen JavaScript nodig hebt om een menu te laten openklappen. Dit zouden ze makkelijk met CSS kunnen oplossen.
  * Als je een spelletje aanklikt in de lijst, dan krijg je soms een leeftijd-controlle. Deze leeftijd-controlle zorgt ervoor dat je een game niet kan kopen of bekijken als je niet oud genoeg bent. De controlle bestaat uit 3 input's en een submit. Deze werkt ook niet zonder JavaScript.
  
#### The Mouseless web
* **[Dumpert](https://dumpert.nl)**
  * Als je op Dumpert komt zonder muis, dan ben je de sjaak. Je moet **22x** tabben om nbij de main content te komen en maarliefst **46x** tabben om bij de "Top 5" te komen. Dit zouden ze kunnen fixen door een knop toe te voegen die zichtbaar wordt als je eenmaal op tab klikt. Een "skip to content" of "Bekijk Top 5" knop zou hier goed kunnen.

## Opdracht 2 - Fork je Wafs
Als Wafs Project had ik een website gemaakt die eigenlijk hetzelfde werkt als Giphy. Je krijgt bovenaan in de pagina een zoekoptie. Als je deze gebruikt, zoekt hij via de API van Giphy zes gifjes die horen bij jou zoekopdracht. Hij laat dan het plaatje zien en een titel. Als je op het plaatje klikt, dan krijg je een detailpagina waar je gifje groter wordt weergegeven. Ook krijg je informatie over de maker van het gifje.

Onderin 

#### Toegankelijkheid zonder muis
* **Tabben**
  * Waarom?
    * Mensen die geen muis bezitten
    * Mensen die wegens fysieke gesteldheden geen muis kunnen gebruiken
  * Wat heb ik toegevoegd aan de site waardoor het toegankelijk wordt?
    * De HTML hierarchie is heel goed. Plaatjes staan in een `<a>`, etc. Hierdoor kan je er goed doorheen tabben. Ook op de andere pagina's werkt het tabben goed.
* **Shortkeys**
  * Waarom?
    * Als je een grote website hebt, dan zijn shortkeys handig om snel door de pagina heen te gaan.
  * Wat heb ik gedaan?
    * Aangezien mijn site heel klein is, hoef je maar 11x te tabben om aan het eind van de website te komen. Hierdoor vond ik het niet noodzakelijk om shortkeys toe te voegen.
* **"Skip to content" knop**     
  * Waarom?
    * Als je een grote website hebt, kan je doormiddel van zo'n knop alle menu's en minder relevante HTML elementen skippen, om bij de kern (main-content) van je website te komen.
  * Wat heb ik gedaan?
    * Ook deze functie heb ik niet toegevoegd, omdat je na twee tabs bij de main-content bent. 
    
#### Voice Interface (Blindheid)
* **Duidelijke `<img alt=" ">`**
  * Waarom?
    * Een screenreader kan natuurlijk niet een afbeelding beschrijven. Daar is de "alt" tag voor. De "alt" tag zorgt ervoor dat een foto wordt beschreven als hij niet zichtbaar is, of voor schreenreaders.
  * Wat heb ik gedaan?  
    * In de eerste instantie had ik een "alt" tag toegevoegd, maar ook een titel. Deze combinatie is niet handig, aangezien mijn titel hetzelfde is als mijn "alt" tag. Hierdoor leest een screenreader dezelfde tekst twee keer.
* **Consistent zijn in taalgebruik** 
  * Waarom? 
    * Een screenreader leest òf Nederlands òf Engels, hij kan zelf niet zien aan het woord in welke taal het gescreven is.
  * Wat heb ik gedaan?
    * Ik heb de taal op mijn hele website overgezet naar het Engels.
  * Wat kan je nogmeer doen?
    * Je zou een "lang attribute" toe kunnen voegen, zodat de screenreader kan switchen naar een andere taal. 
#### Kleurenblindheid
#### Mensen zonder JS
#### Overig



### Opdracht 1.1 - Breek het Web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet, etc. Allemaal met als doel je te laten beseffen hoeveel je nog niet weet van het Web, erachter komen dat je misschien aannames hebt die niet kloppen, en om je je in te laten leven in de eindgebruiker.

Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt.

Kies 2 features van de 8
- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen
- Maak hierover een presentatie en neem die woensdag mee, dan gaan we de resultaten bespreken
Lezen: [Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html) en [I Turned Off JavaScript and it was Glorious](https://www.wired.com/2015/11/i-turned-off-javascript-for-a-whole-week-and-it-was-glorious/)


### Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

Voor deze opdracht ga je toepassen wat je van opdracht 1.1 hebt geleerd.
- Pas Progressive enhancement toe op je OBA Web App.
- Check je OBA Web App op de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.
- Test  je OBA Web App in het device lab.
- Laat je OBA Web App voorlezen door een screenreader.
- Gebruik onderstaande artikelen om je code te optimaliseren.
[The accessibility mindset](https://24ways.org/2015/the-accessibility-mindset/) en [Accessibility Originates With UX: A BBC iPlayer Case Study](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/)

Beoordelingscriteria
- Zet je code op Github
- Schrijf een Readme met:
  - een beschrijving van de problemen die je hebt gevonden
  - beschrijf hoe je de problemen hebt opgelost
  - of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben
