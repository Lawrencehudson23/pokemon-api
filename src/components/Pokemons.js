import React, {useState}from 'react'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([])
    async function handleClick(){
        await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(res=>res.json())
            .then(res=>setPokemons(res.results))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <button onClick={handleClick}>Fetch Pokemon</button>
            <ul>
                {pokemons.map((pokemon,i) => (
                    <li key={i}>{pokemon.name}</li>
                    // <li key={i}> <a ref={pokemon.url}>{pokemon.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
