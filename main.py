def on_button_pressed_a():
    for index in range(4):
        pins.servo_write_pin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servo_write_pin(AnalogPin.P2, 40)
        basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music._play_default_background(music.built_in_playable_melody(Melodies.BIRTHDAY),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)

pins.digital_write_pin(DigitalPin.P1, 1)
basic.show_string("Hello!")

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
basic.forever(on_forever)
