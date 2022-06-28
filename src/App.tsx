import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonCard from './PokemonCard/PokemonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chris Pokedex
        </p>
        <PokemonCard pokeID='658'></PokemonCard>
        <PokemonCard pokeID='659'></PokemonCard>
        <PokemonCard pokeID='660'></PokemonCard>
        <PokemonCard pokeID='123'></PokemonCard>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
