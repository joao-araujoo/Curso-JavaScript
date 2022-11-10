function calcular(){
    let peso = Number(document.querySelector('input#peso').value)
    let altura = Number(document.querySelector('input#altura').value)
    let imc = peso / (altura ** 2)
    document.querySelector('.resultado').innerHTML = `${imc.toFixed(1)} `

    if(imc < 18.5){
        document.querySelector('.resultado').innerHTML += ' - Abaixo do peso'
    } else if(imc < 24.9){
        document.querySelector('.resultado').innerHTML += ' - Peso ideal'
    } else if(imc < 29.9){
        document.querySelector('.resultado').innerHTML += ' - Levemente acima do peso'
    } else if(imc < 34.9){
        document.querySelector('.resultado').innerHTML += ' - Obesidade grau I'
    } else if(imc < 39.9){
        document.querySelector('.resultado').innerHTML += ' - Obesidade grau II'
    } else{
        document.querySelector('.resultado').innerHTML += ' - Obesidade grau III'
    }
}