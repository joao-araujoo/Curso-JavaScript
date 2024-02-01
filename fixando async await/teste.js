async function sumOfNumbers(...numbers){
    if(typeof numbers !== 'number'){
        Promise.reject('arguments must be of type number')
    } else {
        return numbers.reduce((a, n) => a + n)
    }
}

async function execute(...numbers){
    try {
        const summatory = await sumOfNumbers(...numbers)
        console.log(summatory)
    } catch(error){
        console.log(error)
    }
}

execute(5, 6, 7)