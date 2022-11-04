const show = function(){
    console.log("Eu sou uma função anônima")
}

show()

setTimeout(function(){
    console.log("Eu executo uma função anônima após 2 segundos")
    arrowShow()
}, 2000)

const arrowShow = () => console.log("Eu sou uma função anônima em formato de arrow function")