import styles from './SubmitButton.module.css'
function SubmitButton({text,evento}){
    return(
        <div  >
            <button className={styles.btn} onClick={evento}>{text}</button>
        </div>
    )
}
export default SubmitButton