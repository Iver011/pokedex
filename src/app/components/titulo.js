import style from "./titulo.module.css"


function Title({title}){

    return(
       <h2 className={style.title}>{title}</h2>
    )
}
export default Title;