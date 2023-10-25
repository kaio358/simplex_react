import styles from './Input.module.css'
function Input({type,text,name,placeholder,value,eventoTexto}){
    function resultadoInput(e){
        eventoTexto(e.target.value)
    }
    return(
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} onChange={resultadoInput} placeholder={placeholder} value={value} />
        </div>
    )
}
export default Input