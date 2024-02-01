/*
Elaborar um programa que por meio de uma rotina, verifique se um número
entre 1 e 1000 é divisível por 2 e por 3 e apresente mensagem: 
"Este valor é divisivel por 2 e 3". Caso o valor não atenda as 
condições do problema, mostrar "Valor inválido!"
*/

let número = 0 //O usuário define

function éVálido(n){
    if(n >= 1 && n <= 1000){
        return true 
    } else{
        return false
    }
}

function éDivisivel(n){
    if(n % 2 == 0 && n % 3 == 0){
        console.log(`${n} é divisível por 2 e por 3!`)
    } else{
        console.log(`${n} não é divisível por 2 e por 3.`)
    }
}

if(éVálido(número) == true){
    éDivisivel(número)
} else{
    console.log('Valor inválido!')
}