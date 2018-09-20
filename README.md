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
Vår komponentstruktur er laget etter et forslag av stud.ass. Her benytter vi `<App />` som hovedkomponent, og er overordnet herre i vårt react-hierarki. `<App />` lagrer kun kategorivalgene i state, sendt ned fra `<Menu />`. Disse kategoriene blir sendt ned til `<Exhibition />`, som har overordnet ansvar for å fetche rett innhold til enhver tid, og logikk for å unngå ekstra fetching hvis en tab allerede har vært besøkt. `<Exhibition />` sender ned all data som samsvarer med hvilken tab, og sender dette ned som props. `<NavBar />` sender beskjed til `<Exhibition />` om hvilken tab som er aktiv. 

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

## AJAX

## Responsivitet
Utgangsunktet for designet vårt var skissene under, som vi laget i Sketch. Implementasjonen vår er ganske tro mot skissene, men de ble laget uvitende om at vi ikke fikk bruke tredjeparts UI-komponenter. Den største forskjellen er at vi byttet ut hamburger og dropdown-menyene med noen som tok litt mindre tid å implementere selv.

<img src="https://github.com/ulrikah/lur-dev/blob/dev/src/assets/lur-dev_sketch1.png" alt="drawing" height="250"/> <img src="https://github.com/ulrikah/lur-dev/blob/dev/src/assets/lur-dev_sketch2.png" alt="drawing" height="250"/>

Fra tidligere dårlige erfaringer har vi lært at det er lettere å skalere noe utover enn innover. Derfor valgte vi å starte med mobilformatet, og først finne et egnet design til denne skjermstørrelsen. Vi satt raskt opp en HTML-skisse av Sketch-skissen, og begynte å implementere logikken i applikasjonen. Når logikken begynte å nærme seg ferdig, startet vi med å utforme siden slik at den ble responsiv. Skjermstørrelsene vi valgte var **iPhone 6/7/8** (375 x 667) og **iPad** (768 x 1024), både _portrait_ og _landscape_, og **desktop** (bredde > 1024).

I retrospektiv innser vi at vi kunne tenkt nøyere gjennom hvordan vi ville at elementene skulle skalere ved endring av skjermstørrelse. Vi var ivrige etter å lære React, og tenkte heller at vi fikk ta den responsive biten siden. Som forventet ble responsivitet for forskjellige skjermstørrelser noe av det siste vi implementerte. Vi hadde både spart tid og fått et enda ryddigere resultat hvis vi hadde laget skisser for alle skjermstørrelsene på forhånd og tenkt nøyere gjennom posisjonering. Til neste gang!

## Testing

## Samarbeid, Git, koding og leveranse







