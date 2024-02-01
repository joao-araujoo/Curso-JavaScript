const CryptoJS = require('crypto-js')
const Database = require('./database.js')

let idNumber = 1

class User {
    constructor(name, email, password){
        this.id = idNumber
        this.name = name
        this.email = email
        this.password = password
    }
}

function encryptPassword(password){
    return CryptoJS.SHA256(password).toString()
}

function createUser(name, email, password){
    const user = new User(name, email, encryptPassword(password))
    Database.addUser(user)
    idNumber++
}

function login(email, password){
    Database.login(email, encryptPassword(password))
}

async function findUser(email){
    try {
        const userExists = await Database.findUser(email)
        console.log(userExists)

    } catch(error){
        console.log(error)
    }
}
