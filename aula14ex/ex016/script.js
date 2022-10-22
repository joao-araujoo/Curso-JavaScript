let botao = document.querySelector('input#botao')
botao.addEventListener('click', contar)

function contar(){
    let txtinicio = document.querySelector('input#txt-inicio')
    let txtfim = document.querySelector('input#txt-fim')
    let txtpasso = document.querySelector('input#txt-passo')

    if(txtinicio != '' && txtfim != '' && txtpasso != ''){
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        let resultado = document.querySelector('div#resultado')
        resultado.innerHTML = ''
        for(let x = inicio; x <= fim; x += passo){
            resultado.innerHTML += `${x} 👉` 
            if(x >= fim || x + passo > fim){
                resultado.innerHTML += `✔`
            }
        } 
    } else{
        alert('[ERRO] Digite todos os campos')
    }
}