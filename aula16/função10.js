/*Faça um programa para imprimir:

1
2   2
3   3   3
.....
n   n   n   n   n   n  ... n
para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.
*/

let número = 24 //numero digitado pelo usuário

function imprimir(n){
    for(let x = 1; x <= n; x++){
        for(let y = 1; y <= x; y++){
            console.log(`${x}   `)
        }
    }
}

imprimir(número)