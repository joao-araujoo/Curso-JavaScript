/*
Elaborar um programa que possua uma sub-rotina que calcule e
permita apresentar o somatório dos N primeiros números inteiros,
definidos por um operador. (1+2+3+4+5+6+7+...+N).
*/

let s = 0

function somatório(n){
    for(let x = 1; x <= n; x++){
        s += x
        console.log(`${x}° número: ${s}`)
    }
    
}

somatório(5)