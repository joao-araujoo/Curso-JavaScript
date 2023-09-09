class Music {
    constructor(title, artist, duration){
        this.title = title
        this.artist = artist
        this.duration = duration
    }
}

class Playlist {
    musics = []
    currentIndex = 0
    
    get currentIndex(){
        console.log(this.currentIndex)
    }

    addMusic(...musics){
        musics.forEach(music => this.musics.push(music))
    }

    showMusics(){
        this.musics.forEach(music => console.log(`- ${music.title}, ${music.artist} - ${music.duration}`))
    }

    play(){
        const currentMusic = this.musics[this.currentIndex]
        console.log(`${currentMusic.title}, ${currentMusic.artist} - ${currentMusic.duration }`)
    }

    nextMusic(){
        this.currentIndex++
    }

    backMusic(){
        this.currentIndex--
    }

    removeMusic(index){
        // the first parameter refers to where it will start, the second the number of items that will be removed
        this.musics.splice(index, 1)
    }
}

const music1 = new Music('Negro Drama', 'Racionais', '6:51')
const music2 = new Music('Diário de um Detento', 'Racionais', '7:31')
const music3 = new Music('Como Tudo Deve Ser', 'Charlie Brown Jr.', '4:33')
const music4 = new Music('Não Existe Amor em SP', 'Criolo', '4:40')
const music5 = new Music('Prova de Carinho', 'Adoniran Barbosa', '2:02')

const nacionais = new Playlist()

nacionais.addMusic(music1, music2, music3, music4, music5)

console.log(nacionais.currentIndex)
nacionais.play()
nacionais.nextMusic()
console.log(nacionais.currentIndex)
nacionais.play()
nacionais.nextMusic()
console.log(nacionais.currentIndex)
nacionais.play()
nacionais.nextMusic()
console.log(nacionais.currentIndex)
nacionais.play()
nacionais.nextMusic()
console.log(nacionais.currentIndex)
nacionais.play()

nacionais.backMusic()
console.log(nacionais.currentIndex)
nacionais.play()
nacionais.backMusic()
console.log(nacionais.currentIndex)
nacionais.play()
nacionais.backMusic()
console.log(nacionais.currentIndex)
nacionais.play()
nacionais.backMusic()
console.log(nacionais.currentIndex)
nacionais.play()

nacionais.showMusics()
nacionais.removeMusic(3)
nacionais.showMusics()