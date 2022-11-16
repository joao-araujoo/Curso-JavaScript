function insert(num){
    document.querySelector('p#resultado').innerHTML += num
}

function clean(){
    document.querySelector('p#resultado').innerHTML = ''
}

function backspace(){
    let resultado = document.querySelector('p#resultado').innerHTML
    document.querySelector('p#resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){

}