function adicionarIdentidade(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
  
    // Adiciona um zero antes do último elemento da primeira linha
    matriz[0].splice(colunas - 1, 0, 0);

    // Percorre as outras linhas e adiciona a matriz identidade
    for (let i = 1; i < linhas; i++) {
        matriz[i].splice(colunas - 1, 0, 1); // Adiciona um 1 antes do último elemento de cada linha
        for (let j = 0; j < linhas; j++) {
            if (j !== i) {
                matriz[i].push(0); // Adiciona zeros para formar a matriz identidade
            } else {
                matriz[i].push(1); // Adiciona 1 na diagonal para formar a matriz identidade
            }
        }
    }
    return matriz;
}

// Exemplo de uso:
const matriz2x2 = [
    [5, 2],
    [3, 4]
];

const matrizTransformada = adicionarIdentidade(matriz2x2);
console.log(matrizTransformada);
