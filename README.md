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
Alle lydfiler, SVG filer og tekster er selvlaget. Fire av hver i tre forskjellige kategorier, totalt 36 filer, som alle er lagret lokalt i mappen /assets.

##### Funksjonalitet til layout
Layouten til siden vår er av minimalistisk art utformet med inspirasjon fra eksempel-layoutet fra oppgavebeskrivelsen. Det er implementert et enkelt tabsystem for å bytte mellom de forskjellige utstillingene, og en meny knapp for å endre på foretrukne kategorier. Siden genererer alltid ved oppstart (ved bruk av livssyklus metoden componentDidMount()) en standardustilling.


## Komponentstruktur
Vår komponentstruktur er laget etter et forslag av stud.ass. Her benytter vi <App /> som hovedkomponent, og er overordnet herre i vårt react-hierarki. <App /> lagrer kun kategorivalgene i state, sendt ned fra <Menu />. Disse kategoriene blir sendt ned til <Exhibition />, som har overordnet ansvar for å fetche rett innhold til enhver tid, og logikk for å unngå ekstra fetching hvis en tab allerede har vært besøkt. <Exhibition /> sender ned all data som samsvarer med hvilken tab, og sender dette ned som props. <NavBar /> sender beskjed til <Exhibition /> om hvilken tab som er aktiv. 

##### Class components
* <App />
* <Menu />
* <Exhibtion />
* <NavBar />

##### Stateless functional components
* <ExhibitionItem />
* <Header />

![alt text](https://i.imgur.com/yruHiwo.png)

## React

## AJAX

## Responsivitet

## Testing

## Samarbeid, Git, koding og leveranse







