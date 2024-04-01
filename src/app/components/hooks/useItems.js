const { useState, useEffect } = require("react");

function useItems(){
    const [item,setItem]=useState([])


    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/item/?offset=20&limit=20').
        then(res=>res.json()).
        then(data=>{
            setItem(data.results)
        })
    },[])


    return item;

    
}
export default useItems;