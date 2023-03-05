//? Escreva uma função que receba uma lista de palavras como entrada 
//? e retorne uma nova lista contendo apenas as palavras que começam com a letra 'a'.

const filterWordsStartingWithA = (words) => {
    return words.filter((word) => word[0] === 'a')
}

console.log(filterWordsStartingWithA(['apple', 'banana', 'orange', 'pear', 'avocado'])) // ['apple', 'avocado']


//? Escreva uma função que receba uma string contendo palavras separadas por espaços como entrada
//? e retorne a mesma string com todas as palavras em maiúsculas.

const convertToUpperCase = (string) => string.toUpperCase()
console.log(convertToUpperCase('hello world')) // 'HELLO WORLD'


//? Escreva uma função que receba uma lista de números como entrada
//? e retorne a soma de todos os números pares na lista.

const sumEvenNumbers = (numbers) => {
    return numbers.reduce((total, number) => number % 2 === 0 ? total + number : total + 0, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])) // 20