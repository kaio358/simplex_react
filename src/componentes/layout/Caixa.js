import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import styles from "./Caixa.module.css"
import Opcoes from "../form/Opcoes"
import Max_min from '../form/Max_min'


import {useState} from "react"

function Caixa({quantidade,eventoQuan,val,eventoVal}) {

    const [restricao, setRestricao] = useState(0)
    const [variaveis, setVariaveis] = useState(0)

    function variavel(novo) {
        setVariaveis(novo)
    }
    function restricoes(novo) {
        setRestricao(novo)
    }
    function classificar(){
       
        let conjunto = []

        for(let index = 0; index < quantidade; index++) {
            let linha = []
          
            for(let i = 0; i < val ; i ++){
              
                if(i!= val-1){

                    linha.push(<Input name="teste" type="number" /> ,<h1>+</h1>)
                }
                else{
                    linha.push(<Input name="teste" type="number" />)
                }
            }
            if(index == 0){
                conjunto.push(<div className= {styles.restricao_div}> <Max_min/>{linha}  </div>)
            } 
            conjunto.push(<div className={styles.restricao_div}>{linha} <Opcoes/> <Input name="teste" type="number" /> </div> )
                
        }
  
        return conjunto;
    }
    function testar() {
        
       
        eventoQuan(restricao)
        eventoVal(variaveis)
     
        
    }
    function unitario(){
        let linha = []
        linha.push(<Input text="Quantidade de variáveis : " name="quantidade_var" placeholder="Escreva quantas variáveis do problema" type="number" eventoTexto = {variavel}/>)
        linha.push(<Input text="Quantidade de restrições : " name="quantidade_res" placeholder="Escreva quantas restriçõess do problema" type="number" eventoTexto={restricoes}/>)
        return linha
    }
    
    return(
        <div className={styles.form_main}>
            
            <h1>Pesquisa Operacional</h1>
            {quantidade > 1 ? classificar() : unitario()}
            <SubmitButton text="Proximo" evento={testar}/>
        </div>
    )
}
export default Caixa