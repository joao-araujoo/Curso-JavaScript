var nome = prompt('Qual o seu nome?')
var n1 = Number(prompt(`${nome}, digite o seu número favorito: `))
var n2 = Number(prompt(`${nome}, digite o seu outro número favorito: `))

var resultado = n1 ** n2

document.write(`${nome}, O resultado da potência de ${n1} elevado a ${n2} é igual a: ${resultado}<br>`)

var n3 = n1 + n2

document.write(`${n3} é igual a ${n1} mais ${n2}<br>`)

n3 *= 3

document.write(`${n3} é o resultado da auto-atribuição simplificada "n3 *= 3"<br>`)

n3++

document.write(`${n3} é o resultado do incremento "n3++"<br>`)