
import { useState } from "react";
import style from "./pokemonmuestra.module.css"

function PokeMs({data,onSelectPokemon}){
    const handleClick = () => {
        onSelectPokemon(data); // Llama a la función onSelectPokemon y pasa la información del Pokémon
        
    };
  

    return(
        <div className={style.pokedex} >
            <div className={style["poke-info"]}>
                <div className={style.name}>{data.name}</div>
                <div className={style.id}>{`#${String(data.id).padStart(3,'0')}`}</div>
            </div>
            <div className={style.image} id={data.id} onClick={handleClick}>
                <img src={data.sprites.front_default}></img>
            </div>
            <div className={style.types}>
                {
                    data.types.map((type,index)=>(
                        <div key={index} className={style[type.type.name]} id={style.tipo} >
                            {type.type.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );

}export default PokeMs;