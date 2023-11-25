import { useState } from "react";
import Caixa from "./Caixa"

import styles from "./Main.module.css"
function Main(){
    const [quantidades,setQuantidades] = useState(1)

    function definieQuantidades(novo){
        setQuantidades(novo)
    }
    const [variaveis,setVariaveis] = useState(0)

    function definieVariaveis(novo){
        setVariaveis(novo)
    }
    const [resposta,setResposta] = useState(0)
    function definirResposta(novo){
        setResposta(novo)
    }
    function formarTabela() {
        
        let conjunto = [];
        let linha_principal = [];
        linha_principal.push(<th>Z</th>);
        for (let i = 1; i < quantidades; i++) {
            linha_principal.push(<th>X{i}</th>);
        }
    
        for (let i = 0; i < resposta.length; i++) {
            let linha = [];
            if(i == 0){
                linha.push(<td>1</td>)
            }else{
                linha.push(<td>0</td>)
            }  
           
            linha_principal.push(<th>XF{i}</th>);
            for (let j = 0; j < resposta[i].length; j++) {
                
                linha.push(<td>{resposta[i][j]}</td>);
            }
            conjunto.push(<tr>{linha}</tr>);
        }
        linha_principal.push(<th>B</th>);
    
        let conjuntoPrincipal = (
            <table className={styles.tabela_estilo}>
                <thead className={styles.tabela_head}>{linha_principal}</thead>
                <tbody>{conjunto}</tbody>
            </table>
        );
        return conjuntoPrincipal;
    }
    
 
  
    
    return(
        <div>
            <h1>Simplex</h1>
            <Caixa quantidade={quantidades} eventoQuan= {definieQuantidades} val={variaveis} eventoVal={definieVariaveis} eventoRes={definirResposta}/>
            {resposta ? 
                formarTabela()
            :""  }
        </div>
    )
}
export default Main;