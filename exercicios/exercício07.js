//Crie um programa que por meio de uma função, calcule a potência de 2 números

function potência(b=0, e=0){
    return b**e
}

let números = {base: 11, expoente: 2} //O usuário insere os valores

console.log(potência(números.base, números.expoente))