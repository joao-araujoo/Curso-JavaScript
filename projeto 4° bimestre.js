
let disciplinas = []

function preencherDisciplinas(){
    for(let x = 0; x <= 2; x++){
        disciplinas[x] = prompt(`Digite o nome da ${x+1}° disciplina:`)
    }
}

preencherDisciplinas()

let mediasbimestrais = [
    {
        nome: disciplinas[0],
        nota: [ , , , ]
    },
    {
        nome: disciplinas[1],
        nota: [ , , , ]
    },
    {
        nome: disciplinas[2],
        nota: [ , , , ,]
    }
]

function preencherMediasBimestrais(){
    for(let x = 0; x <= 2; x++){
        for(let y = 0; y <= 3; y++){
            mediasbimestrais[x].nota[y] = prompt(`Digite a ${y+1}° nota de ${mediasbimestrais[x].nome}:`)
        }
    }
}

preencherMediasBimestrais()

let totalPontosAno = [0, 0, 0]

function preencherTotalPontosAno(){
    for(let x = 0; x <= 2; x++){
        for(let y = 0; y <= 3; y++){
            totalPontosAno[x] += Number(mediasbimestrais[x].nota[y])
        }
    }
}

preencherTotalPontosAno()

for(let x = 0; x <= 2; x++){
    if(totalPontosAno[x] > 24){
        alert(`APROVADO em ${mediasbimestrais[x].nome}`)
    } else if(totalPontosAno[x] >= 15 && totalPontosAno[x] < 24){
        alert(`EXAME FINAL em ${mediasbimestrais[x].nome}`)
    } else{
        alert(`REPROVADO em ${mediasbimestrais[x].nome}`)
    }
}
