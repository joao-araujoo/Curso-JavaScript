let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()
let seconds = time.getSeconds()
document.querySelector('span#hours').innerHTML = hours
document.querySelector('span#minutes').innerHTML = minutes
document.querySelector('span#seconds').innerHTML = seconds