import { useEffect, useState } from "react";


function Move({move}){
    const [moveData,setMoveData]=useState("")

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/move/${move}/`).
        then(res=>res.json()).
        then(data=>{
            setMoveData(data)
        })
    },[])

    return(
        <div>
            
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
            

        </div>


    );

}export default Move;