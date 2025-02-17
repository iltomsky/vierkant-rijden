input.onButtonPressed(Button.A, function () {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    if (Maqueen_V5.Ultrasonic() >= 20) {
        Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
    }
    basic.pause(1000)
})
