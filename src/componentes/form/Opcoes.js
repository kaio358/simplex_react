import styles from "./Opcoes.module.css"



function Opcoes(){
    return (
        <select id="cars" className={styles.caixa_option}>
       
            <option value="<="  > &le; </option>
            <option value=">="> &ge; </option>
            <option value="=="> = </option>
         
        </select>
    )
}
export default Opcoes