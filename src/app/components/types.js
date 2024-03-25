import { useEffect, useState } from "react";



function Types({tipo}){
    const [typeData,setTypeData] = useState("")


    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/type/${tipo}/`).
        then(res=>res.json()).
        then(data=>{
            setTypeData(data)
        })


    },[tipo])

   
    if (!typeData) {
        return <div>Cargando...</div>;
    }
    
    return(
        <>
            <div>
            {typeData.name}
            </div>
            <div>
            Recibe doble daño de:
            {typeData.damage_relations.double_damage_from.map((type)=>(type.name)).join(",  ")}
            </div>
            <div>
            Inflinge doble daño a:
            {typeData.damage_relations.double_damage_to.map((type)=>(type.name)).join(",  ")}
            </div>
            <div>
            Recibe la mitad de daño de:
            {typeData.damage_relations.half_damage_from.map((type)=>(type.name)).join(",  ")}
            </div>
            <div>
            Inflinge la mitad de daño a:
            {typeData.damage_relations.half_damage_to.map((type)=>(type.name)).join(",  ")}
            </div>
            <div>
            No recibe daño de:
            {typeData.damage_relations.no_damage_from.map((type)=>(type.name)).join(",  ")}
            </div>
            <div>
            No hace daño a:
            {typeData.damage_relations.no_damage_to.map((type)=>(type.name)).join(",  ")}
            </div>

            <div>
                <h3> Movimientos: </h3>
                {typeData.moves.map((move)=>move.name).join(", ")}
            </div>
                 
        
        </>
    );

}
export default Types;
