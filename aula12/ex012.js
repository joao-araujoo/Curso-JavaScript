let agora = new Date()
let horário = agora.getHours()
console.log(`Agora são exatamente ${horário} horas no horário de Brasília`)

if(horário < 12){
    console.log('Bom dia!')
} else if(horário <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}