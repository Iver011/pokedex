import Image from "next/image";
import style from "./mapa.module.css"
function Map(region){

 
    const url=`./${region.region}.png`
    
    
    return(

        <div className={style.conteiner}>

           <img className={style.mapImage} src={url} id={region.region}></img>
        </div>

    );

}export default Map;