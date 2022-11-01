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
    },

    {
        nome: 'Espanha',
        capital: 'Madrid',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png'
    },

    {
        nome: 'Alemanha',
        capital: 'Berlim',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png'
    },

    {
        nome: 'França',
        capital: 'Paris',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png'
    },

    {
        nome: 'Países Baixos',
        capital: 'Amsterdã',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png'
    },

    {
        nome: 'Rússia',
        capital: 'Moscou',
        bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/125px-Flag_of_Russia.svg.png'
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
    let novaBandeira = Math.floor(Math.random() * 8);
    imagem.src = países[novaBandeira].bandeira
    resposta = países[novaBandeira].nome
    respostaUsuário.value = ''
    respostaUsuário.focus()
}

function próximo(){
    let novaBandeira = Math.floor(Math.random() * 8);
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