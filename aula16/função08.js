let numeros = [2, 3, 13]

function soma(n1, n2, n3){
    return n1 + n2 + n3
}

function média(){
    return soma(numeros[0], numeros[1], numeros[2]) / 3
}

console.log(média())