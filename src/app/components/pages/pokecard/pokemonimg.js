import style from "./pokemonimg.module.css"
import Image from "next/image";
function PokeImg({img}){


    return(
        <div className={style["pokemon-imagen"]}>
            <Image src={img} width={325} height={325}/>           
        </div>
    );

}export default PokeImg;