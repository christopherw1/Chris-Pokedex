import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json())

export interface PokemonCardProps{
    pokeID:string;
}

export default function PokemonCard({pokeID}:PokemonCardProps) {

    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokeID}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    console.log("Pokemon data", data);

    return (
        <div className="flex flex-col bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-96 m-2">
            <img alt={(data.name.charAt(0).toUpperCase() + data.name.slice(1)) + " Pokemon Image"} src={data.sprites.front_default}></img>
            <h1 className="text-black">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
            <h2 className="text-black">Weight: {data.weight}</h2>
        </div>
    );
}
