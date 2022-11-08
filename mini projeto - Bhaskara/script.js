const deltaMenorQueZero = (d) => d < 0

function calcular() {
    let a = Number(document.querySelector('input#a-value').value)
    let b = Number(document.querySelector('input#b-value').value)
    let c = Number(document.querySelector('input#c-value').value)

    if(a == '' && b == '' && c == ''){
        alert('Por favor, insira ao menos um número!')
    } else{
        let delta = (b ** 2) - 4 * a * c

        if(deltaMenorQueZero(delta)){
            document.querySelector('div.resultado').innerHTML = `X = ∅<br>Nenhuma raíz real`
            resetar(a, b, c)
        } else if(delta == 0){
            const x = -b / (2 * a)
            document.querySelector('div.resultado').innerHTML = `X = ${x.toFixed(2)}<br>Uma raíz real`
            resetar(a, b, c)
        } else{
            const x1 = (-b + Math.sqrt(delta)) / (2 * a)
            const x2 = (-b - Math.sqrt(delta)) / (2 * a)
            document.querySelector('div.resultado').innerHTML = `X1 = ${x1.toFixed(2)} X2 = ${x2.toFixed(2)}<br>Duas raízes reais`
            resetar(a, b, c)
        }
    }
}

function resetar(A, B, C){
    A = document.querySelector('input#a-value').value = ''
    B = document.querySelector('input#b-value').value = ''
    C = document.querySelector('input#c-value').value = ''
}