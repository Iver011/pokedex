import style from "./pokemonid.module.css"
function PokeId({id}){


    return(
        <div className={style.id}>
            {`#${String(id).padStart(3,'0')}`}
        </div>
    );

}export default PokeId;