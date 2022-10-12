let botaon1 = document.querySelector('#txtn1')
let botaon2 = document.querySelector('#txtn2')

botaon1.addEventListener('click', atribuirn1)
botaon2.addEventListener('click', atribuirn2)

let n1 = 0
let n2 = 0

function atribuirn1(){
    n1++
    botaon1.innerHTML = `${n1}`
}
function atribuirn2(){
    n2++
    botaon2.innerText = n2
}

let resultado = document.querySelector('#resultado')

let botaosomar = document.querySelector('#somar')
botaosomar.addEventListener('click', soma)

function soma(){
    resultado.innerHTML = `Resultado: <strong>${n1 + n2}</strong>`
    n1 = 0
    n2 = 0
    botaon1.innerText = n1
    botaon2.innerText = n2
}