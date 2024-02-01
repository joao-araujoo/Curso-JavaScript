let botao = document.querySelector('input#botao')
botao.addEventListener('click', tabuada)

function tabuada(){
    let txtn = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if(txtn.value.length == 0){
        alert('[ERRO] Insira um número!')
    } else{
        let n = Number(txtn.value)
        let x = 1
        tab.innerHTML = ''
        while(x <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n * x}`
            item.value = `tab${x}`
            tab.appendChild(item)
            x++
        }
    }
}