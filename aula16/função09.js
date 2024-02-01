//Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
let números = [9, 3, 1]

function maior(){
    números.sort()
    console.log(`O maior número é ${números[2]}`)
}

function menor(){
    números.sort()
    console.log(`O menor número é ${números[0]}`)
}

maior()
menor()