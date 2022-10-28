let países = [
    {
        nome: 'Brasil',
        capital: 'Brasília',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png'
    },

    {   
        nome: 'Estados Unidos',
        capital: 'Washington',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },

    {
        nome: 'México',
        capital: 'Cidade do México',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    }
]

//Brasil = países[0], EUA = países[1], México = países[2]...

let imagem = document.querySelector('img#imagem')
let botaoVerificar = document.querySelector('button#verificar')
let botaoPróximo = document.querySelector('button#proximo')
let resultado = document.querySelector('div#resultado')
let resposta = ''
let respostaUsuário = document.querySelector('input#resposta')

botaoVerificar.addEventListener('click', verificar)
botaoPróximo.addEventListener('click', próximo)

function recarregar(){
    let novaBandeira = Math.floor(Math.random() * 3);
    imagem.src = países[novaBandeira].bandeira
    resposta = países[novaBandeira].nome
    respostaUsuário.value = ''
    respostaUsuário.focus()
}

function próximo(){
    let novaBandeira = Math.floor(Math.random() * 3);
    imagem.src = países[novaBandeira].bandeira
    resposta = países[novaBandeira].nome
    respostaUsuário.value = ''
    respostaUsuário.focus()
    resultado.innerHTML = ''
}

function verificar(){
    respostaUsuário = document.querySelector('input#resposta')
    if(respostaUsuário.value === resposta){
        resultado.innerHTML = 'Resposta correta!'
    } else{
        resultado.innerHTML = 'Resposta incorreta.'
    }
}