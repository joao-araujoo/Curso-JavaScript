/*
Elaborar um programa que leia um número inteiro e apresente uma
mensagem informando se o número é par ou ímpar.
*/

function parimpar(n){
    n % 2 == 0 ? console.log(`${n} é par!`) : console.log(`${n} é ímpar!`)
}

parimpar(4)