serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeLine("" + (input.lightLevel()))
    basic.pause(100)
})
