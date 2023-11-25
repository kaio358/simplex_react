import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import styles from "./Caixa.module.css"
import Opcoes from "../form/Opcoes"
import Max_min from '../form/Max_min'


import verifica from "../../comportamento/calc_simplex"

import {useState} from "react"

function Caixa({quantidade,eventoQuan,val,eventoVal,eventoRes}) {

    const [restricao, setRestricao] = useState(0)
    const [variaveis, setVariaveis] = useState(0)
    const [cont,setCont] = useState([])
   

    let posicoes = []
    function variavel(novo) {
        setVariaveis(novo.value)
    }
    function restricoes(novo) {
        setRestricao(novo.value)
    }
    function matriz (novo){
       
    

        cont[novo.className -1]  = novo.value

    }
 
    function classificar(){
       
        let conjunto = []
        let contador = 0
       
        for(let index = 0; index <= quantidade; index++) {
            let linha = []
          
            for(let i = 0; i < val ; i ++){
                contador ++
                posicoes.push(contador)
                if(i!= val-1){

                    linha.push(<Input name="teste" type="number" eventoTexto={matriz} classe={`${contador}`} /> ,<h1>+</h1>)
                 
                }
                else{
                    linha.push(<Input name="teste" type="number" eventoTexto={matriz} classe={`${contador}`} />)
                }
            }
            contador ++
            posicoes.push(contador)
            if(index == 0){
                conjunto.push(<div className= {styles.restricao_div}> <Max_min/>{linha}  </div>)
            }else{

                conjunto.push(<div className={styles.restricao_div}>{linha} <Opcoes/> <Input name="teste" type="number"  eventoTexto={matriz} classe={`${contador}`}  /> </div> )
            }
                
        }
  
        return conjunto;
    }
    function testar() {
        
        if (quantidade >1) {
          
            for(var i = 0; i< cont.length;i++){
                if(cont[i] == null){
                   cont[i] = 0
                }
                cont[i] = parseFloat(cont[i])
            }
            let matriz = []
            var tamanhoDaLinha = parseInt(val) +1 
            for(var i = 0; i< cont.length; i+= tamanhoDaLinha){

                matriz.push(cont.slice(i, i + tamanhoDaLinha));
            }
            for (let index = 0; index < matriz[0].length; index++) {
               
                matriz[0][index] = (-matriz[0][index])
                
                
            }
            // console.log("teste",matriz);
            
            const colunas = matriz[0].length;
           
            
            for (let i = 1; i < matriz.length; i++) {
                matriz[0].splice(colunas - 1, 0, 0);
                for(let j=1 ; j<matriz.length;j++){
                    
                    if (j == i) {
                        matriz[i].splice(colunas - 1, 0, 0);; // Adiciona zeros para formar a matriz identidade
                    } else {
                        matriz[i].splice(colunas - 1, 0, 1);; // Adiciona 1 na diagonal para formar a matriz identidade
                    }
                }
                
            }
            console.log(verifica(matriz));
            
            eventoRes(verifica(matriz))
            
        }else{
            eventoQuan(restricao)
            eventoVal(variaveis)
        }
     
     
        
    }
    function unitario(){
        let linha = []
        linha.push(<Input text="Quantidade de variáveis : " name="quantidade_var" placeholder="Escreva quantas variáveis do problema" type="number" eventoTexto = {variavel} idUse="t01"/>)
        linha.push(<Input text="Quantidade de restrições : " name="quantidade_res" placeholder="Escreva quantas restriçõess do problema" type="number" eventoTexto={restricoes} idUse="t02"/>)
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