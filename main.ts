let voeding = 20
let knuffel = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 || voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        voeding += 5
    }
})
basic.forever(function () {
    if ((knuffel || voeding) > 0) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        knuffel += 5
    }
})
basic.forever(function () {
    if (true) {
    	
    }
})
