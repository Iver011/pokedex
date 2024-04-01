import { useState,useEffect } from "react"
function useType(tipo){


    const [typeData,setTypeData] = useState("")
    
    console.log(tipo)
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/type/${tipo}/`).
        then(res=>res.json()).
        then(data=>{
            setTypeData(data)
        })


    },[tipo])

    console.log(typeData)
    return typeData;


}export default useType;