function calcular(){
    let peso = Number(document.querySelector('input#peso').value)
    let altura = Number(document.querySelector('input#altura').value)
    let imc = peso / (altura ** 2)
    document.querySelector('.resultado').innerHTML = `${imc.toFixed(1)}`
}