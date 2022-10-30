let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()
let seconds = time.getSeconds()
document.querySelector('span#hours').innerHTML = hours
document.querySelector('span#minutes').innerHTML = minutes
document.querySelector('span#seconds').innerHTML = seconds

if(seconds < 10){
    document.querySelector('span#seconds').innerHTML = '0' + seconds
} else {
    document.querySelector('span#seconds').innerHTML = seconds
}

if(minutes < 10){
    document.querySelector('span#minutes').innerHTML = '0' + minutes
} else {
    document.querySelector('span#minutes').innerHTML = minutes
}

if(hours < 10){
    document.querySelector('span#hours').innerHTML = '0' + hours
} else {
    document.querySelector('span#hours').innerHTML = hours
}