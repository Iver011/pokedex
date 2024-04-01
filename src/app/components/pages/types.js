import { useEffect, useState } from "react";
import style from "./types.module.css"
import st from "../pokemonmuestra.module.css"
import Move from "./move";
import useType from "../hooks/useType";

function Types({tipo}){
    const typeData=useType(tipo)
    
    if (!typeData) {
        return <div>Cargando...</div>;
    }
    console.log(typeData)
    return(
        <div className={style.types} >
            <div className={style.title} >
           
            <h3 className={st[typeData.name]}>{typeData.name}</h3>
            
            </div>
            <div className={`${style.damage} ${style[typeData.name]}`}>
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
            <div className={style["moves-conteiner"]}>
                <h3> Movimientos: </h3>
                <div className={style["moves-list"]}>
                {typeData.moves.map((move)=>(<div className={style.move}>
              <div className={style.description}><Move move={move.name} type={typeData.name}></Move></div>
                        
                   

                
                </div>))}

                </div>
            </div>
                 
        
        </div>
    );

}
export default Types;
