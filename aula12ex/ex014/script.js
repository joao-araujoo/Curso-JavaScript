function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()

    if(minuto < 10){
        msg.innerHTML = `Agora são ${hora}:0${minuto}h.` 
    } else {
        msg.innerHTML = `Agora são ${hora}:${minuto}h.` 
    }
    
    if(hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#d9d6a0'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#cfaa6b'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = '#18132e'
    }
}
