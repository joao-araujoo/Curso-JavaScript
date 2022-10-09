let elemento = prompt('Qual elemento deseja selecionar?')
let posição = prompt('Qual a posição deste elemento?')

let escolha = document.getElementsByClassName(elemento)[posição-1]
//let escolha = document.getElementsByTagName(elemento)[posição-1]

document.write('<br><br>O elemento presenta nestas condições é: ' + escolha.innerText)

let cor = prompt('Qual cor deseja atribuir a este elemento?')
escolha.style.color = cor

let cor_fundo = prompt('Qual cor de fundo deseja atribuir a este elemento?')
escolha.style.background = cor_fundo