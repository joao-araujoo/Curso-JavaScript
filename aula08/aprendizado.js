let n1 = prompt('Digite um número: ')
let n2 = prompt('Digite outro número: ')

n1 >= n2 ? document.write(`${n1} é maior ou igual a ${n2}<br>`) : document.write(`${n2} é maior ou igual a ${n1}<br>`)
n1 % 2 == 0 && n2 % 2 == 0 ? document.write(`${n1} e ${n2} são números pares<br>`) : document.write(`um ou mais dos valores não são pares<br>`)

let resultado = n1 / 2 + n2 ** 2 
document.write(`${n1} / 2 + ${n2} ** 2 = ${resultado}<br>`)

resultado > 0 ? document.write(`O resultado (${resultado}) é positivo`) : document.write(`O resultado (${resultado}) é negativo`)