const books = []
let idBook = 0

function Book(name, pages, tags, author){
    this.name = name
    this.pages = pages
    this.tags = tags
    this.author = author
    this.inStock = 0
    this.id = idBook
    this.addInStock = (quantity) => {
        this.inStock += quantity
    }
}

//! VERIFICAR UM LIVRO
const findBook = (bookToFind) => {
    for(let pos in books){
        if(books[pos].name === bookToFind || books[pos].id == bookToFind){
            alert(`=== ${books[pos].name} === \n\nPáginas: ${books[pos].pages}\nEtiquetas: ${books[pos].tags}\nAutor: ${books[pos].author.name}\nQuantidade em estoque: ${books[pos].inStock}`)
        } else {
            alert('Livro não encontrado!')
        }
    }
}

//! REMOVER UM LIVRO 
const removeBook = (bookToRemove) => {
    for(let pos in books){
        if(books[pos].name === bookToRemove || books[pos].id == bookToRemove){
            alert(`O livro "${books[pos].name}" foi removido com sucesso!`)
            books.splice(pos, 1)
        } else {
            alert('Livro não encontrado!')
        }
    }
}

//! ADICIONAR LIVRO AO ESTOQUE
const addBookToStock = (bookToAdd) => {
    for(let pos in books){
        if(books[pos].name === bookToAdd || books[pos].id == bookToAdd){
            quantity = Number(prompt(`Livro: ${books[pos].name}\n\nQual a quantidade de livros que deseja adicionar ao estoque?`))
            books[pos].addInStock(quantity)
        } else {
            alert('Livro não encontrado!')
        }
    }
} 

//! LIVRO TEMPORÁRIO PARA TESTES
books.push(new Book('Percy Jackson', 250, ['aventura', 'monstros', 'mitologia'], {name: 'João', age: 16, description: 'joao é um garoto muito bonito'}))

//! INTERFACE
let option
do {
    option = prompt(
`
=== Cadastro de livros ===

O que deseja realizar hoje?
(1) - Cadastrar um livro
(2) - Verificar um livro
(3) - Remover um livro
(4) - Adicionar ao estoque
(5) - Encerrar

Quantidade de livros no catálogo: ${books.length}
`
)

    switch(option){
        case '1':
            let bookName = prompt('Qual o nome do livro?')
            let bookPages = Number(prompt('Quantas páginas tem este livro?'))
            
            let bookTags  = []
            let continuar = true
            while(continuar !== false) {
                tagToAdd = prompt('Insira a tag a ser adicionada...')
                bookTags.push(tagToAdd)
                continuar = confirm('Deseja adicionar mais tags?')
            }

            let bookAuthor = {}
            bookAuthor.name = prompt('Qual o nome do autor do livro?')
            bookAuthor.age = prompt('Qual a idade do autor do livro?')
            bookAuthor.description = prompt('Escreva uma breve descrição do mesmo...')

            const newBook = new Book(bookName, bookPages, bookTags, bookAuthor)
            books.push(newBook)
            idBook++
            break
        case '2':
            bookToFind = prompt('Qual o nome ou o ID do livro que deseja pesquisar?')
            findBook(bookToFind)
            break
        case '3':
            bookToFind = prompt('Qual o nome ou o ID do livro que deseja remover?')
            removeBook(bookToFind)
            break
        case '4':
            bookToFind = prompt('Qual o nome ou o ID do livro que deseja adicionar ao estoque?')
            addBookToStock(bookToFind)
            break

        case '5':
            alert('Encerrando...')
            break

        default:
            alert('Opção inválida!')
            break
    }

} while (option != '5')