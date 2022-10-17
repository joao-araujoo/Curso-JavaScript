function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'h-criança.jpg')
            } else if(idade < 21){
                //adolescente
                img.setAttribute('src', 'h-adolescente.jpg')
            } else if(idade < 55){
                //adulto
                img.setAttribute('src', 'h-homem.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'h-idoso.jpg')
            }
        } else {
            genero = 'mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'm-criança.jpg')
            } else if(idade < 21){
                //adolescente
                img.setAttribute('src', 'm-adolescente.jpg')
            } else if(idade < 55){
                //adulto
                img.setAttribute('src', 'm-mulher.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'm-idosa.jpg')

            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}