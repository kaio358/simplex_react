import styles from "./Opcoes.module.css"



function Max_min(){
    return (
        <select id="cars" className={styles.caixa_option}>
       
            <option value="max"  > Maximizar </option>
            <option value="min"> Minimizar </option>
           
         
        </select>
    )
}
export default Max_min