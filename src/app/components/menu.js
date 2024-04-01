import Image from "next/image";
import { useState } from "react";
import style from "./menu.module.css";
import Search from "./busqueda";

function Menu({data,setFilteredPokemon,setSelectedType,setTitle,setShowMap,setRegion,setTypeInfo,setByType,setSelectedPokemon}) {
    const [hoveredItem, setHoveredItem] = useState(null);
    
    const filterPokemonByType = async (type) => {
        if(type==="All"){ setFilteredPokemon([])
            setSelectedPokemon(null)
            setTitle("All Pokemon")} else{
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
            const data = await res.json();
            const lista = data.pokemon;
    
            if (lista && lista.length > 0) {
                const promises = lista.map(async (pokemonEntry) => {
                    const response = await fetch(pokemonEntry.pokemon.url);
                    return response.json();
                });
    
                const pokemons = await Promise.all(promises);
                setFilteredPokemon(pokemons);
                setSelectedType(type);
                setTitle(`${type} Pokemon`);
                setShowMap(false);
                setTypeInfo(false);
                
            } else {
                console.error("No se encontraron pokémones para el tipo especificado.");
            }
        } catch (error) {
            console.error("Error al filtrar pokémones por tipo:", error);
        }
    }
    };
        const filterPokemonByGen = async (gen) => {
            if(gen==="All"){ setFilteredPokemon([])
                setSelectedPokemon(null)
                setTitle("All Pokemon")} else{
            const exceptions={"deoxys":"deoxys-normal",
                            "wormadam":"wormadam-plant","giratina":"giratina-altered","shaymin":"shaymin-land",
                            "basculin":"basculin-red-striped","darmanitan":"darmanitan-standard","tornadus":"tornadus-incarnate","thundurus":"thundurus-incarnate","landorus":"landorus-incarnate","keldeo":"keldeo-ordinary","meloetta":"meloetta-aria"
                            ,"meowstic":"meowstic-male","aegislash":"aegislash-shield","pumpkaboo":"pumpkaboo-average","zygarde":"zygarde-50","gourgeist":"gourgeist-average"
                            ,"oricorio":"oricorio-baile","wishiwashi":"wishiwashi-solo","lycanroc":"lycanroc-midday","minior":"minior-red-meteor","mimikyu":"mimikyu-disguised"
                            ,"eiscue":"eiscue-ice","indeedee":"indeedee-male","morpeko":"morpeko-full-belly","enamorus":"enamorus-incarnate","toxtricity":"toxtricity-amped","urshifu":"urshifu-single-strike","basculegion":"basculegion-male"}
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`);
                const data = await res.json();
                const lista = data.pokemon_species;
        
                console.log("1",lista)
                if (lista && lista.length > 0) {
                    const promises = lista.map(async (pokemonEntry) => {
                        let name=pokemonEntry.name
                        if(name in exceptions){
                            name=exceptions[name]
                        }
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                        return response.json();
                    });
                    
                    const pokemons = await Promise.all(promises);
                    console.log(gen,pokemons)
                    setFilteredPokemon(pokemons);
                    setSelectedType(null)
                    
                    setTitle(`${gen} Generation`);
                    setShowMap(false);
                    setTypeInfo(false);
                    
                } else {
                    console.error("No se encontraron pokémones para el tipo especificado.");
                }
            } catch (error) {
                console.error("Error al filtrar pokémones por tipo:", error);
            
        }}
        };
     
    //const filterPokemonByGen=(i,f,gen)=>{
    //    const filterPokemon=data.filter(
    //        (pokemon)=>(pokemon.id>=i && pokemon.id<f) 
    //    )
    //    setFilteredPokemon(filterPokemon)
    //    setSelectedType(null)
    //    setTitle(gen)
    //    setShowMap(false)
    //    setTypeInfo(false)
    //    
    //}
    const handleItemHover = (itemName) => {
        setHoveredItem(itemName);
       
    };

    const handleItemLeave = () => {
        setHoveredItem(null);
    };

    const clickMap=(region)=>{
        setShowMap(true)
        setRegion(region)
        setTypeInfo(false)

    }
    const clickType=(type)=>{
        
        setShowMap(false)
        setByType(type)
        setTypeInfo(true)
    }

 
    return (
        <header className={style.header}>
            <img src="./image.png" onClick={()=>filterPokemonByType("All")}></img>
            <div className={style["main-menu"]}>
                <ul className={style["menu-option"]}>
                    <li className={style["option"]}
                        onMouseEnter={() => handleItemHover("TYPE")}
                        onMouseLeave={handleItemLeave}>
                        TYPE<span className={hoveredItem === "TYPE" ? style.up : style.down}></span> 
                        <ul className={style.submenu}>
                            <li onClick={()=>filterPokemonByType("All")}>All</li>
                            <li onClick={()=>filterPokemonByType("normal")}>Normal</li>
                            <li onClick={()=>filterPokemonByType("fire")}>Fire</li>
                            <li onClick={()=>filterPokemonByType("water")}>Water</li>
                            <li onClick={()=>filterPokemonByType("grass")}>Grass</li>
                            <li onClick={()=>filterPokemonByType("flying")}>Flying</li>
                            <li onClick={()=>filterPokemonByType("poison")}>Poison</li>
                            <li onClick={()=>filterPokemonByType("electric")}>Electric</li>
                            <li onClick={()=>filterPokemonByType("ground")}>Ground</li>
                            <li onClick={()=>filterPokemonByType("rock")}>Rock</li>
                            <li onClick={()=>filterPokemonByType("psychic")}>Psychic</li>
                            <li onClick={()=>filterPokemonByType("ice")}>Ice</li>
                            <li onClick={()=>filterPokemonByType("ghost")}>Ghost</li>
                            <li onClick={()=>filterPokemonByType("steel")}> Steel</li>
                            <li onClick={()=>filterPokemonByType("dragon")}>Dragon</li>
                            <li onClick={()=>filterPokemonByType("dark")}>Dark</li>
                            <li onClick={()=>filterPokemonByType("fairy")}>Fairy</li>
                            <li onClick={()=>filterPokemonByType("fighting")}>Fighting</li>
                            <li onClick={()=>filterPokemonByType("bug")}>Bug</li>
                        </ul>
                    </li>
                    <li className={style["option"]}
                        onMouseEnter={() => handleItemHover("GENERATION")}
                        onMouseLeave={handleItemLeave}>
                        GENERATION<span className={hoveredItem === "GENERATION" ? style.up : style.down} ></span>
                        <ul className={style.submenu}>
                            <li onClick={()=>filterPokemonByGen("All")}>All</li>
                            <li onClick={()=>filterPokemonByGen(1)}>Primera Generacion</li>
                            <li onClick={()=>filterPokemonByGen(2)}>Segunda Generacion</li>
                            <li onClick={()=>filterPokemonByGen(3)}>Tercera Generacion</li>
                            <li onClick={()=>filterPokemonByGen(4)}>Cuarta Generacion</li>
                            <li onClick={()=>filterPokemonByGen(5)}>Quinta Generacion</li>
                            <li onClick={()=>filterPokemonByGen(6)}>Sexta Generacion</li>
                            <li onClick={()=>filterPokemonByGen(7)}>Septima Generacion</li>
                            <li onClick={()=>filterPokemonByGen(8)}>Octava Generacion</li>
                            <li onClick={()=>filterPokemonByGen(9)}>Novena Generacion</li>
                        </ul>
                    </li>
                    
                    <li className={style["option"]}
                        onMouseEnter={() => handleItemHover("DETAILS")}
                        onMouseLeave={handleItemLeave}>
                        DETAILS BY TYPE<span className={hoveredItem === "DETAILS" ? style.up : style.down} ></span>
                        <ul className={style.submenu}>
                            <li onClick={()=>clickType(1)}>Normal</li>
                            <li onClick={()=>clickType(2)}>Fighting</li>
                            <li onClick={()=>clickType(3)}>Flying</li>
                            <li onClick={()=>clickType(4)}>Poison</li>
                            <li onClick={()=>clickType(5)}>Ground</li>
                            <li onClick={()=>clickType(6)}>Rock</li>
                            <li onClick={()=>clickType(7)}>Bug</li>
                            <li onClick={()=>clickType(8)}>Ghost</li>
                            <li onClick={()=>clickType(9)}>Steel</li>
                            <li onClick={()=>clickType(10)}>Fire</li>
                            <li onClick={()=>clickType(11)}>Water</li>
                            <li onClick={()=>clickType(12)}>Grass</li>
                            <li onClick={()=>clickType(13)}>Electric</li>
                            <li onClick={()=>clickType(14)}>Psychic</li>
                            <li onClick={()=>clickType(15)}>Ice</li>
                            <li onClick={()=>clickType(16)}>Dragon</li>
                            <li onClick={()=>clickType(17)}>Dark</li>
                            <li onClick={()=>clickType(18)}>Fairy</li>
                        </ul>
                    </li>
                    
                    <li className={style["option"]}
                        onMouseEnter={() => handleItemHover("ABILITIES")}
                        onMouseLeave={handleItemLeave}>
                        ITEMS<span className={hoveredItem === "ABILITIES" ? style.up : style.down} ></span>
                      
                      
                    </li>
                    <li className={style["option"]}
                        onMouseEnter={() => handleItemHover("MAPS")}
                        onMouseLeave={handleItemLeave}>
                        MAPS<span className={hoveredItem === "MAPS" ? style.up : style.down} ></span>
                        <ul className={style.submenu}>
                            <li onClick={()=> clickMap("kanto")}>Kanto</li>
                            <li onClick={()=> clickMap("johto")}>Johto </li>
                            <li onClick={()=> clickMap("hoenn")}>Hoenn</li>
                            <li onClick={()=> clickMap("sinnoh")}>Sinnoh</li>
                            <li onClick={()=> clickMap("teselia")}>Teselia/Unova</li>
                            <li onClick={()=> clickMap("kalos")}>Kalos</li>
                            <li onClick={()=> clickMap("alola")}>Alola</li>
                            <li onClick={()=> clickMap("galar")}>Galar</li>
                            <li onClick={()=>clickMap("paldea")}>Paldea</li>

                        </ul>
                      
                      
                    </li>
                    
                </ul>
              
            </div>
            <div className={style.search}>
            <Search setFilteredPokemon={setFilteredPokemon} setTitle={setTitle} setSelectedPokemon={setSelectedPokemon} setTypeInfo={setTypeInfo}></Search>

            </div>
            
        </header>
    );
}

export default Menu;
