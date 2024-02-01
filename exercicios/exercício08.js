//Desenvolva um programa que calcule a conversão de um valor em dólar (U$) para real (R$)

let valores = {
    cotaçãoDólar: 5.12, //Valor atual do dólar
    Dólares: 5, //Valor em dólar para conversão
    conversão(){
        return this.cotaçãoDólar * this.Dólares
    }
}

console.log(valores.conversão())