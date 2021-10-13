let velocidad = 0
basic.forever(function () {
    velocidad = 200
    for (let index = 0; index < 3; index++) {
        for (let columna = 0; columna <= 4; columna++) {
            for (let fila = 0; fila <= 4; fila++) {
                music.playTone(262, music.beat(BeatFraction.Eighth))
                led.plot(columna, fila)
                basic.pause(velocidad)
                led.unplot(columna, fila)
                basic.pause(velocidad)
            }
        }
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        velocidad += -50
    }
})
