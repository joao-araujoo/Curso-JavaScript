let botaoAdicionar = document.querySelector('input#adicionar')
botaoAdicionar.addEventListener('click', adicionar)
let botaoFinalizar = document.querySelector('input#finalizar')
botaoFinalizar.addEventListener('click', finalizar)

let números = []

function estaNaLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    let txtn = document.querySelector('input#txtn')
    if(txtn.value.length == 0){
        alert('[ERRO] Por favor insira um número!')
    } else if(txtn.value < 1 || txtn.value > 100){
        alert('[ERRO] Insira apenas números entre 1 e 100')
    } else if(estaNaLista(txtn.value, números) == true){
        alert('[ERRO] Não insira números repetidos')
    } else{
        let n = Number(txtn.value)
        números.push(n)

        let tab = document.querySelector('select#seltab')
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item) 
    }
}

function finalizar(){

    let resultado = document.querySelector('div#resultado')
    let numeros_cadastrados = 0
    let s = 0
    números.sort()
    for(pos in números){
        s += números[pos]
        numeros_cadastrados++
    }
    resultado.innerHTML = `Ao todo, temos ${numeros_cadastrados} números cadastrados<br>`
    resultado.innerHTML += `O maior número é ${números[numeros_cadastrados-1]}<br>`
    resultado.innerHTML += `O menor número é ${números[0]}<br>`
    resultado.innerHTML += `Somando todos os valores, temos ${s}<br>`
    resultado.innerHTML += `A média dos valores digitados é ${s/numeros_cadastrados}<br>`
}