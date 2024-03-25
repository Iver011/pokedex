import { useState } from "react";
import style from "./busqueda.module.css"
function Search({setFilteredPokemon,setTitle,setSelectedPokemon,setTypeInfo}){
    const [pokemonId,setPokemonId] =useState('')
    
    
    const buscarPokemon=(name)=>{ 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).
    then(res=>res.json()).
    then(data=>{
        setFilteredPokemon([data])
    })
    setPokemonId("")  
    setTitle("");
    setSelectedPokemon(null)
    setTypeInfo(false)
}
    

const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        buscarPokemon();
    }
}

    return(
        <div className={style.buscador}>
        <div className={style.input}>
            <input className={style.in}placeholder="Ingresa un ID o Nombre" value={pokemonId} onChange={(e)=>setPokemonId(e.target.value)}
            onKeyPress={handleKeyPress}></input>
        </div>
        <div className={style.button}>
            <button onClick={buscarPokemon}>
                <i class="fas fa-search"></i>
            </button>
        </div>
        </div>
    );

}
export default Search;