let botaosoma = document.querySelector('#botaosoma')
botaosoma.addEventListener('click', somar)
botaosoma.addEventListener('mouseenter', entrousoma)
botaosoma.addEventListener('mouseout', saiusoma)

function somar(){
    botaosoma.style.background = '#736e70'
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 + n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

function entrousoma(){
    botaosoma.style.background = '#aba7a9'
}

function saiusoma(){
    botaosoma.style.background = '#f4e9ed'
}

let botaosubtracao = document.querySelector('#botaosubtracao')
botaosubtracao.addEventListener('click', subtrair)
botaosubtracao.addEventListener('mouseenter', entrousub)
botaosubtracao.addEventListener('mouseout', saiusub)

function subtrair(){
    botaosubtracao.style.background = '#736e70'
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 - n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

function entrousub(){
    botaosubtracao.style.background = '#aba7a9'
}

function saiusub(){
    botaosubtracao.style.background = '#f4e9ed'
}

let botaomultiplicacao = document.querySelector('#botaomultiplicacao')
botaomultiplicacao.addEventListener('click', multiplicar)
botaomultiplicacao.addEventListener('mouseenter', entroumulti)
botaomultiplicacao.addEventListener('mouseout', saiumulti)

function multiplicar(){
    botaomultiplicacao.style.background = '#736e70'
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 * n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

function entroumulti(){
    botaomultiplicacao.style.background = '#aba7a9'
}

function saiumulti(){
    botaomultiplicacao.style.background = '#f4e9ed'
}

let botaodivisao = document.querySelector('#botaodivisao')
botaodivisao.addEventListener('click', dividir)
botaodivisao.addEventListener('mouseenter', entroudiv)
botaodivisao.addEventListener('mouseout', saiudiv)

function dividir(){
    botaodivisao.style.background = '#736e70'
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 / n2
    resultado.innerHTML = `Resultado: <strong>${r.toFixed(2)}</strong>`
}

function entroudiv(){
    botaodivisao.style.background = '#aba7a9'
}

function saiudiv(){
    botaodivisao.style.background = '#f4e9ed'
}

let botaopotencia = document.querySelector('#botaopotencia')
botaopotencia.addEventListener('click', potencia)
botaopotencia.addEventListener('mouseenter', entroupot)
botaopotencia.addEventListener('mouseout', saiupot)

function potencia(){
    botaopotencia.style.background = '#736e70'
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.querySelector('#txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let resultado = document.querySelector('#resultado')
    let r = n1 ** n2
    resultado.innerHTML = `Resultado: <strong>${r}</strong>`
}

function entroupot(){
    botaopotencia.style.background = '#aba7a9'
}

function saiupot(){
    botaopotencia.style.background = '#f4e9ed'
}