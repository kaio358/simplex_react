// passo 1
function menor(matriz) {
   let anterior = 0
   let posicao =0
    for( let j= 0 ; j < matriz[1].length -1; j ){
        
        if( matriz[1][j] < anterior){
            anterior = matriz[1][j]
            posicao = j
        }
        
    }
        
    return posicao
}
// passo 2
function procuraPivo(matriz,posicao) {
    var calculo =  0 
    var atual = 9999999999999
    var pos = 0 
    for( let i= 0 ; i < matriz.length; i ){
        calculo = matriz[(matriz.length -1)][posicao]/matriz[i][posicao]
        if ( (calculo< atual) &&( calculo >0 ) ){
            atual = calculo
            pos = i

        }
        
    }
    return [matriz[pos][posicao],pos]
}

//passo 3
function calcularLinhaPivo(matriz,pivo) {
    linha = pivo[1]
    
    for (let j = 0; j < matriz[linha].length; j++) {
        matriz[linha][j] = matriz[linha][j]/ pivo[0]
        
    }
    return matriz
}

// passo 4 
function calcularOutrasLinhas(matriz, linhaPivo, posLinha){
    for(let i = 0 ; i < matriz.length ; i++){
        if(i != linhaPivo){
            for(let j = 0 ; j<matriz[i].length;j++){
                matriz[i][j] = matriz[i][j] - matriz[linhaPivo][j]* matriz[i][posLinha]
            }
        }
    }
    return matriz
}

