# Prosjekt 2 - Gruppe 77

*  [Intro](#intro)
*  [Innhold og funksjonalitet](#innhold-og-funksjonalitet)
    *   [Generelt](#generelt)
    *   [Rettigheter](#rettigheter)
*  [Krav til teknologi](#krav-til-teknologi)
    *  [React](#react)
    *  [Ajax](#ajax)
    *  [Node og NPM](#node-og-npm)
    *  [HTML Web Storage](#html-web-storage)
    *  [Responsive Web Design](#responsive-web-design)
    *  [Testing](#testing)


## Intro

Vi har i dette prosjektet laget en online utstilling der vi har kombinert bilde, lyd og tekst. Vi valgte å se på temaet
med et ironisk blikk. Utstillingen er implementert som en single page application (SPA) med React og Typescript. 

## Innhold og funksjonalitet

### Generelt

Siden består av en ramme der bilder og tekst dukker opp, og et lydfelt for å spille av lyd. 
Utstillingen baserer seg på at brukeren kan endre tema, og dermed endre hvilke bilder og lyder som vises. 
Tema velges ved hjelp av knappene i headeren, og under hvert tema kan man velge mellom 3 ulike bilder og 3 ulike lyder. 
De tre temaene som kan velges er kjærlighet, sjø og sommer. I tillegg har vi en logo som kan trykkes for endring av tittel.
For mindre skjermer vil navbaren endres, og det dukker opp en løve der man kan velge om man vil vise navbaren eller ikke.
Det er også mulig å bytte tekst. Disse interne byttene gjøres med egne knapper, som er plassert nederst på siden. 

### Rettigheter

SVG-filene har vi hentet fra [publicdomainvectors.org](https://publicdomainvectors.org/).
<br>
Koden for responsiv navbar er hentet fra [denne siden](https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb).

Lydfilene er hentet fra YouTube. Under følger en liste med kilder for lydfilene: 

| Artist - Sang | YouTube-bruker | Link |
| ------ | ------ | ------ |
| *Beyoncé - Love on top* | Beyoncé | [Trykk her](https://www.youtube.com/watch?v=Ob7vObnFUJc) |
| *Lukas Graham - Love Someone* | Lukas Graham |  [Trykk her](https://www.youtube.com/watch?v=dN44xpHjNxE)  |
| *Taylor Swift - Love Story*   | Taylor Swift      |  [Trykk her](https://www.youtube.com/watch?v=8xg3vE8Ie_E)    |
| *Martin Garrix feat. Khalid - Ocean* | Martin Garrix | [Trykk her](https://www.youtube.com/watch?v=BDocp-VpCwY)  |
| *Fattern - Badekaret Til Pelle* |  Spammah101     |  [Trykk her](https://www.youtube.com/watch?v=F4dGW0jHbuo)    |
| *Kaptein Sabeltann - Sjørøverne kommer!*    | Kaptein Sabeltann      |  [Trykk her](https://www.youtube.com/watch?v=TA1Ds0AhZvo)    |
| *Bryan Adams - Summer Of '69*    |  Bryan Adams   | [Trykk her](https://www.youtube.com/watch?v=eFjjO_lhf9c)     |
| *Gyllene tider - Sommartider*    | zperited      | [Trykk her](https://www.youtube.com/watch?v=beFPoiNn0Bs)     |
| *Calvin Harris - Summer*    | Calvin Harris      | [Trykk her](https://www.youtube.com/watch?v=ebXbLfLACGM)     |

## Krav til teknologi

### React

Siden er implementert med React og TypeScript. Vi har i hovedsak valgt å benytte oss av class-components, men vi har også én funksjonell komponent - Header.tsx. 
Vi har benyttet oss av noen ulike måter å type på, men i hovedsak har vi brukt interface for å deklarere type til state og props. 
App.tsx er hovedklassen i applikasjonen, og den kommuniserer med alle de andre komponentene. 
App.tsx holder styr på hvilket tema som er valgt, og hva som skjer ved bytte av bilde/lyd og tekst. Vi har implementert følgende komponentstruktur, som vi mener er hensiktsmessig i forhold til det oppgaven spør om (komponenter som kommuniserer med App.tsx):

*  Header.tsx - navbar og overskrift, og endre tema ved klikk på “temaknapp”
*  TextSlider.tsx - velge tekst
*  ImageSlider.tsx - velge bilde
*  Sound.tsx - velge lyd

Siden vi har en relativt lavt komponent-tre, har vi valgt å ikke implementere Context API’et. Context API’et brukes for å slippe å sende props manuelt nedover i komponentstrukturen, men da vi kun sender props ned 1 nivå fra App.tsx følte vi ikke at det var nødvendig å bruke Context. 

### SVG

Bildene er SVG-filer hentet fra [nettet](https://publicdomainvectors.org/). 
For å animere filene brukte vi <animateTransform>-metoden i SVG-filene, og ved å sette repeatCount=”indefinite”, fikk vi kontinuerlig bevegelse i bildene. 
Eksempel på animasjon av et bilde: 

```js
<animateTransform attributeName="transform" 
attributeType="XML" 
type="scale" 
from="1 1" 
to="0.8 0.8" 
dur="0.9s" 
repeatCount="indefinite"/>
```

### AJAX

Teksten lastes dynamisk med AJAX, og vi har benyttes oss av fetch() for å gjøre dette. Bruker PoetryDB for å hente ut teksten. 
Har brukt den innebygde metoden componentDidMount() for å hente tekst når siden er ferdig "bygd":

```ts
componentDidMount() {
        //fetches the poems from the REST api when the page mount 
        var i;
        for (i = 0; i < this.poems.length; i++) {
            fetch(this.poems[i])
                .then((response) => response.json())
                .then((result) => {
                    this.data.push(result[0].lines)
                });
        }
    }

```

### Node og NPM

Vi baserte prosjektet på Node.js, og brukte pakken create-react-app for å sette opp prosjektet. 
Følgende kommando ble kjørt i terminalen for å sette opp prosjektet med TypeScript:

`npx create-react-app my-app --template typescript`

### HTML Web Storage

Ved å trykke på “lagre”-knappen øverst til høyre på siden, lagrer man bakgrunnsfarge og tekstfarge for gjeldende tema på siden, i tillegg til at gjeldende tittel blir lagret. Neste gang man besøker nettsiden, vil det være den lagrede bakgrunnsfargen, tekstfargen og tittelen som vil bli vist. 
Dette har vi fått til ved å bruke “Local Storage”. 
Som nevnt tidligere vil man ved å trykke på React-logoen oppe til venstre på siden, endre mellom fire forskjellige titler på utstillingen. 
Tittelen som til vises, vil til enhver tid være lagret i “Session Storage”. Dette bruker vi til vår fordel ved at tittel for utstillingen vil overleve en refresh av siden. 

### Responsive Web Design

Nettsiden er implementert med responsive web design. Dette innebærer at layout, skalering og interaksjonsmulighetene endrer seg etter type enhet og størrelse på skjerm. 
Under kommer beskrivelsen av bruken de ulike responsive design elementene og teknikkene. 

#### Bredde og høydeformat
Vi valgte å displaye bildet og tekst i samme ramme, hvor begge er lagt inn i hver sin wrapper på 400px x 400px. 
Ved passende skjermstørrelser er rammen vist i et breddeformat, med bilder og tekst ved siden av hverandre. 
Dersom skjermstørrelsen er for liten endres det til høydeformat, med bildet vist over teksten i rammen. 

#### Viewport
Siden vi valgte å bruke “Create React-app” med NodeJS var allerede viewport definert i “index.html” filen ved bruk av meta-tagen. 

`<meta name="viewport" content="width=device-width, initial-scale=1" />`

Her sørger “content=”width=device-width for at nettsiden skal tilpasse seg etter bredden på skjermen. 
Dette er for at brukeren skal slippe å scrolle sidelengs. Ingenting er definert for høyden på skjermen, da dette løses ved scrolling. 

#### Media-queries

Vi brukte media-queries for sørge for at innholdet på nettsiden tilpasset seg etter størrelsen på viewporten. Siden vi har en fast rammestørrelse på 800px i breddeformat, vil rammen endres til høydeformat ved en viewport på mindre enn 850px. I tillegg har vi en media-query for å tilpasse nettsiden etter mobiler. 
Vi valgte å tilpasse oss etter størrelsen på en iPhone X, da dette er en vanlig størrelse, og det var det vi hadde tilgjengelig for testing.

```css
@media (max-width: 850px) {
 	
}
```

#### Skalering av bilder

Vi valgte å ikke skalere SVG-elementene etter størrelsen på skjermen, men satt de heller til en fast størrelse. 
Valgte dette fordi vi ikke har så mange andre elementer på nettsiden, og det skadet ikke funksjonaliteten at bildet hadde fast størrelse, så lenge det endres til høydeformat når skjermstørrelsen ble mindre enn bredden til bildet. 

#### Flytende/fleksibel layout

Vi brukte CSS grids og flexbox for å få ønskelig layout på nettsiden. 
CSS-grids er brukt i headeren for å plassere de ulike knappene i headeren, samt til å plassere å plassere tittelen på prosjektet. 
Ellers brukte vi CSS-flexbox til å plassere elementene. De resterende elementene skulle vises under hverandre, og da egner flexbox seg. 
Inne i ramme-containeren så vises tekst og bilde på en flexbox-rad ved viewport størrelse over 850px, ellers vises det i en flexbox-kolonne.


### Testing

For hver av komponentene i prosjektet, har vi opprettet en snapshot-test med Jest. 
Følgende kodesnutt viser hvordan vi har skrevet testen for Header.tsx:

```ts
import React from 'react'
import renderer from 'react-test-renderer'
import Header from "../components/Header"
 
test("Test Header", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
})
```

Hver test rendrer en UI-komponent, tar et snapshot, og sammenligner med en referanse-snapshot-fil som blir lagret ved siden av testen. 
Testen vil feile om disse snapshotene ikke stemmer overens, enten er endringen ikke forutsett, eller så må referanse-snapshoten oppdateres.

 








