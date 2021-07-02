scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    if (sementes >= 1) {
        tiles.setTileAt(location, assets.tile`myTile48`)
        sementes += -1
    }
})
let sementes = 0
sementes = 81
tiles.setTilemap(tilemap`level2`)
game.showLongText("Este jogo é inspirado num jogo real \"Stardew Valley\" e tem como objetivo cuidar de uma fazenda.", DialogLayout.Bottom)
game.showLongText("o jogo consiste em plantar, vender os produtos colhidos", DialogLayout.Bottom)
game.showLongText("para andar tens de utilizar as setas esquerda, direita, fente/cima e trás/baixo.", DialogLayout.Bottom)
game.showLongText("começas com 81 sementes e 500 moedas", DialogLayout.Bottom)
pause(100)
info.setScore(500)
tiles.setTilemap(tilemap`level1`)
pause(100)
let jogador = sprites.create(img`
    ......111111......
    .....11ffff11.....
    ....11ff44ff11....
    ...11f545545f11...
    ..11fe455554ef11..
    ..1fb3e4444e3bf1..
    .11f3333333333f11.
    .1f33eb3ee3be33f1.
    .1f33ffeeeeff33f1.
    .1fbbfbfeefbfbbf1.
    11fbbe1f44f1ebbf11
    1ffbbf444444fbbff1
    1fbbfffeeeefffbbf1
    11feefbddddbfeef11
    .11e4cddddddc4e11.
    ..1efbdbdbdbbfe1..
    ..11ff1d1d1dff11..
    ...111ffbbff111...
    .....11111111.....
    `, SpriteKind.Player)
controller.moveSprite(jogador)
scene.cameraFollowSprite(jogador)
pause(200)
game.showLongText("semeia nos canteiros para as plantas crescerem", DialogLayout.Bottom)
pause(10000)
game.showLongText("não te esqueças de regar as plantas", DialogLayout.Bottom)
forever(function () {
    music.playMelody("C5 B G D F E E C ", 120)
    music.playMelody("B A G A G F A C5 ", 120)
})
