import style from "./pokemonname.module.css"
function PokeName({name}){

    return(
        <div className={style["pokemon-name"]}>
            {name}
        </div>

    );

}export default PokeName;