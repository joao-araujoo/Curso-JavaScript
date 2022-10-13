let botao = document.querySelector('#botaoverificar')
botao.addEventListener('click', calcular)

function calcular(){
    let txtv = document.querySelector('#txtvel')  
    let res = document.querySelector('#resultado')
    let vel = Number(txtv.value) 
    res.innerHTML = `<p>Sua velocidade atual é de <b>${vel}Km/h</b></p>`

    if(vel > 60){
        res.innerHTML += `<p>Você está <b>multado</b> por excesso de velocidade!</p>`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}