function calcular(){
    let a = Number(document.querySelector('input#a-value').value)
    let b = Number(document.querySelector('input#b-value').value)
    let c = Number(document.querySelector('input#c-value').value)
    const delta = (b**2) -4 * a * c
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    document.querySelector('div.resultado').innerHTML = `X1 = ${x1} X2 = ${x2}`
}