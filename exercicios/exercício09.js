/*
Declare uma função comum, utilizando uma declaração ou expressão de função. 
Essa nossa função deverá possuir dois parâmetros (name, lastName). 
A nossa função deve mostrar no console a seguinte frase: “Olá name lastName, eu sou uma função!”.
Realizada esta parte do exercício, você deverá:
Replicar o exercício anterior, utilizando Arrow Function. 
Utilize os mesmos parâmetros e retorne no console a mesma frase.
*/

function sayHello(name, lastName){
    console.log(`Olá ${name} ${lastName}, eu sou uma função!`)
}

const sayHelloArrowFunction = (name, lastName) => console.log(`Ola ${name} ${lastName}, eu sou uma função!`)