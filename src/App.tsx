import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonCard from './PokemonCard/PokemonCard';

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+"Pokemon-Logo-PNG-Image.png"} className="App-logo" alt="logo" />
        <p>
          Welcome to Chris' Pokedex, less gooooo <br></br> new line
        </p>
        
      </header>
      <body className="App-body">
        <PokemonCard pokeID='1'></PokemonCard>
        <PokemonCard pokeID='2'></PokemonCard>
        <PokemonCard pokeID='3'></PokemonCard>
        <PokemonCard pokeID='4'></PokemonCard>
        <PokemonCard pokeID='5'></PokemonCard>
        <PokemonCard pokeID='6'></PokemonCard>
        <PokemonCard pokeID='7'></PokemonCard>
        <PokemonCard pokeID='8'></PokemonCard>
        <PokemonCard pokeID='9'></PokemonCard>
        <PokemonCard pokeID='150'></PokemonCard>
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
