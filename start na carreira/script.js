function calculateTip(event){
    event.preventDefault()
    let bill = document.querySelector('#bill').value
    let serviceQual = document.querySelector('#serviceQual').value
    let numOfPeople = document.querySelector('#people').value

    if(bill == '' || serviceQual == 0){
        alert('Por favor, preencha os valores')
        return
    }

    if(numOfPeople == '' || numOfPeople <= 1){
        numOfPeople = 1
        document.querySelector('#each').style.display = 'none'
    } else {
        document.querySelector('#each').style.display = 'block'
    }

    let total = (bill * serviceQual) / numOfPeople
    total = total.toFixed(2)

    document.querySelector('#tip').innerHTML = total
    document.querySelector('#totalTip').style.display = 'block'

}

document.querySelector('#totalTip').style.display = 'none'
document.querySelector('#each').style.display = 'none'

document.querySelector('#tipsForm').addEventListener('submit', calculateTip)