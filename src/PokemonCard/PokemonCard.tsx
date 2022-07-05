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
            <h1 className="text-black text-4xl">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
            <br></br>
            {/* let pokeMap = new Map(); */}
            {/* <h2 className="text-black">Weight: {}</h2> */}
            <div className="flex flex-col">
                {/* <div className="bg-slate-300 p-1 rounded-xl m-1 ">{data.types[0].type.name}</div>
                <div className="bg-slate-300 p-1 rounded-xl m-1 ">{data.types[1].type.name}</div>
                */}
                {data.types.map((type_info: any) => {
                    return (
                        <div className="bg-slate-800 p-1 rounded-xl m-1 text-lg">{type_info.type.name.charAt(0).toUpperCase() + type_info.type.name.slice(1)}</div>
                    );
                })}
            </div>
        </div>
    );
}
