import { useEffect, useState } from "react";
import style from "./move.module.css"
import st from "./pokemonmuestra.module.css"

function Move({move,type}){
    const [moveData,setMoveData]=useState("")
    const [active,setActive]=useState(false)
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/move/${move}/`).
        then(res=>res.json()).
        then(data=>{
            setMoveData(data)
        })
    },[type])

    const activate=()=>{
        setActive(!active)
    }
    if (!moveData) {
        return <div>Cargando...</div>;
    }
    console.log(type)
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