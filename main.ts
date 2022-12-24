input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.ForeverInBackground)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
})
music.playSoundEffect(music.createSoundEffect(
WaveShape.Noise,
5000,
3603,
255,
0,
3146,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.UntilDone)
basic.showString("Hallo")
