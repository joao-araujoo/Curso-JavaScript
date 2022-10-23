let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/* MANEIRA ERRADA
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

+ OU -
for(let x=0; x < valores.length; x++){
    console.log(`O ${x+1}° valor do vetor é: ${valores[x]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${Number(pos)+1} tem o valor: ${valores[pos]}`)
}