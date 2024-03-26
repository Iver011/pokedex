import { useEffect, useState } from "react";
import style from "./types.module.css"
import st from "./pokemonmuestra.module.css"

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
        <div className={style.types} >
            <div className={style.title} >
            <h3 className={st[typeData.name]}>{typeData.name}</h3>
            </div>
            <div className={style.damage}>
            <div className={style.value}>
            <div className={style.text}>Recibe doble daño de:</div>
            <p>{typeData.damage_relations.double_damage_from.map((type,index)=>(<div key={index} id={style.relations} className={st[type.name]}>{type.name}</div>))}</p>
            </div>
            <div className={style.value}>
            <div className={style.text}>Inflinge doble daño a:</div>
            <p>{typeData.damage_relations.double_damage_to.map((type,index)=>(<div key={index} id={style.relations} className={st[type.name]}>{type.name}</div>))}</p>
            </div>
            <div className={style.value}>
            <div className={style.text}>Recibe la mitad de daño de:</div>
            <p>{typeData.damage_relations.half_damage_from.map((type,index)=>(<div key={index} id={style.relations} className={st[type.name]}>{type.name}</div>))}</p>
            </div>
            <div className={style.value}>
            <div className={style.text}>Inflinge la mitad de daño a</div> 
            <p>{typeData.damage_relations.half_damage_to.map((type,index)=>(<div key={index} id={style.relations} className={st[type.name]}>{type.name}</div>))}</p>
            </div>
            <div className={style.value}>
            <div className={style.text}>No recibe daño de:</div>
            <p>{typeData.damage_relations.no_damage_from.map((type,index)=>(<div key={index} id={style.relations} className={st[type.name]}>{type.name}</div>))}</p>
            </div>
            <div className={style.value}>
            <div className={style.text}>No hace daño a:</div>
            <p>{typeData.damage_relations.no_damage_to.map((type,index)=>(<div key={index} id={style.relations} className={st[type.name]}>{type.name}</div>))}</p>
            </div>
            </div>
            <div className={style.moves}>
                <h3> Movimientos: </h3>
                <div className={style["moves-list"]}>
                {typeData.moves.map((move)=>(<div>{move.name}</div>))}

                </div>
            </div>
                 
        
        </div>
    );

}
export default Types;
