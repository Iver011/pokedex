'use client'
import styles from "./page.module.css";
import { useState} from "react";
import Menu from "./components/menu";
import PokeCard from "./components/pages/pokecard/pokemoncard";
import PokeMs from "./components/pokemonmuestra";
import Title from "./components/pages/titulo";
import Map from "./components/pages/mapa"
import Types from "./components/pages/types";
import usePokemon from "./components/hooks/usePokemon";
import Item from "./components/pages/items";
import InfiniteScroll from "react-infinite-scroll-component";
import useFilter from "./components/hooks/useFilter";
export default function Home() {
  
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState("ver todos");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [title,setTitle]=useState("Pokemon")
  const [showMap,setShowMap]=useState(false)
  const [region,setRegion]=useState("")
 const [typeInfo,setTypeInfo]=useState(false)
 const [bytype,setByType]=useState("")
 

  const {pokemonData,fetchData}=usePokemon([]);
  
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
  

console.log(filterPokemon)
console.log(selectedType)

  return (
    <main className={styles.main}>
      
      
      <Menu setFilteredPokemon={setFilterPokemon}
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
                
                <InfiniteScroll
                dataLength={pokemonData.length}
                next={fetchData}
                hasMore={true}// Determinar si hay más Pokémon para cargar
                loader={<h4>Loading...</h4>}
                scrollThreshold={0.9}
              >
                <div className={styles.scroll}>
                  {
                pokemonData.map((pokemon)=>(
                  <PokeMs key={pokemon.id} data={pokemon} onSelectPokemon={handlePokemonClick}/>
                
                ))}
                </div>
                

                </InfiniteScroll>
                
              )}
              </div> 
              </>
            )
    
              
            )
          )
          
          
        }

      </div>
      <Item></Item>
    </main>
  );
}
