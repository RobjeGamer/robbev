input.onButtonPressed(Button.A, function () {
    voeding += voeding + 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += knuffel + 5
})
let knuffel = 0
let voeding = 0
voeding = 20
knuffel = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffel += knuffel - 1
    voeding += voeding - 1
})
basic.forever(function () {
    if (knuffel == 0 || voeding == 0) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (knuffel < 10 || voeding < 10) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (knuffel > 10 || voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
})
