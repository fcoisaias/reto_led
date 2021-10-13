def on_forever():
    for colujmna in range(5):
        for fila in range(5):
            music.play_tone(262, music.beat(BeatFraction.EIGHTH))
            led.plot(colujmna, fila)
            basic.pause(100)
            led.unplot(colujmna, fila)
            basic.pause(100)
    for fila2 in range(5):
        for colujmna2 in range(5):
            music.play_tone(262, music.beat(BeatFraction.HALF))
            led.plot(colujmna2, fila2)
            basic.pause(100)
            led.unplot(colujmna2, fila2)
            basic.pause(100)
    basic.show_icon(IconNames.HEART)
    music.play_melody("C F G D A G B C ", 120)
basic.forever(on_forever)
