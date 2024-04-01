import style from "./pokemonabout.module.css"

function PokeStats({hp, attack, defense, speed}){


    return(

        <div className="stats">
            <div className={style.item}>
                <div className={style.label}>HP</div>
                <div className={style.value}>{hp}</div>
            </div>
            <div className={style.item}>
                <div className={style.label}>Attack</div>
                <div className={style.value}>{attack}</div>
            </div>
            <div className={style.item}>
                <div className={style.label}>Defense</div>
                <div className={style.value}>{defense}</div>
            </div>
            <div className={style.item}>
                <div className={style.label}>Speed</div>
                <div className={style.value}>{speed}</div>
            </div>
        </div>
    );

}export default PokeStats;