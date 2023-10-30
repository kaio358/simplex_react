import styles from './Input.module.css'
function Input({type,text,name,placeholder,value,eventoTexto,classe}){
    function resultadoInput(e){

            eventoTexto(e.target)

    }

    return(
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} onChange={resultadoInput} placeholder={placeholder} value={value} className={classe}/>
            
        </div>
    )
}
export default Input