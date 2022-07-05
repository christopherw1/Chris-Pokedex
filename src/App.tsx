import React, { FormEvent } from 'react';
import './App.css';
import PokemonCard from './PokemonCard/PokemonCard';
import { useState } from 'react';
import PokemonSearch from './PokemonSearch/PokemonSearch';
//import ReactDOM from 'react-dom/client';

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
        <a
          className="App-link"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokemon Database<br></br>
        </a>
        <PokemonSearch></PokemonSearch>
      </header>
      <body className="App-body inline-grid grid-cols-3 gap-4">
        {/* {Array.from({ length: 150 }).map((_, index) => {
          return <PokemonCard pokeID={index + 1 + ""}></PokemonCard>
        })} */}
        {getPokeListRange(1, 151)}
      </body>
    </div>
  );
}

export default App;
