let botaoAdicionar = document.querySelector('input#adicionar')
botaoAdicionar.addEventListener('click', adicionar)
let botaoFinalizar = document.querySelector('input#finalizar')
botaoFinalizar.addEventListener('click', finalizar)
let resultado = document.querySelector('div#resultado')

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
        alert('[ERRO] Insira apenas números entre 1 e 100!')
    } else if(estaNaLista(txtn.value, números) == true){
        alert('[ERRO] Não insira números repetidos!')
    } else{
        números.push(Number(txtn.value))
        let tab = document.querySelector('select#seltab')
        let item = document.createElement('option')
        item.text = `Valor ${txtn.value} adicionado`
        tab.appendChild(item) 
        resultado.innerHTML = ''
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar(){
    if(números.length == 0){
        alert('[ERRO] Insira valores antes de finalizar!')
    } else{
        let somatório = 0
        let maior = números[0]
        let menor = números[0]

        for(let pos in números){
            if(números[pos] > maior){
                maior = números[pos]
            }
            if(números[pos] < menor){
                menor = números[pos]
            }

            somatório += números[pos]
        }

        resultado.innerHTML = `Ao todo, temos ${números.length} números cadastrados<br>`
        resultado.innerHTML += `O maior número é ${maior}<br>`
        resultado.innerHTML += `O menor número é ${menor}<br>`
        resultado.innerHTML += `Somando todos os valores, temos ${somatório}<br>`
        resultado.innerHTML += `A média dos valores digitados é ${somatório/números.length}<br>`
    }
    
}