serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeLine("" + (input.soundLevel()))
    basic.pause(100)
})
