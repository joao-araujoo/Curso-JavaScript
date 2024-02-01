module.exports = class Database {
    static #data = []

    static addUser(user){
        Database.#data.push(user)
        console.log('Usuário criado com sucesso!')
    }

    static async findUser(email){
        const user = Database.data.find(user => user.email === email)
        if(user)
            return user
        else 
            Promise.reject('Oops! Usuário não existe!')
    }

    static login(email, password){
        const userExists = this.findUser(email)
        if(userExists)
            if(userExists.email === email && userExists.password === password)
                console.log(`${userExists.name} está logado!`)
            else 
                Promise.reject('Oops! Senha incorreta!')
        else
            Promise.reject('Oops! Usuário não existe!')
    }

    static get data(){
        return Database.#data
    }
}