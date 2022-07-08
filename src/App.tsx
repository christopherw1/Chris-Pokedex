import { useState } from 'react';
import './App.css';
import PokemonCard from './PokemonCard/PokemonCard';
import PokemonSearch from './PokemonSearch/PokemonSearch';
//import ReactDOM from 'react-dom/client';

function App() {
  const [ region, setRegion ] = useState(1);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000)
  // });

  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+"Pokemon-Logo-PNG-Image.png"} className="App-logo" alt="logo" />
        <p>
          Welcome to Chris' Pokedex, less gooooo
        </p>
        <a
          className="App-link"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokemon Database
        </a><br></br>
        <PokemonSearch></PokemonSearch><br></br>
      </header>
      <body className="App-body inline-grid">
        <p>Or pick a region</p>
        <div className="inline-grid grid-cols-6 gap-4">
          <button onClick={() => setRegion((c) => 1)}>Kanto</button>
          <button onClick={() => setRegion((c) => 2)}>Johto</button>
          <button onClick={() => setRegion((c) => 3)}>Hoenn</button>
          <button onClick={() => setRegion((c) => 4)}>Sinnoh</button>
          <button onClick={() => setRegion((c) => 5)}>Unova</button>
          <button onClick={() => setRegion((c) => 6)}>Kalos</button>
        </div>
        <br></br>
        {/* {Array.from({ length: 150 }).map((_, index) => {
          return <PokemonCard pokeID={index + 1 + ""}></PokemonCard>
        })} */}
        <div className="inline-grid grid-cols-3 gap-4">
          {getPokeListRange(region)}
        </div>
      </body>
    </div>
  );
}



function getPokeListRange(region: number) {
  let rangeStart = 1;
  let rangeEnd = 151;
  if (region === 1) {
    rangeStart = 1;
    rangeEnd = 151;
  } else if (region === 2) {
    rangeStart = 152;
    rangeEnd = 251;
  } else if (region === 3) {
    rangeStart = 252;
    rangeEnd = 386;
  } else if (region === 4) {
    rangeStart = 387;
    rangeEnd = 493;
  } else if (region === 5) {
    rangeStart = 494;
    rangeEnd = 649;
  } else {
    rangeStart = 650;
    rangeEnd = 721;
  }
  let pokeList = [];
  for(let i = rangeStart; i <= rangeEnd; i++) {
    pokeList.push(<PokemonCard pokeID={i.toString()}></PokemonCard>)
  }
  return pokeList;
}

export default App;
