import { useState } from "react";
import Caixa from "./Caixa"
function Main(){
    const [quantidades,setQuantidades] = useState(1)

    function definieQuantidades(novo){
        setQuantidades(novo)
    }
    const [variaveis,setVariaveis] = useState(0)

    function definieVariaveis(novo){
        setVariaveis(novo)
    }
    return(
        <div>
            <h1>Simplex</h1>
            <Caixa quantidade={quantidades} eventoQuan= {definieQuantidades} val={variaveis} eventoVal={definieVariaveis}/>
        </div>
    )
}
export default Main;