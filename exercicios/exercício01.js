/*
Criar um algoritmo que calcule uma prestação em atraso. Para tanto,
utilize a fórmula PREST = VALOR + (VALOR * (TAXA/100) * TEMPO).
Apresentar o valor da prestação.
*/

let prestação = {
    valor: 1000,
    taxa: 10,
    tempo: 12,
    prest(){
        return prestação.valor + (prestação.valor + (prestação.taxa/100) * prestação.tempo)
    }
}

console.log(`O valor da prestação em atraso é igual a: ${prestação.prest()}`)