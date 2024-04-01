import style from "./pokemonabout.module.css"
function PokeAbout({type,height,weight,abilities}){


    return(
      <div className={style.about}>
        <div className={style.item}>
        <div className={style.label}>Type</div>
        <div className={style.value}>{type}</div>
        </div>
        <div className={style.item}>
        <div className={style.label}>Height</div>
        <div className={style.value}>{height} m</div>
        </div>
        <div className={style.item}>
        <div className={style.label}>Weight</div>
        <div className={style.value}>{weight} kg</div>
        </div>
        <div className={style.item}>
        <div className={style.label}>Abilities</div>
        <div className={style.value}>{abilities}</div>
        </div>
      </div>
    );

}export default PokeAbout;