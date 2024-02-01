document.querySelector('button#iniciar').addEventListener('click', start)
document.querySelector('button#pausar').addEventListener('click', pause)
document.querySelector('button#parar').addEventListener('click', stop)

let seconds = 0
let minutes = 0
let hours = 0
var interval

function start(){
    watch()
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    seconds = 0
    minutes = 0
    document.getElementsByTagName('h1')[0].innerHTML = '00:00:00'
}

function twoDigits(digit){
    if(digit < 10){
        return '0' + digit
    } else{
        return digit
    }
}

function watch(){
    seconds++
    if(seconds == 60){
        minutes++
        seconds = 0
        if(minutes == 60){
            minutes = 0
            hours++
        }
    }
    document.getElementsByTagName('h1')[0].innerHTML = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds)
}