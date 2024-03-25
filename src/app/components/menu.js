import Image from "next/image";
import { useState } from "react";
import style from "./menu.module.css";
import Search from "./busqueda";

function Menu({data,setFilteredPokemon,setSelectedType,setTitle,setShowMap,setRegion,setTypeInfo,setByType,setSelectedPokemon}) {
    const [hoveredItem, setHoveredItem] = useState(null);
    

    const filterPokemonByType=(type)=>{

        const filterPokemon = data.filter(
            (pokemon)=>pokemon.types.some((t) =>t.type.name===type)
        );
        setFilteredPokemon(filterPokemon);
        setSelectedType(type)
        setTitle(`${type} Pokemon`)
        setShowMap(false)
        setTypeInfo(false)
        
    }
     
    const filterPokemonByGen=(i,f,gen)=>{
        const filterPokemon=data.filter(
            (pokemon)=>(pokemon.id>=i && pokemon.id<f) 
        )
        setFilteredPokemon(filterPokemon)
        setSelectedType(null)
        setTitle(gen)
        setShowMap(false)
        setTypeInfo(false)
        
    }
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
                            <li onClick={()=>filterPokemonByGen(1,1009,"ALL POKEMON")}>All</li>
                            <li onClick={()=>filterPokemonByGen(1,152, "GENERATION 1")}>Primera Generacion</li>
                            <li onClick={()=>filterPokemonByGen(152,252, "GENERATION 2")}>Segunda Generacion</li>
                            <li onClick={()=>filterPokemonByGen(252,387, "GENERATION 3")}>Tercera Generacion</li>
                            <li onClick={()=>filterPokemonByGen(387,494, "GENERATION 4")}>Cuarta Generacion</li>
                            <li onClick={()=>filterPokemonByGen(494,650, "GENERATION 5")}>Quinta Generacion</li>
                            <li onClick={()=>filterPokemonByGen(650,722,"GENERATION 6")}>Sexta Generacion</li>
                            <li onClick={()=>filterPokemonByGen(722,810,"GENERATION 7")}>Septima Generacion</li>
                            <li onClick={()=>filterPokemonByGen(810,906, "GENERATION 8")}>Octava Generacion</li>
                            <li onClick={()=>filterPokemonByGen(906,1009,"GENERATION 9")}>Novena Generacion</li>
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
                        ABILITIES<span className={hoveredItem === "ABILITIES" ? style.up : style.down} ></span>
                      
                      
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
            <Search setFilteredPokemon={setFilteredPokemon} setTitle={setTitle} setSelectedPokemon={setSelectedPokemon} setTypeInfo={setTypeInfo}></Search>
            
        </header>
    );
}

export default Menu;
