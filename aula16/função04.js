//5! = 5 * 4 * 3 * 2 * 1

function fatorial(n){
    let fat = 1
    for(let x = n; x > 1; x--){
        fat *= x
    }
    return fat
}

console.log(fatorial(5))