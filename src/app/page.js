'use client'
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Menu from "./components/menu";
import PokeCard from "./components/pokecard/pokemoncard";
import PokeMs from "./components/pokemonmuestra";
import Search from "./components/busqueda";
import Title from "./components/titulo";
import Map from "./components/mapa"
import Versions from "./components/versions";
import Types from "./components/types";
import Move from "./components/move";
export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState("ver todos");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [title,setTitle]=useState("Pokemon")
  const [showMap,setShowMap]=useState(false)
  const [region,setRegion]=useState("")
 const [typeInfo,setTypeInfo]=useState(false)
 const [bytype,setByType]=useState("")

  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = [];
      for (let i = 1; i <= 200; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonList.push(data);
      }
      setPokemonData(pokemonList);
    };

    fetchData();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

 
  const handleMenuSelect = (type) => {
    setSelectedType(type);
    setSelectedPokemon(null); 
  };

  if (pokemonData.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(pokemonData[0])



  return (
    <main className={styles.main}>
      
      
      <Menu data={pokemonData} setFilteredPokemon={setFilterPokemon}
      setSelectedType={handleMenuSelect} setTitle={setTitle}
      setShowMap={setShowMap} setRegion={setRegion}
      setTypeInfo={setTypeInfo} setByType={setByType}
      setSelectedPokemon={setSelectedPokemon}/>
      <div className={styles.pokemain}>
        {
          
          typeInfo?(
            <Types tipo={bytype}></Types>
          ):(
            
            showMap?(
           
              <Map region={region}></Map>
              
            ):(
                

            selectedPokemon?(
              <div className={styles.pokecard}>
                <PokeCard data={selectedPokemon} setTitle={setTitle}/>
              </div>
            ):(
              <>
              <Title title={title}></Title>
              <div className={styles["pokemon-list"]}>
              {filterPokemon.length>0?(
               
                filterPokemon.map((pokemon)=>(
                  <PokeMs key={pokemon.id} data={pokemon} onSelectPokemon={handlePokemonClick} setTitle={setTitle}/>
                ))
                
  
              ):(
                
                pokemonData.map((pokemon)=>(
                  <PokeMs key={pokemon.id} data={pokemon} onSelectPokemon={handlePokemonClick}/>
               
                ))
              )}
              </div> 
              </>
            )
    
              
            )
          )
          
          
        }

      </div>
      
    </main>
  );
}
