basic.forever(function () {
    for (let colujmna = 0; colujmna <= 4; colujmna++) {
        for (let fila = 0; fila <= 4; fila++) {
            music.playTone(262, music.beat(BeatFraction.Eighth))
            led.plot(colujmna, fila)
            basic.pause(100)
            led.unplot(colujmna, fila)
            basic.pause(100)
        }
    }
    for (let fila = 0; fila <= 4; fila++) {
        for (let colujmna = 0; colujmna <= 4; colujmna++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            led.plot(colujmna, fila)
            basic.pause(100)
            led.unplot(colujmna, fila)
            basic.pause(100)
        }
    }
    basic.showIcon(IconNames.Heart)
    music.playMelody("C F G D A G B C ", 120)
})
