/*
Escreva um programa que utilize uma sub-rotina para calcular a série
de Fibonacci de N termos. A série de Fibonacci é formada pela
seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ... etc. Esta série caracteriza-se
pela soma de um termo posterior com o seu anterior subseqüente.
Apresentar o resultado.
*/

let resultado = []
let auxiliar = 0
let anterior = 0
let atual = 1

function fibonacci(n){
    for(let x = 1; x <= n; x++){
        resultado.push(auxiliar)
        auxiliar = anterior + atual
        anterior = atual
        atual = auxiliar
    }
}

fibonacci(13)

for(let pos in resultado){
    console.log(resultado[pos])
}

