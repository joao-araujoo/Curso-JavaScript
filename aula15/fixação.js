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