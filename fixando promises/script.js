// Crie uma função chamada getRandomNumber que 
// retorne uma Promise que resolve com um número aleatório 
// após 1 segundo. Use o Math.random() para gerar o número.

// function getRandomNumber(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 100))
//             reject('Não foi possível gerar um número.')
//         }, 1000)
//     })
// }

// getRandomNumber().then((result) => {
//     console.log(`Número aleatório: ${result}`)
// }).catch((error) => [
//     console.error(error)
// ])

// Crie uma função chamada fetchUserData que simule a busca 
// de informações do usuário em um servidor. Ela deve retornar 
// uma Promise que resolve com um objeto contendo nome, idade 
// e cidade do usuário após 2 segundos.

// function fetchUserData(){
//     return new Promise((resolve, reject) => {
//         const data = {nome: 'João', idade: 16, cidade: 'São José dos Campos'}
//         setTimeout(() => {
//             resolve(data)
//         }, 2000)
//     })
// }

// fetchUserData().then(result => {
//     console.log(`Resultado: ${result}`)
// }).catch(error => [
//     console.log(error)
// ])

