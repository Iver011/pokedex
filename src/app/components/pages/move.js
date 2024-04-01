import { useEffect, useState } from "react";
import style from "./move.module.css"
import st from "../pokemonmuestra.module.css"
import useMove from "../hooks/useMove";

function Move({move,type}){
    
    const [active,setActive]=useState(false)
   const moveData=useMove(move);
    const activate=()=>{
        setActive(!active)
    }
    if (!moveData) {
        return <div>Cargando...</div>;
    }
   
    return(
        <div className={style.conteiner}>
            <div className={style.name} onClick={activate}>{moveData.name}</div>
            <div className={`${active?(style.show):(style.hidden)} ${st[type]}`}>
            <div>Id: {moveData.id}</div>
            <div>
            {moveData.flavor_text_entries && moveData.flavor_text_entries.find(entry => entry.language.name === "es") ? (
    <div>Descripción: {moveData.flavor_text_entries.find(entry => entry.language.name === "es").flavor_text}</div>
) : (
    <div>No hay datos sobre el movimiento en español.</div>
)}


            </div>
            
            <div>Power: {moveData.power}</div>
            <div>PP: {moveData.pp}</div>
            <div>{moveData.type.name}</div>

            </div>
            
                    
                
        </div>


    );

}export default Move;