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
Alle lydfiler, SVG filer og tekster er selvlaget. Fire av hver i tre forskjellige kategorier, totalt 36 filer, som alle er lagret lokalt i mappen `src/assets`.

##### Funksjonalitet til layout
Layouten til siden vår er av minimalistisk art utformet med inspirasjon fra eksempel-layoutet fra oppgavebeskrivelsen. Det er implementert et enkelt tabsystem for å bytte mellom de forskjellige utstillingene, og en meny knapp for å endre på foretrukne kategorier. Siden genererer alltid ved oppstart (ved bruk av livssyklus metoden componentDidMount()) en standardustilling.


## Komponentstruktur
Vår komponentstruktur var i utgangspunktet en uoversiktelig struktur uten mål og mening, det var rotete og vi var uviten om hvordan `setState()` påvirket rerendering av en spesifikk komponent og alle subkomponenter tilhørende denne. Rotet førte til at vi snakket med stud.ass om hvordan komponentstruktueren til en velfungerende React-applikasjon burde se ut, og havnet på den som er beskrevet videre og bildeillustrasjonen nedenfor. Her benytter vi `<App />` som hovedkomponent, og er overordnet herre i vårt react-hierarki. `<App />` lagrer kun kategorivalgene i state, som blir valgt og sendt ned fra `<Menu />`. Disse kategorivalgene blir sendt ned til `<Exhibition />`, som har overordnet ansvar for å fetche rett innhold til enhver tid, og logikk for å unngå ekstra fetching hvis en tab allerede har vært besøkt. `<Exhibition />` lagrer fetchet data i state, og sender ned datene som samsvarer med hvilken tab som er aktiv ned som props til `<ExhibitionItem />` som viser frem utstillingen. `<NavBar />` sender beskjed til `<Exhibition />` om hvilken tab som er aktiv. 

##### Class components
`<App />`
`<Menu />`
`<Exhibtion />`
`<NavBar />`

##### Stateless functional components
`<ExhibitionItem />`
`<Header />`

![alt text](https://i.imgur.com/yruHiwo.png)

## React
I prosjektet har vi brukt create-react-app som vår startbundle oppfordret av oppgavebeskrivelsen, og ingen tredjeparts-biblioteker. Vi har tatt i bruk ES6 javascript syntax, og JSX.

##### Create-react-app
Create-react-app kommer med masse nyttige biblitoeker som gjør livet enklere for oss utviklere. Noen av disse som er spesielt handy er babel.js. Babel konverterer siste versjonen av JavaScript til ES5, som kan kjøre på enhver browser. Babel gjør at vi får enkelere React syntax, den konverterer JSX og gjør at all snacksen som følger med ES6 fungerer som det skal.

##### ES6
Det vi bruker hovedsakelig fra ES6 er klasser og “fat” arrow funksjoner får å få tilgang til funksjonene uten å måtte binde metodene i konstruktøren får få tilgang til this.funksjonsnavn.
Arrow funksjonene gjør dette for oss, så metodene er automastisk relatert til klassen der de er definert, og gir oss direkte tilgang til `this.setState()`.

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
JSX (JavaScript eXtention) er en React utvidelse som gjør at vi kan skrive ren XML syntax i javaScript som gjør koden vår mer elegant. Babel konverterer JSX helt ned til React.  Fra siden til React er disse to skrivemåtene ekvivalente. 

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

## Responsivitet
Utgangsunktet for designet vårt var skissene under, som vi laget i Sketch. Implementasjonen vår er ganske tro mot skissene, men de ble laget uvitende om at vi ikke fikk bruke tredjeparts UI-komponenter. Den største forskjellen er at vi byttet ut hamburger og dropdown-menyene med noen som tok litt mindre tid å implementere selv.

<img src="https://github.com/ulrikah/lur-dev/blob/dev/src/assets/lur-dev_sketch1.png" alt="drawing" height="250"/> <img src="https://github.com/ulrikah/lur-dev/blob/dev/src/assets/lur-dev_sketch2.png" alt="drawing" height="250"/>

Skjermstørrelsene vi valgte var **iPhone 6/7/8** (375 x 667) og **iPad** (768 x 1024), både _portrait_ og _landscape_, og **desktop** (bredde > 1024). Fra tidligere dårlige erfaringer har vi lært at det er lettere å skalere noe utover enn innover. Derfor valgte vi å starte med mobilformatet, og først finne et egnet design til denne skjermstørrelsen. Vi satt raskt opp en HTML-skisse av Sketch-skissen, og begynte å implementere logikken i applikasjonen. Når logikken begynte å nærme seg ferdig, startet vi med å utforme siden slik at den ble responsiv.

Da vi var fornøyd med utformingen av iPhone stående (_portrait_), jobbet vi med hvordan iPhone skulle se ut liggende (_landscape_). Neste steg ble å gjøre det tilsvarende for iPad, i både _portrait_ og _landscape_, og til slutt utvikle for desktop.

Hovedforskjellen mellom _portrait_ og _landscape_ i applikasjonen vår er at flexboxene i ExhibitionItem- og Menu-komponenten bytter retning fra vertikal til horisontal orientering (_flex-direction: column_ / _flex-direction: row_). I tillegg justerte vi _padding_ og _margin_ for de ulike størrelsene, for å få applikasjonen til å se mer enhetlig ut.

Vi brukte media queries på bredde (_max-width_) og på orientering (_orientation_) for å style siden etter de forskjellige skjermstørrelsene. Viewport var allerede deklarert i _index.html_ etter at vi satt opp prosjektet med _create-react-app_ med følgende `<meta>` tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

Denne viewporten er også [anbefalingen](https://www.w3schools.com/Css/css_rwd_viewport.asp) fra W3Schools. `shrink-to-fit=no`er såvidt vi vet et Safari-spesifikt attributt som sier at Safari ikke skal forstørre eller forminske henholdsvis for små og store elementer.

I retrospektiv innser vi at vi kunne tenkt nøyere gjennom hvordan vi ville at elementene skulle skalere ved endring av skjermstørrelse. Vi var ivrige etter å lære React, og tenkte heller at vi fikk ta den responsive biten siden. Som forventet ble responsivitet for forskjellige skjermstørrelser noe av det siste vi implementerte. Vi hadde både spart tid og fått et enda ryddigere resultat hvis vi hadde laget skisser for alle skjermstørrelsene på forhånd og tenkt nøyere gjennom posisjonering. Til neste gang!


## Testing
De tre skjermstørrelsene vi har nevnt over bestemte vi oss for ved starten av prosjektet. Utgangspunktet for designet vårt var ble den minste størrelsen av disse tre, iPhone 6/7/8. Den første vi testet for var derfor en stående (_portrait_) iPhone, som skissene viser. 

Ettersom størrelsene er absolutte, testet vi først hvordan applikasjonen så ut for alle de gitte skjermstørrelsene. Etter å ha endret flexbox-retning for de aktuelle størrelsene, samt litt pirking på _padding_ og _margin_, testet vi overgangene fra format til format ved å dynamisk oppdatere bredden og høyden. Dette gjorde vi ved å trekke i inspectoren. 

Vi testet også mobilformatet på våre egne mobiler, ved å aksessere siden med IP-adressen fra vår lokale server.


## Samarbeid, Git, koding og leveranse







