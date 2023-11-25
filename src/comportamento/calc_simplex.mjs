// passo 1
function menor(matriz) {
   
   let anterior = 0
   let posicao = 0
    for( let j= 0 ; j < matriz[0].length -1; j++ ){
        
        if( matriz[0][j] < anterior){
            anterior = matriz[0][j]
            posicao = j
        }
        
    }
        
    return [posicao,anterior]
}
// passo 2
function procuraPivo(matriz,posicao) {
    var calculo =  0 
    var atual = 9999999999999
    var pos = 0 
    for( let i= 0 ; i < matriz.length; i++ ){
        calculo = matriz[i][(matriz[i].length -1)]/matriz[i][posicao]
        if ( (calculo< atual) &&( calculo >0 ) ){
            atual = calculo
            pos = i

        }
        
    }
    return [matriz[pos][posicao],pos]
}

//passo 3
function calcularLinhaPivo(matriz,pivo) {

    var linha = pivo[1]
   
    for (let j = 0; j < matriz[linha].length; j++) {
        matriz[linha][j] = matriz[linha][j]/ pivo[0]
        
    }
    return matriz
}

// passo 4 
function calcularOutrasLinhas(matriz, linhaPivo, posLinha){
    const matrizAnterior = matriz
    
    for(let i = 0 ; i < matriz.length ; i++){
        var valorPivoLilha = matriz[i][posLinha]
        if(i != linhaPivo){
            for(let j = 0 ; j<matriz[i].length;j++){
         
                matriz[i][j] = matriz[i][j] + matriz[linhaPivo][j]* ( - valorPivoLilha)
            }
        }
    }
    return matriz
}

// executa passo a passo do calculo

function passo_a_passo(matriz){
    var mat = matriz
    var pos =  menor(mat)

    var procPivo = procuraPivo(mat,pos[0])
    mat = calcularLinhaPivo(mat,procPivo)
    mat = (calcularOutrasLinhas(mat,procPivo[1],pos[0]));
    return mat
}

// como proprio nome diz ele verifica o resultado 
function verifica(matriz) {
   
    var pos = menor(matriz)

    while (pos[1] < 0) {
      

        matriz = passo_a_passo(matriz)
        pos = menor(matriz)
       
    
   }
   return matriz
}
// var mat = [
//     [-10,-12,0,0,0],
//     [1,1,1,0,100],
//     [1,3,0,1,270]
// ]
// var mat = [
//     [-3,-5,0,0,0,0],
//     [2,4,1,0,0,10],
//     [6,1,0,1,0,20],
//     [1,-1,0,0,1,30]
// ]
// console.log(menor(mat)[0]);
// console.log(procuraPivo(mat, menor(mat)[0]));
// console.log(verifica(mat));



export default verifica
