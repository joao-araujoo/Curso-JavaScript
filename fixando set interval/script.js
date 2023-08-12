function countBar(seconds) {
    let timer = 0
    let bar = ''
    let percentage = 0
    const percentageProgress = 100 / seconds

    for (let i = 1; i <= seconds; i++) {
        bar += ' '
    }

    const countBarInterval = setInterval(() => {
        bar = bar.replace(' ', '/')
        timer += 1
        percentage += percentageProgress

        console.clear()
        console.log(`Carregando... [${bar}] ${percentage.toFixed(0)}%`)

        if (timer === seconds) {
            clearInterval(countBarInterval)
        }

    }, 1000)

    setTimeout(() => {
        console.log('Concluído! 🎉🥳')
    }, 1000 * (seconds + 1))
}

countBar(2)