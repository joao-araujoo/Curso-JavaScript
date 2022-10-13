let botaosoma = document.querySelector('#botaosoma')
botaosoma.addEventListener('click', somar)

function somar(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 + n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

let botaosubtracao = document.querySelector('#botaosubtracao')
botaosubtracao.addEventListener('click', subtrair)

function subtrair(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 - n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

let botaomultiplicacao = document.querySelector('#botaomultiplicacao')
botaomultiplicacao.addEventListener('click', multiplicar)

function multiplicar(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 * n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

let botaodivisao = document.querySelector('#botaodivisao')
botaodivisao.addEventListener('click', dividir)

function dividir(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 / n2
    resultado.innerHTML = `Resultado: <strong>${r.toFixed(2)}</strong>`
}

let botaopotencia = document.querySelector('#botaopotencia')
botaopotencia.addEventListener('click', potencia)

function potencia(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 ** n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}