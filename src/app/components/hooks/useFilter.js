import { useEffect, useState } from "react";



function useFilter(){
const [data,setData]=useState([])

const fetchData=async()=>{
    const response=await fetch('https://pokeapi.co/api/v2/type/1/')
    const data=await response.json()
    const listaPokemones=data.pokemon
    console.log("1",listaPokemones)
    return listaPokemones
    
}

const fetchPokemon=async()=>{
    const datos=await fetchData()
    const list=[]
    console.log("1.5",datos.length);
    for(let i=0;i<datos.length;i++){
        const res=await fetch(datos[i].pokemon.url)
        const pokemon=await res.json()
        list.push(pokemon)
    }
    console.log("2",list)
    return list;
}

const obtenerPokemon=async()=>{
    const pokemones=await fetchPokemon()
    setData(pokemones)

}
useEffect(() => { 
    obtenerPokemon();
    
 }, [])
return data;
}
export default useFilter;






//function useFilter(){
//    const [data,setData]=useState([])
//
//    useEffect(()=>{
//        const fetchData=async()=>{
//            const list=[]
//            for (let i=0;i<=1000;i++){
//                const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//                const data= await res.json();
//                list.push(data);
//            }
//            setData(list)
//        }
//
//
//        fetchData();
//
//    },[])
//    return data;
//
//}export default useFilter;

