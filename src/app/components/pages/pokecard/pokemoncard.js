
import style from "./pokemoncard.module.css"
import PokeName from "./pokemonname";
import PokeId from "./pokemonid";
import PokeImg from "./pokemonimg";
import PokeAbout from "./pokemonabout";
import PokeStats from "./pokemonstats";
function PokeCard({data,setTitle}){
    
    setTitle("")
    
    return(
        <div className={style.pokemon}>
            <div className={style.title}>My Pokemon</div>
            <PokeName name={data.name}></PokeName>
            <PokeId id={data.id}></PokeId>
            <PokeImg img={data.sprites.other["official-artwork"].front_default}></PokeImg>      
            <div className={style.info}>
            <p className={style["title-about"]}>About</p>
            <hr className={style.line}></hr>
            <PokeAbout type={data.types.map((type)=> type.type.name).join(", ")} height={data.height/10} weight={data.weight/10}
            abilities={data.abilities.map((a)=>a.ability.name).join(", ")}></PokeAbout>
            <p className={style["title-about"]} id={style.stats}>Stats</p>
            <PokeStats hp={data.stats[0].base_stat} attack={data.stats[1].base_stat} defense={data.stats[2].base_stat} speed={data.stats[5].base_stat} ></PokeStats>
            </div>     
        </div>
    
    );

}export default PokeCard;