input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(100)
        pins.servoWritePin(AnalogPin.P2, 40)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
})
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showString("Ebrahim")
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
