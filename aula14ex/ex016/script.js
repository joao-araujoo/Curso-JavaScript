let botao = document.querySelector('input#botao')
botao.addEventListener('click', contar)

function contar(){
    let txtinicio = document.querySelector('input#txt-inicio')
    let txtfim = document.querySelector('input#txt-fim')
    let txtpasso = document.querySelector('input#txt-passo')
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = ''

    if(txtinicio.value.length == 0  || txtfim.value.length == 0  || txtpasso.value.length == 0){
        alert('[ERRO] Digite todos os campos')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        if(passo <= 0){
            alert('Passo inválido!')
            passo = prompt('Digite um número maior do que zero para o passo:')
        }
        
        if(inicio < fim){
            for(let x = inicio; x <= fim; x += passo){
                resultado.innerHTML += ` ${x} 👉` 
            }  
        } else{
            for(let x = inicio; x >= fim; x -= passo){
                resultado.innerHTML += ` ${x} 👉` 
            }  
        }
        resultado.innerHTML += ` ✔`
    }
}