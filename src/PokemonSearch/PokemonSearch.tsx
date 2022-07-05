import React, { FormEvent, useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function PokemonSearch() {
    const [name, setName] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
      <>
    <form onSubmit={handleSubmit}>
        <label>Enter a Pokemon name or ID number : 
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </label>
        {/* <input type="submit" /> */}
    </form>
    
    {name.length > 0 &&
        <PokemonCard pokeID={name.toLowerCase()}></PokemonCard>
    }
    </>
  );
}