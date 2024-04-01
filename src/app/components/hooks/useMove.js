import { useState,useEffect } from "react"

function useMove(move){

    const [moveData,setMoveData]=useState("")

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/move/${move}/`).
        then(res=>res.json()).
        then(data=>{
            setMoveData(data)
        })
    },[move])

    return moveData;

}export default useMove;