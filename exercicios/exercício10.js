/*
Agora, no exercício dois, criaremos uma função chamada descobreDiametro, 
onde receberemos um parâmetro chamado raio e um parâmetro chamado diametro. 
Dentro da função, retornaremos o resultado do seu diâmetro.
Realizada a primeira parte do exercício, replique o exercício utilizando Arrow Function.
Não esqueça de mostrar o resultado no console!
*/

function descobreDiametro(raio, diâmetro=0){
    diâmetro = 2 * 3.1415 * raio
    return diâmetro.toFixed(2)
}

console.log(descobreDiametro(5))

const descobreDiametroArrowFunction = (raio, diâmetro=0) => diâmetro = 2 * 3.1415 * raio 

console.log(descobreDiametroArrowFunction(5))