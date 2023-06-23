radio.setGroup(0)
basic.showLeds(`
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("Drive", -1 * input.rotation(Rotation.Pitch))
    } else {
        radio.sendValue("Drive", 0)
    }
})
