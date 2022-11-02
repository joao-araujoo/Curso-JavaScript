let lamp = document.querySelector('img#lamp')
let buttonOn = document.querySelector('button#on')
let buttonOff = document.querySelector('button#off')
let isBroken = false

buttonOn.addEventListener('click', turnLampOn)
buttonOff.addEventListener('click', turnLampOff)
lamp.addEventListener('dblclick', brokeLamp)

function turnLampOn(){
    isBroken == false ? lamp.src = 'img/ligada.jpg' : alert('Não é possível ligar uma lâmpada quebrada...')
}

function turnLampOff(){
    isBroken == false ? lamp.src = 'img/desligada.jpg' : alert('Não é possível ligar uma lâmpada quebrada...')
}

function brokeLamp(){
    lamp.src = 'img/quebrada.jpg'
    isBroken = true
}