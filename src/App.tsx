import React from 'react';
import './App.css';
import PokemonCard from './PokemonCard/PokemonCard';

function getPokeListRange(rangeStart: number, rangeEnd:number = 150) {
  let pokeList = [];
  for(let i = rangeStart; i <= rangeEnd; i++) {
    pokeList.push(<PokemonCard pokeID={i.toString()}></PokemonCard>)
  }
  return pokeList;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+"Pokemon-Logo-PNG-Image.png"} className="App-logo" alt="logo" />
        <p>
          Welcome to Chris' Pokedex, less gooooo
        </p>
      </header>
      <body className="App-body inline-grid grid-cols-3 gap-4">
        {/* {Array.from({ length: 150 }).map((_, index) => {
          return <PokemonCard pokeID={index + 1 + ""}></PokemonCard>
        })} */}
        {getPokeListRange(1, 251)}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </body>
    </div>
  );
}

export default App;
