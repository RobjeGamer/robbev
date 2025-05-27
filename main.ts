let voeding = 20
let knuffel = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel < 10 && knuffel > 0 || voeding < 10 && voeding > 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel < 0 && voeding < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
        dood = 1
    }
    if (input.buttonIsPressed(Button.A)) {
        knuffel += 5
    }
    if (input.buttonIsPressed(Button.B)) {
        voeding += 5
    }
})
