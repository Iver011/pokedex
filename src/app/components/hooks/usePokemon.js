import { useEffect, useState } from "react";

function usePokemon(type) {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(1); // Comenzar desde el primer Pokémon
  let limit = 9;


  const fetchData = async () => {
    const pokemonList = [];

    for (let i = offset; i <= offset+limit; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();

    
        pokemonList.push(data);
      
    }

    setPokemonData([...pokemonData, ...pokemonList]);
    setOffset(limit + offset+1); // Incrementar el offset para la próxima carga
  };

  useEffect(() => {
    fetchData();
    
  }, []); // Llamada inicial y cada vez que cambia el tipo

  return { pokemonData,fetchData };
}

export default usePokemon;
