let lamp = document.querySelector('img#lamp')
lamp.addEventListener('dblclick', brokeLamp)
document.querySelector('button#on').addEventListener('click', turnLampOn)
document.querySelector('button#off').addEventListener('click', turnLampOff)
let isBroken = false

function turnLampOn(){
    isBroken == false ? lamp.src = 'img/ligada.jpg' : alert('Não é possível ligar uma lâmpada quebrada...')
}

function turnLampOff(){
    isBroken == false ? lamp.src = 'img/desligada.jpg' : alert('Não é possível desligar uma lâmpada quebrada...')
}

function brokeLamp(){
    lamp.src = 'img/quebrada.jpg'
    isBroken = true
}