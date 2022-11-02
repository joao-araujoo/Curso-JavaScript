/*
function sum(a, b){
    return a + b
}
*/

const sum = (a, b) => a + b


/*
function isAdult(age){
    return age >= 18
}
*/

//Com apenas 1 parâmetro, o parênteses pode ser omitido
const isAdult = age => age >= 18


/*
function getRandomNumber(){
    return Math.random()
}
*/

//Se não há parâmetros, o parênteses fica vazio
const getRandomNumber = () => Math.random()


/*
document.addEventListener('click', function(){
    console.log('clicked')
})
*/

document.addEventListener('click', () => console.log('clicked'))