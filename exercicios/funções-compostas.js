function composição(fn1, fn2, fn3, valor){
    return fn3(fn2(fn1(valor)))
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!!!`
}

function darEspaço(texto){
    return texto.split('').join(' ')
}

console.log(composição(gritar, enfatizar, darEspaço, 'cuidado com o buraco'))