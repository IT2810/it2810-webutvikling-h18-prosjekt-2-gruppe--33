## Prosjektrapport - IT2810 - gruppe 33


## Innholdsfortegnelse

- [Innhold og funksjonalitet](#Innhold)
- [Komponentstruktur](#Komponentstruktur)
- [AJAX](#AJAX)
- [React](#React)
- [Responsivitet](#Responsivitet)
- [Samarbeid, Git, koding og leveranse](#Samarbeid)


## Innhold og funksjonalitet

###### SVG, musikk og tekst
SVG-filene er hentet fra [freepik.com](freepik.com). Lydfilene er hentet fra Apple sine royalte-free loops i Logic Pro X. Tekstene er hentet fra [familyfriendpoems.com](familyfriendpoems.com), et forum for diktdeling.

##### Funksjonalitet til layout
Layouten til siden vår er av minimalistisk art utformet med inspirasjon fra eksempel-layoutet fra oppgavebeskrivelsen. Det er implementert et enkelt tabsystem for å bytte mellom de forskjellige utstillingene, og en meny-knapp for å endre på foretrukne kategorier. Siden genererer alltid en standardustilling ved oppstart (ved bruk av livssyklusmetoden componentDidMount()).


## Komponentstruktur
Vår komponentstruktur var i utgangspunktet en uoversiktlig struktur fordi vi var uvitende om hvordan `setState()` påvirket re-rendering av en spesifikk komponent og alle subkomponenter tilhørende denne. Rotet førte til at vi snakket med stud.ass om hvordan komponentstruktueren til en velfungerende React-applikasjon burde se ut, og havnet på den som er beskrevet videre og illustrasjonen nedenfor. Her benytter vi `<App />` som hovedkomponent, og er overordnet herre i vårt React-hierarki. `<App />` lagrer kun kategorivalgene i state, som blir valgt og sendt ned fra `<Menu />`. Disse kategorivalgene blir sendt ned til `<Exhibition />`, som har overordnet ansvar for å fetche rett innhold til enhver tid, og logikk for å unngå ekstra fetching hvis en tab allerede har vært besøkt. `<Exhibition />` lagrer fetchet data i state, og sender ned datene som samsvarer med hvilken tab som er aktiv ned som props til `<ExhibitionItem />`, som igjen viser frem utstillingen. `<NavBar />` sender beskjed til `<Exhibition />` om hvilken tab som er aktiv. 

##### Class components
`<App />`
`<Menu />`
`<Exhibition />`
`<NavBar />`

##### Stateless functional components
`<ExhibitionItem />`
`<Header />`

![alt text](https://i.imgur.com/yruHiwo.png)

## React
I prosjektet har vi brukt `create-react-app` som vår startbundle, oppfordret av oppgavebeskrivelsen. Vi har tatt i bruk ES6 JavaScript syntax, og JSX.

##### Create-react-app
`create-react-app` kommer med mange nyttige biblioteker som gjør livet enklere for oss utviklere. Noen av disse som er spesielt handy er babel.js. Babel konverterer siste versjonen av JavaScript til ES5, som kan kjøre på enhver browser. Babel gjør at vi får enklere React syntax, den konverterer JSX og gjør at all snacksen som følger med ES6 fungerer som det skal.

##### ES6
Det vi bruker hovedsakelig fra ES6 er klasser og “fat” arrow funksjoner for å få tilgang til funksjonene uten å måtte binde metodene i konstruktøren for få tilgang til `this.funksjonsnavn`.
Arrow-funksjonene gjør dette for oss, så metodene er automatisk relatert til klassen der de er definert, og gir oss direkte tilgang til `this.setState()`.

Eksempel på bruk av “fat” arrow og klasser
```JavaScript
export default class Exhibition extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           images: ['','','',''],
           musicPaths: ['','','',''],
           text: ['','','',''],
           activeTab: 0
       }
     }

     handleActiveTab = (tabNumber) => {
       this.setState({activeTab: tabNumber});
     }

```

##### JSX
JSX (JavaScript eXtention) er en React utvidelse som gjør at vi kan skrive ren XML-syntax i JavaScript, som gjør koden vår mer lesbar og intuitiv. Babel konverterer JSX helt ned til React og i returnerer React.createElement.  Fra nettsiden til React er disse to skrivemåtene ekvivalente:

```JavaScript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```JavaScript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

```

## AJAX
SVG-bildene og teksten (json) hentes dynamisk med AJAX. Vi har gjort det slik at for hver utstilling laster vi ikke inn alle bildene samtidig, for å gjøre nettsiden raskere. Det kjøres et AJAX-kall på hver tab, med mindre man allerede har besøkt den tab-en i gjeldende utstillingutvalg. Når man først har lastet inn et SVG-bilde i en tab, lagres dette til state frem til neste utstillingsutvalg som resetter bilde-arrayen i state. 

Når det kommer til teksten, hentes alle tekstene for ett utstillingsutvalg samtidig, da det er snakk om veldig små filstørrelser og at vi allerede hadde vist hvordan man hentet inn en og en fil med bildene. Vi valgte å bruke tredjepartsbiblioteket Fetch for gjennomføringen av AJAX-kallene. 

For å simulere AJAX-kall på egen PC før vi fikk lastet opp prosjektet til en server, brukte vi python3 sin innebygde `http.server`-funksjon til å kommunisere med node-serveren. For at dette skulle fungere måtte vi tillate cross-origin resource sharing i nettleseren ved hjelp av en tredjeparts-utvidelse.

Fetch kalles på i både `componentDidMount` (som kjøres automatisk når komponenten lastes for første gang) og `componentDidUpdate`-funksjonen (som kjører når State blir endret, i vårt tilfelle med tanke på ActiveTab-variabelen). 

## Responsivitet
Utgangsunktet for designet vårt var skissene under, som vi laget i Sketch. Implementasjonen vår er ganske tro mot skissene, men de ble laget uvitende om at vi ikke fikk bruke tredjeparts UI-komponenter. Den største forskjellen er at vi byttet ut hamburger og dropdown-menyene med noen som tok litt mindre tid å implementere selv.

<img src="https://github.com/ulrikah/lur-dev/blob/dev/src/assets/lur-dev_sketch1.png" alt="drawing" height="250"/> <img src="https://github.com/ulrikah/lur-dev/blob/dev/src/assets/lur-dev_sketch2.png" alt="drawing" height="250"/>

Skjermstørrelsene vi valgte var **iPhone 6/7/8** (375 x 667) og **iPad** (768 x 1024), både _portrait_ og _landscape_, og **desktop** (bredde > 1024). Fra tidligere dårlige erfaringer har vi lært at det er lettere å skalere noe utover enn innover. Derfor valgte vi å starte med mobilformatet, og først finne et egnet design til denne skjermstørrelsen. Vi satt raskt opp en HTML-skisse av Sketch-skissen, og begynte å implementere logikken i applikasjonen. Når logikken begynte å nærme seg ferdig, startet vi med å utforme siden slik at den ble responsiv.

Hovedforskjellen mellom _portrait_ og _landscape_ i applikasjonen vår er at flexboxene i ExhibitionItem- og Menu-komponenten bytter retning fra vertikal til horisontal orientering (_flex-direction: column_ | _flex-direction: row_). I tillegg justerte vi _padding_ og _margin_ for de ulike størrelsene, for å få applikasjonen til å se mer enhetlig ut. Vi skalerte også bildene til mobilformat ved å endre på høyden og bredden i media queries for mobilformatet.

Vi brukte media queries på bredde (_max-width_) og på orientering (_orientation_) for å style siden etter de forskjellige skjermstørrelsene. Viewport var allerede deklarert i _index.html_ etter at vi satt opp prosjektet med `create-react-app` med følgende `<meta>` tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

Denne viewporten er også [anbefalingen](https://www.w3schools.com/Css/css_rwd_viewport.asp) fra W3Schools. `shrink-to-fit=no`er såvidt vi vet et Safari-spesifikt attributt som sier at Safari ikke skal forstørre eller forminske henholdsvis for små og store elementer.

I retrospektiv innser vi at vi kunne tenkt nøyere gjennom hvordan vi ville at elementene skulle skalere ved endring av skjermstørrelse tidligere i prosjektet. Vi var ivrige etter å lære React, og tenkte heller at vi fikk ta den responsive biten siden. Som forventet ble responsivitet for forskjellige skjermstørrelser noe av det siste vi implementerte. Vi hadde både spart tid og fått et enda ryddigere resultat hvis vi hadde laget skisser for alle skjermstørrelsene på forhånd og tenkt nøyere gjennom posisjonering. Til neste gang!

## Testing
De tre skjermstørrelsene vi har nevnt over bestemte vi oss for ved starten av prosjektet. Utgangspunktet for designet vårt var den minste størrelsen av disse tre: iPhone 6/7/8. Den første vi testet for var derfor en stående (_portrait_) iPhone, som skissene viser. 

Ettersom størrelsene er absolutte, testet vi først hvordan applikasjonen så ut for alle de gitte skjermstørrelsene. Etter å ha endret flexbox-retning for de aktuelle størrelsene, samt litt pirking på _padding_ og _margin_, testet vi overgangene fra format til format ved å dynamisk oppdatere bredden og høyden. Dette gjorde vi ved å trekke i inspectoren. 

Vi testet også mobilformatet på våre egne mobiler, ved å aksessere siden med IP-adressen fra vår lokale server.

## Samarbeid, Git, koding og leveranse
Vi har jobbet veldig tett sammen gjennom hele prosjektperioden og benyttet mye av parprogrammering. Vi delte opp perioden i to tidsbokser à la Scrum metodologi, der den første perioden gikk med til å lære om React, lage en design-skisse og sette opp grunnstrukturen i programmet. Andre periode brukte vi på responsivitet, re-strukturere prosjektet til en mer naturlig component-struktur, finjustering av fetch-metoder og testing. 

Når det kommer til versjonskontroll, har vi hovedsaklig arbeidet med to forskjellige branches, en master og en development branch, også kjent som _parallell branching_. Vi har kommentert alle commits med en enkel beskrivelse for hvilket problem de prøver å løse. Vi hadde forbedringspotensiale når det kommer til kommentering av koden underveis, men det ble ikke noe problem da vi programmerte mye sammen. De viktigste funksjonene er kommentert med en kort beskrivelse. 

I tillegg til å ha jobbet mye med fysisk tilstedeværelse av hele gruppa, har vi hatt en aktiv Slack-kanal som ble brukt mellom arbeidsøktene for planlegging, deling av relevante lenker og diskusjoner. Det har også vært nyttig å få et innblikk i hva de andre gruppene har lurt på ved å følge med i piazza og lese diskusjonstrådene der. 

Vi har prøvd å forholde oss til best-practice løsninger hele veien, men i neste prosjekt har vi lyst til å konfigurere Flow.js til prosjektet som vil hjelpe med enda mer konsistens og tvungen ryddighet. 



## Referanser


1. http://nicholasjohnson.com/blog/what-is-babel/
2. https://babeljs.io/docs/en/
3. https://github.com/facebook/create-react-app?files=1
4. https://www.fullstackreact.com/30-days-of-react/day-2/
