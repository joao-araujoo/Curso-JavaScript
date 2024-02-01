let num = [6, 8, 2, 4, 9, 7]

console.log(num)
console.log(`O nosso vetor tem ${num.length} posições`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

num[6] = 1
num.push(5)

console.log(`O nosso vetor agora tem ${num.length} posições`)

num.sort()
console.log(`O vetor em ordem crescente é: ${num}`)

pos = num.indexOf(8)
console.log(`O valor 8 agora está na posição ${pos}`)

//-1 = NÃO EXISTE
pos = num.indexOf(13)
if(pos == -1){
    console.log('O valor 13 não foi encontrado')
} else{
    console.log(`O valor 13 está na posição ${pos}`)
}
