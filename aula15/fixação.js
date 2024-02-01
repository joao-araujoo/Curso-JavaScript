// 1- Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.
let vetor = [2, 1]

function crescente(){
    if(vetor[0] > vetor[1]){
        let auxiliar = vetor[0]
        vetor[0] = vetor[1]
        vetor[1] = auxiliar
        console.log(vetor)
    } else{
        console.log(vetor)
    }
}

crescente()

// 2- Crie um programa que some todos os valores de um array

let vetor2 = [1, 2, 3, 4, 5, 6, 7]
let somatório = 0

for(pos in vetor2){
    somatório += vetor2[pos]
}

console.log(somatório)

// 3- Crie um array de 10 posições que receberá 'par' em posições pares e 'ímpar' em posições ímpares

let vetor3 = ['','','','','','','','','','']

for(pos in vetor3){
    if(pos % 2 == 0){
        vetor3[pos] = 'par'
    } else {
        vetor3[pos] = 'ímpar'
    }
    console.log(`Posição: ${pos} = ${vetor3[pos]}`)
}