import React, { useState, useEffect } from "react";

// ============================================
// VELKOMMEN TIL REACT-LÆRINGSPROSJEKTET! 🚀
// ============================================
// Dette prosjektet tar deg gjennom grunnleggende React-konsepter.
// Les forklaringer, svar på refleksjonsspørsmål, og fyll inn TODO-kode.

// ============================================
// DEL 1: FUNKSJONELLE KOMPONENTER
// ============================================

// Hva er en funksjonell komponent?
// - En vanlig JavaScript-funksjon
// - Returnerer JSX (ligner HTML)
// - Starter med stor bokstav
// - Kan ta imot props (parametere) for å gjøre komponenten dynamisk

function Velkommen() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#e3f2fd",
        borderRadius: "8px",
      }}
    >
      <h2>Velkommen til React! 🎉</h2>
      <p>Du er i gang med å lære komponenter.</p>
    </div>
  );
}

// REFLEKSJON:
// 1. Hva returnerer denne komponenten?
// 2. Hvordan kan vi bruke <Velkommen /> i App?
// 3. Hva skjer hvis vi lager flere Velkommen-komponenter?

// ============================================
// DEL 2: PROPS
// ============================================

// Props (properties) er måten vi sender data INN i komponenter.
// Det gjør komponenter gjenbrukbare og dynamiske.

function Hilsen({ navn }) {
  return <h3>Hei, {navn}! 👋</h3>;
}

// OPPGAVE: Lag en komponent "InfoKort"
// - Props: tittel og beskrivelse
// - Bruk <h4> for tittel, <p> for beskrivelse
// - Gi div litt padding og bakgrunnsfarge
function InfoKort({ tittel, beskrivelse }) {
  return (
    <div
    style={{
      padding: "5vw",
      backgroundColor: "lightblue",
    }}>
    <h4>{tittel} </h4>
    <p>{beskrivelse}</p>
    </div>
  ); // TODO: fyll inn JSX her
}

// ============================================
// DEL 3: LISTER MED .map()
// ============================================

// Hva er .map()?
// - .map() er en metode på arrays som lar oss lage et nytt array basert på hvert element.
// - I React brukes .map() ofte til å lage JSX for hvert element i en liste.
// - På denne måten kan vi rendre mange komponenter dynamisk uten å skrive hver enkelt for hånd.

// Eksempel:
// Vi har et array med hobbyer

const hobbyer = ["Programmering", "Gaming", "Lesing", "Trening"];

function HobbyListe() {
  return (
    <div>
      <h3>Mine hobbyer:</h3>
      <ul>
        {hobbyer.map((hobby, index) => (
          // Hver listeelement bør ha en unik key
          // og den skal eeeegentlig ikke være index, men heller en annen unik id
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

// OPPGAVE: Lag FavorittListe
// 1. Lag et array med 4-5 favorittfilmer/spill
// 2. Bruk .map() til å vise dem i en <ul>
// 3. Husk key-prop

// bonus: hvis du ønsker kan du forsøke å lage liste objectet til et kort
//        som har en bakgrunnsfarge, en tittel og kanskje et bilde.
//        (du bestemmer hvor mye du gjør ut av det)
const mineFavoritter = ["Nine Sols", "Darkest Dungeon", "Hades", "Cyberpunk 2077"]; // TODO: fyll inn favoritter

function FavorittListe() {
  return (
        <div>
      <h3>Mine favorittspill:</h3>
      <ul>
        {mineFavoritter.map((spill, index) => (
          <li key={index}>{spill}</li>
        ))}
      </ul>
    </div>
  );// TODO: fyll inn JSX her
}

// REFLEKSJON:
// 1. Hvorfor trenger vi key i .map()?
// 2. Hva skjer hvis vi legger til flere elementer i arrayet?

// ============================================
// DEL 4: useState
// ============================================

// useState lar oss lagre data som kan endre seg over tid
// Når state endres, re-rendrer React komponenten

// Virkelig bare se på det som en variabel, når den endrer seg
//    vet React at den må re-rendre det brukeren ser.
//    Men for at React skal vite det, må man bruke "set"-funksjonen!

function EnkelTeller() {
  const [teller, setTeller] = useState(0);

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #4caf50",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h4>Min første teller</h4>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Antall: {teller}</p>
      <button onClick={() => setTeller(teller + 1)}>Klikk meg! ➕</button>
    </div>
  );
}

// OPPGAVE: Lag FargeBytter
// - State: boolean for rød/blå
// - Vis div med bakgrunnsfarge basert på state
// - Knapp som bytter farge
function FargeBytter() {
  const [teller, setTeller] = useState(0);
  const farge = teller % 2 === 0 ? "blue" : "red";
  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #4caf50",
        borderRadius: "8px",
        margin: "10px 0",
        backgroundColor: farge,
      }}
    >
      <h4>Min første teller</h4>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Antall: {teller}, Farge: {farge}</p>
      <button style={{backgroundColor: farge}} onClick={() => setTeller(teller + 1)}>Klikk meg! ➕</button>
    </div>
  ); // TODO: bruk useState og fyll inn JSX
}

// REFLEKSJON:
// 1. Hva skjer når vi kaller setState?
// 2. Hvorfor oppdateres UI automatisk når state endres?

// ============================================
// DEL 5: useEffect
// ============================================

// useEffect lar oss kjøre kode når komponenten mountes(lages)
//    eller når state endres
// Dependency array bestemmer når effekten kjøres
//    Det er listen som står etter komma

function EffektEksempel() {
  const [melding, setMelding] = useState("Laster...");

  useEffect(() => {
    // TODO: Simuler lasting av data med setTimeout
  }, []);

  return <div>{/* TODO: vis melding */}</div>;
}

function TellerMedEffekt() {
  const [teller, setTeller] = useState(0);

  useEffect(() => {
    // TODO: logg teller og oppdater document.title
  }, [teller]);

  return <div>{/* TODO: vis teller og knapp */}</div>;
}

// REFLEKSJON:
// 1. Hva er forskjellen mellom [] og [teller] i dependency array?

// ============================================
// DEL 6: HOVEDPROSJEKT - COUNTER APP
// ============================================

// OPPGAVE: Lag Counter-komponent
// Props: tittel, verdi, onØk
function Counter({ tittel, verdi, onØk }) {
  return null; // TODO: fyll inn JSX
}

// App-komponenten
function App() {
  // OPPGAVE: Lag 4 states med useState, en for hver counter
  // TODO: fyll inn useState

  // OPPGAVE: Lag array med 4 counter-objekter: id, tittel, verdi, setFunksjon
  const counters = []; // TODO: fyll inn objekter

  // OPPGAVE: Lag resetAlle-funksjon som setter alle counters til 0
  const resetAlle = () => {
    // TODO: fyll inn
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1976d2" }}>
        React Læringsprosjekt 📚
      </h1>

      {/* DEL 1 & 2 */}
      <section style={{ marginBottom: "30px" }}>
        <Velkommen />
        <Hilsen navn="Alle sammen" />
        <Hilsen navn="Elever" />
        <InfoKort />
        {/* TODO: Bruk InfoKort-komponenten */}
      </section>

      {/* DEL 3 */}
      <section style={{ marginBottom: "30px" }}>
        <HobbyListe />
        <FavorittListe />
        {/* TODO: Bruk FavorittListe-komponenten */}
      </section>

      {/* DEL 4 */}
      <section style={{ marginBottom: "30px" }}>
        <EnkelTeller />
        <FargeBytter />
        {/* TODO: Bruk FargeBytter-komponenten */}
      </section>

      {/* DEL 5 */}
      <section style={{ marginBottom: "30px" }}>
        {/* TODO: Bruk EffektEksempel og TellerMedEffekt */}
      </section>

      {/* DEL 6 */}
      <section style={{ marginBottom: "30px" }}>
        <h2
          style={{ borderBottom: "3px solid #4caf50", paddingBottom: "10px" }}
        >
          🎯 Hovedprosjekt: Min Counter App
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {/* TODO: Bruk .map() på counters-arrayet for å lage Counter-komponenter */}
        </div>
        {/* TODO: Legg til resetAlle-knapp */}
      </section>

      {/* REFLEKSJON */}
      <section>
        <h2>🤔 Refleksjonsspørsmål</h2>
        <ul>
          <li>Hva er forskjellen på props og state?</li>
          <li>Hvorfor er det smart å dele opp UI i komponenter?</li>
          <li>Når ville du brukt useEffect i et ekte prosjekt?</li>
          <li>Hvordan kan du utvide counter-appen med en "decrease"-knapp?</li>
          <li>Hva skjer hvis du flytter useState UTENFOR komponenten?</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
