let conversão = {
    celsius: 0, //O usuário irá determinar
    fahrenheit(){
        return (conversão.celsius * 9/5) + 32
    }
}

console.log(conversão.fahrenheit())