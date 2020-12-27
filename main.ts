namespace SpriteKind {
    export const teleport = SpriteKind.create()
    export const Game = SpriteKind.create()
    export const fontana = SpriteKind.create()
    export const monstersmall = SpriteKind.create()
    export const monsterboss = SpriteKind.create()
    export const door = SpriteKind.create()
    export const table = SpriteKind.create()
    export const dog = SpriteKind.create()
    export const pet = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 4 2 2 2 2 2 2 d 4 . . 
        . . . . 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 d 2 2 2 2 2 2 4 4 . . 
        . . 4 4 6 6 6 6 6 6 . . . . 
        . . . . f f f f f f . . . . 
        . . . . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `],
    250,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . . f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . . f f f f f . . . . 
        . . . . . f f . f f . . . . 
        `,img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . . f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `],
    250,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f . . . . . 
        . . . . . f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f . . . . . 
        . . . . f f . f f . . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f . . . . . 
        . . . . . f f f . . . . . . 
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Game, function (sprite, otherSprite) {
    UomoSuLeva += 1
    music.stopAllSounds()
    music.playMelody("C5 A - F - A - C5 ", 600)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . f e 4 4 4 4 4 4 . . . . 
        . . 4 d d e 2 2 2 b 4 e . . 
        . . e d d e 2 2 2 2 d 4 . . 
        . . . e e f 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 b 2 2 2 2 b 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 e f . . 
        . . e 4 b 2 2 2 e d d 4 . . 
        . . 4 d 2 2 2 2 e d d e . . 
        . . 4 4 6 6 6 6 6 e e . . . 
        . . . . f f f f f f . . . . 
        . . . . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 b 2 2 2 2 b 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleport, function (sprite, otherSprite) {
    Johnny.setPosition(22, 22)
    controller.moveSprite(Johnny, 0, 0)
    music.playMelody("C5 B A G F E D C ", 380)
    Johnny.say("Where am I?", 2000)
    pause(2010)
    controller.moveSprite(Johnny, 60, 60)
    while (UomoSuLeva == 0) {
        music.playMelody("E B C5 A B G A F ", 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monsterboss, function (sprite, otherSprite) {
    myDart = darts.create(img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . c c c . . . . . . . 
        . . c c c c c c c . . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c c c c c c c c c c . . c . 
        c c c c c c c c c c c c . . c . 
        . c c c c c c c c c . . . c c c 
        . . c c c c c c c c . . . . c c 
        . . . c . c c c c c . . . . . . 
        . . . . . c c c c . . c c c . . 
        . . . . . c c . . . . c c c c . 
        . . . . . . . c c . . . c c . . 
        . . . . . . . c c c c . . . . . 
        . . . . . . . . c c c . . . . . 
        `, SpriteKind.Player)
    music.stopAllSounds()
    status_bar_list = statusbars.allOfKind(StatusBarKind.Health)
    music.playMelody("D G E D - - - - ", 600)
})
let status_bar_list: StatusBarSprite[] = []
let myDart: Dart = null
let Johnny: Sprite = null
let UomoSuLeva = 0
UomoSuLeva = 0
scene.setBackgroundColor(13)
let statusbar = statusbars.create(40, 10, StatusBarKind.Health)
statusbar.setColor(7, 2, 6)
statusbar.setLabel("HP", 15)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setBarBorder(1, 1)
let myMinimap = minimap.minimap(MinimapScale.Half, 2, 2)
minimap.includeSprite(myMinimap, statusbar, MinimapSpriteScale.MinimapScale)
let monster_boss = sprites.create(img`
    ......................aaaaaaaaaa..............................
    ......................aaaaaaaaaa..............................
    ....................aaaaaaaaaaaaaa............................
    ....................aaaaaaaaaaaaaa............................
    ....................aa77aaaaaa77aa............................
    ....................aa77aaaaaa77aa............................
    ....................aaaaffaaffaaaa............................
    ....................aaaaffaaffaaaa............................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaaaaffffffaaaaaa..........................
    ..................aaaaaaffffffaaaaaa..........................
    ..............aaaaaaaaaa11ff11aaaaaaaaaa......................
    ..............aaaaaaaaaa11ff11aaaaaaaaaa......................
    ..........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..............
    ..........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..............
    ........aaaaaaccccccccccaaaaaaaaccccccccccccaaaaaa............
    ........aaaaaaccccccccccaaaaaaaaccccccccccccaaaaaa............
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaccccaaaaa..........
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaccccaaaaa..........
    ......aaaaaaaaaaaaaaaaaaaacccccaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaacccccaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaaaaaaaaaccacccccaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaaaaaaaccacccccaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaccccaaaaacccccaaaaaaaaccccaaaaaaaaaaaaaaa....
    ....aaaaaaaa....accccaaaaacccccaaaaaaaaccccaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaa....aaaaaaaaa....
    ....aaaaaaaa....aaaaaaaaccaaaaaaaaaaaccaaaaaa....aaaaaaaaa....
    ..aaaaaaaaaaaa....aaaaaaccaaaaaaaaaaaccaaaa......aaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccaaaaaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa....aaaaaaaaaaaaa
    ..aaccaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaccaaa..
    ..aaccaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaccaaa..
    ..aaaaccaaaa....aaaaaaaaa..dddddd....aaaaaaaa....aaaaccaaaaa..
    ..aaaaccaaaa....aaaaaaaaa..dddddd....aaaaaaaaaa..aaaaccaaaaa..
    ....aaaaccaa..aaaaaaaaa....dddddd......aaaaaaaa..aaccaaaaa....
    ....aaaaccaa..aaaaaaaaa....dddddd......aaaaaaaa..aaccaaaaa....
    ......aaaa....aaaaaaaaa..dddddd........aaaaaaaa....aaaaa......
    ......aaaa....aaaaaaaaa..dddddd........aaaaaaaa....aaaaa......
    ..............aaaaaaaaa..dddddd........aaaaaaaa..........c....
    ..............aaaaaaaaa..dddddd........aaaaaaaa..........c....
    ....c.....aaaaaaaaaaaaa..dddddddddddd..aaaaaaaaaaa......cc....
    ....c.....aaaaaaaaaaaaa.....ddddddddd..aaaaaaaaaaa......ccc...
    ...ccc..aaaaaaaaaaaaaaa.....ddddd33dd..aaaaaaaaaaaaa.....cc...
    ....c...aaaaaaaaaaaaaaa.......ddd33dd..aaaaaaaaaaaaa......c...
    ........aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa..........
    ...cc...aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa....ccc...
    `, SpriteKind.monsterboss)
animation.runImageAnimation(
monster_boss,
[img`
    ......................aaaaaaaaaa..............................
    ......................aaaaaaaaaa..............................
    ....................aaaaaaaaaaaaaa............................
    ....................aaaaaaaaaaaaaa............................
    ....................aa77aaaaaa77aa............................
    ....................aa77aaaaaa77aa............................
    ....................aaaaffaaffaaaa............................
    ....................aaaaffaaffaaaa............................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaaaaffffffcaaaaa..........................
    ..................aaaaacffffffcaaaaa..........................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ........aaaaaacccccccaaaaacccaaaaaccccccccccaaaaaa............
    ........aaaaaacccccccccaaaaaaaaaccccccccccccaaaaaa............
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaccccaaaaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaa....
    ....aaaaaaaa....accccaaaaaaccaaaaaaaaaaccccaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaa....aaaaaaaaa....
    ....aaaaaaaa....aaaaaaaaccaaaaaaaaaaaccaaaaaa....aaaaaaaaa....
    ..aaaaaaaaaaaa....aaaaaaccaaaaaaaaaaaccaaaa......aaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccaaaaaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa....aaaaaaaaaaaaa
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaaaa..aaaaaaaaaaa..
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaaaa....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaaaa....
    ..............aaaaaaaaa...ddddd........aaaaaaaa...............
    ..............aaaaaaaaa...ddddd........aaaaaaaa...............
    ....c.....aaaaaaaaaaaaa...ddddddddddd..aaaaaaaaaaa......c.....
    ....c.....aaaaaaaaaaaaa.....ddddddddd..aaaaaaaaaaa......cc....
    ...ccc..aaaaaaaaaaaaaaa.....ddddd33dd..aaaaaaaaaaaaa.....c....
    ....c...aaaaaaaaaaaaaaa.......ddd33dd..aaaaaaaaaaaaa.....c....
    ........aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa..........
    ........aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa..........
    `,img`
    ......................aaaaaaaaaa..............................
    ......................aaaaaaaaaa..............................
    ....................aaaaaaaaaaaaaa............................
    ....................aaaaaaaaaaaaaa............................
    ....................aa77aaaaaa77aa............................
    ....................aa77aaaaaa77aa............................
    ....................aaaaffaaffaaaa............................
    ....................aaaaffaaffaaaa............................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaaaaffffffcaaaaa..........................
    ..................aaaaacffffffcaaaaa..........................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ........aaaaaacccccccaaaaacccaaaaaccccccccccaaaaaa............
    ........aaaaaacccccccccaaaaaaaaaccccccccccccaaaaaa............
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaccccaaaaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaa....
    ....aaaaaaaa....accccaaaaaaccaaaaaaaaaaccccaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaa....aaaaaaaaa....
    ....aaaaaaaa....aaaaaaaaccaaaaaaaaaaaccaaaaaa....aaaaaaaaa....
    ..aaaaaaaaaaaa....aaaaaaccaaaaaaaaaaaccaaaa......aaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccaaaaaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa....aaaaaaaaaaaaa
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaaaa..aaaaaaaaaaa..
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ...cccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ....c.........aaaaaaaaa...ddddd........aaaaaaaa..........c....
    ..............aaaaaaaaa...ddddd........aaaaaaaa...............
    ..........aaaaaaaaaaaaa...ddddddddddd..aaaaaaaaaaa............
    ....c.....aaaaaaaaaaaaa.....ddddddddd..aaaaaaaaaaa......c.....
    ....c...aaaaaaaaaaaaaaa.....ddddd33dd..aaaaaaaaaaaaa....cc....
    ...ccc..aaaaaaaaaaaaaaa.......ddd33dd..aaaaaaaaaaaaa.....c....
    ....c...aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa.....c....
    ........aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa..........
    `,img`
    ......................aaaaaaaaaa..............................
    ......................aaaaaaaaaa..............................
    ....................aaaaaaaaaaaaaa............................
    ....................aaaaaaaaaaaaaa............................
    ....................aa77aaaaaa77aa............................
    ....................aa77aaaaaa77aa............................
    ....................aaaaffaaffaaaa............................
    ....................aaaaffaaffaaaa............................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaaaaffffffcaaaaa..........................
    ..................aaaaacffffffcaaaaa..........................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ........aaaaaacccccccaaaaacccaaaaaccccccccccaaaaaa............
    ........aaaaaacccccccccaaaaaaaaaccccccccccccaaaaaa............
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaccccaaaaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaa....
    ....aaaaaaaa....accccaaaaaaccaaaaaaaaaaccccaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaa....aaaaaaaaa....
    ....aaaaaaaa....aaaaaaaaccaaaaaaaaaaaccaaaaaa....aaaaaaaaa....
    ..aaaaaaaaaaaa....aaaaaaccaaaaaaaaaaaccaaaa......aaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccaaaaaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa....aaaaaaaaaaaaa
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaaaa..aaaaaaaaaaa..
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ...cccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ....cc........aaaaaaaaa...ddddd........aaaaaaaa..........c....
    ....c.........aaaaaaaaa...ddddd........aaaaaaaa..........c....
    ..........aaaaaaaaaaaaa...ddddddddddd..aaaaaaaaaaa............
    ..........aaaaaaaaaaaaa.....ddddddddd..aaaaaaaaaaa............
    ....c...aaaaaaaaaaaaaaa.....ddddd33dd..aaaaaaaaaaaaa....c.....
    ....c...aaaaaaaaaaaaaaa.......ddd33dd..aaaaaaaaaaaaa....cc....
    ...ccc..aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa.....c....
    ....c...aaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa.....c....
    `,img`
    ......................aaaaaaaaaa..............................
    ......................aaaaaaaaaa..............................
    ....................aaaaaaaaaaaaaa............................
    ....................aaaaaaaaaaaaaa............................
    ....................aa77aaaaaa77aa............................
    ....................aa77aaaaaa77aa............................
    ....................aaaaffaaffaaaa............................
    ....................aaaaffaaffaaaa............................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaaaaffffffcaaaaa..........................
    ..................aaaaacffffffcaaaaa..........................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ........aaaaaacccccccaaaaacccaaaaaccccccccccaaaaaa............
    ........aaaaaacccccccccaaaaaaaaaccccccccccccaaaaaa............
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaccccaaaaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaa....
    ....aaaaaaaa....accccaaaaaaccaaaaaaaaaaccccaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaa....aaaaaaaaa....
    ....aaaaaaaa....aaaaaaaaccaaaaaaaaaaaccaaaaaa....aaaaaaaaa....
    ..aaaaaaaaaaaa....aaaaaaccaaaaaaaaaaaccaaaa......aaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccaaaaaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa....aaaaaaaaaaaaa
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaaaa..aaaaaaaaaaa..
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ...cc.........aaaaaaaaa...ddddd........aaaaaaaa..........c....
    ....cc........aaaaaaaaa...ddddd........aaaaaaaa..........c....
    ....c.....aaaaaaaaaaaaa...ddddddddddd..aaaaaaaaaaa.......c....
    ..........aaaaaaaaaaaaa.....ddddddddd..aaaaaaaaaaa............
    ........aaaaaaaaaaaaaaa.....ddddd33dd..aaaaaaaaaaaaa..........
    c...c...aaaaaaaaaaaaaaa.......ddd33dd..aaaaaaaaaaaaa.c..c...c.
    .c..c..ccaaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa..c.cc.c..
    ...ccc..ccaaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa.....c....
    `,img`
    ......................aaaaaaaaaa..............................
    ......................aaaaaaaaaa..............................
    ....................aaaaaaaaaaaaaa............................
    ....................aaaaaaaaaaaaaa............................
    ....................aa77aaaaaa77aa............................
    ....................aa77aaaaaa77aa............................
    ....................aaaaffaaffaaaa............................
    ....................aaaaffaaffaaaa............................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaaaaff11ffaaaaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaa11ffffff11aaaa..........................
    ..................aaaaaaffffffcaaaaa..........................
    ..................aaaaacffffffcaaaaa..........................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..............aaaaaaaaac11ff11caaaaaaaaa......................
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ..........aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaa..............
    ........aaaaaacccccccaaaaacccaaaaaccccccccccaaaaaa............
    ........aaaaaacccccccccaaaaaaaaaccccccccccccaaaaaa............
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaccccccaaaaaaccccccccccccaaaaaaaaaacccaaaaa..........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaccaaaaaaaaaaaaaa........
    ......aaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaa......
    ......aaaaaaaaaaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaaaaaaaccaaccaaaaccaaaaaaccccaaaaaaaaaaa......
    ....aaaaaaaa..aaaccccaaaaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaa....
    ....aaaaaaaa....accccaaaaaaccaaaaaaaaaaccccaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaaaa..aaaaaaaaa....
    ....aaaaaaaa....aaaacccccccccccccccccccccaaaa....aaaaaaaaa....
    ....aaaaaaaa....aaaaaaaaccaaaaaaaaaaaccaaaaaa....aaaaaaaaa....
    ..aaaaaaaaaaaa....aaaaaaccaaaaaaaaaaaccaaaa......aaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccccccaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    ..aaaaaaaaaaaa....aaccaaaaaaaaaaaaaaaccaaaa....aaaaaaaaaaaaa..
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaaaaaaaccaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaa..aaaaccaaaaaddaaddaaaaaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa..aaaaaaaaaaaaaaa
    aaaaaaaaaaaa....aaaaaaaaaddddddddddddaaaaaaaa....aaaaaaaaaaaaa
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..ddddddddddaaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaa....aaaaaaaaaaa..
    ..aaaaaaaaaa....aaaaaaaaa..dddddd....aaaaaaaaaa..aaaaaaaaaaa..
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....aaaaaaaa..aaaaaaaaa....dddddd......aaaaaaaa..aaaaaaaaa....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ....ccaaaa....aaaaaaaaa...ddddd........aaaaaaaa....aaaaacc....
    ....c.........aaaaaaaaa...ddddd........aaaaaaaa.........c.....
    ...cc.........aaaaaaaaa...ddddd........aaaaaaaa.........cc....
    ....cc....aaaaaaaaaaaaa...ddddddddddd..aaaaaaaaaaa.......c....
    ....c.....aaaaaaaaaaaaa.....ddddddddd..aaaaaaaaaaa.......c....
    ........aaaaaaaaaaaaaaa.....ddddd33dd..aaaaaaaaaaaaa..........
    ........aaaaaaaaaaaaaaa.......ddd33dd..aaaaaaaaaaaaa..........
    .c..c...aaacaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa.c..c...c.
    ..c.c...cccaaaaaaaaaaaa.......ddddd33..aaaaaaaaaaaaa..c.cc.c..
    `],
250,
true
)
monster_boss.setPosition(300, 800)
let fontana = sprites.create(img`
    ...............6...............
    ..........6...666...6..........
    .........6.6.64446.6.6.........
    .........6..66.6.66..6.........
    .........6.6...6...6.6.........
    .....6..6.6....6....6.6........
    ......6...6....4....6...6......
    .....6.6.6.6..464..6.6.6.6.....
    ........6...4..6..4...6........
    .......6...444464444...6.......
    ......6.6.6.6.666...6.6.6......
    ......6..6.6..646..6.6..6......
    ....6.6..6.6..646..6.6..6.6....
    ...6.6...6....6.6....6...6.6...
    ...6.........66666.........6...
    ...6........4..6..4........6...
    .............44444.............
    ....66.....66..4..66.....66....
    .6.6..6...6..6.6.6..6...6..6.6.
    ..6.6..6.6....6......6.6....6..
    .6.6..6.6.6..6.6......6....6.6.
    .6.6..6.6.6..6.6......6......6.
    .6......6......6......6......6.
    .6......6......6......6......6.
    .6......6.....464.....6......6.
    .6.4444444444..4...444444444.6.
    ....44444444.44444..4444444....
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `, SpriteKind.fontana)
fontana.setPosition(1696, 1520)
let door = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........5...............5.......
    .......555.............555......
    ccdcccccccccccdcfdccccccccccccdc
    ccccccccdcccccccfcccccccdccccccc
    6666666666666666f666666666666666
    `, SpriteKind.door)
door.setPosition(304, 653)
let red = sprites.create(img`
    d d d d d d d d d d d d d d d b 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b 2 2 b b b b b b c 
    d b b b b b 2 2 2 2 b b b b b c 
    d b b b b b 2 2 2 2 b b b b b c 
    d b b b b b b 2 2 b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    b c c c c c c c c c c c c c c c 
    `, SpriteKind.Game)
red.setPosition(0, 0)
let blue = sprites.create(img`
    d d d d d d d d d d d d d d d b 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b 8 8 b b b b b b c 
    d b b b b b 8 8 8 8 b b b b b c 
    d b b b b b 8 8 8 8 b b b b b c 
    d b b b b b b 8 8 b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    b c c c c c c c c c c c c c c c 
    `, SpriteKind.Game)
blue.setPosition(0, 0)
let yellow = sprites.create(img`
    d d d d d d d d d d d d d d d b 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b 5 5 b b b b b b c 
    d b b b b b 5 5 5 5 b b b b b c 
    d b b b b b 5 5 5 5 b b b b b c 
    d b b b b b b 5 5 b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    b c c c c c c c c c c c c c c c 
    `, SpriteKind.Game)
yellow.setPosition(0, 0)
let green = sprites.create(img`
    d d d d d d d d d d d d d d d b 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b 7 7 b b b b b b c 
    d b b b b b 7 7 7 7 b b b b b c 
    d b b b b b 7 7 7 7 b b b b b c 
    d b b b b b b 7 7 b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    b c c c c c c c c c c c c c c c 
    `, SpriteKind.Game)
green.setPosition(248, 24)
tiles.setTilemap(tilemap`level`)
let teleport_cave_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.teleport)
let table = sprites.create(img`
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .677777777777777777777777777776.
    b777111111111111111111111111777b
    b771177777777777777777777771177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771777777777777777777777777177b
    b771177777777777777777777771177b
    b777111111111111111111111111777b
    b677777777777777777777777777776b
    b667777777777777777777777777766b
    b666666666666666666666666666666b
    b966666666666666666666666666669b
    b966999666699966669996666999669b
    .bb6bbb6996bbb6996bbb6996bbb6bb.
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    ..b66b....................b66b..
    ..b99b....................b99b..
    ...bb......................bb...
    `, SpriteKind.table)
table.setPosition(1630, 1250)
let broken_table = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ..cccccc................................
    .bbbbbbbb...............................
    cbbbbbbbbbbb.........bbcccccccccccc.....
    cccccbbbccbc........bbcbbbbbbbbbbbb.....
    cbbbbbbbbbbb........bc.bbbbbbbbbbbbbb...
    cbbbbbbbbbbbb......bbc.bccccbbbbcbccc...
    cbbbbbbbbbbbbbb....bc..bbbbbbbbbbbbbbb..
    cccccbbbbcccccb...bc...bbbbbbbbbbbbbbb..
    cbbbbbbbbbbbbbb...bc...bbbbbbbbbbbbbbb..
    cbbbbbbbbbbbbbb...bc...ccbbccbbbcccccc..
    cbbbbbbbbbbbbbb........bbbbbbbbbbbbbbbb.
    cccccbbbbcbccbb........bbbbbbbbbbbbbbbb.
    cbbbbbbbbbbbbbb........bbbbbbbbbbbbbbbbc
    cbbbbbbbbbbbbbb........bbbbbbcccccbbbccc
    cbbbbbbbbbbbbbb........bbbbbbbbbbbbbbbbc
    ccccccccccccccb........bbbbbbbbbbbbbbbbc
    cbbbbbbbbbbbbbb........bbbbbbbbbbbbbbbbc
    ccbbbbbbbbbbbbb..cc....bbbcccbcbbbbccccc
    cccccccccccccc...bc....bbbbbbbbbbbbbbbbc
    cccccccccc..........bc.bbbbbbbbbbbbbbbcc
    .ccccccc............cc.ccccccccccccccccc
    ..cbbc.................ccccccccccccccccc
    ..cbbc..............bc.cccccccccccccccc.
    ...cc.......cb..cb..cc..................
    ............cc..cc......................
    ...............................ccc......
    ..............................cbbc......
    ..............................cbbc......
    ...............................ccc......
    ........................................
    ........................................
    ........................................
    `, SpriteKind.table)
broken_table.setPosition(1757, 1250)
tiles.placeOnRandomTile(teleport_cave_1, sprites.builtin.forestTiles13)
Johnny = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . 
    . . . f f f f f c f f . . . 
    . . f f c f f f c f f f . . 
    . . f c c f f f f c f f . . 
    . . f c f f e e f f c f . . 
    . . f f f 4 4 e e f f f . . 
    . . f f d f 4 4 f d f f . . 
    . . f 4 1 f 4 4 f 1 4 f . . 
    . . . 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 4 4 4 4 4 . . . . 
    . . e 4 b 2 2 2 2 b 4 e . . 
    . . 4 d 2 2 2 2 2 2 d 4 . . 
    . . 4 4 6 6 6 6 6 6 4 4 . . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Johnny, 60, 60)
let Dog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 f 4 f 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . . d 4 d 4 f f f d d . 
    . . . . . . f . . . . . . . f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pet)
animation.runImageAnimation(
Dog,
[img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 f 4 f 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . . d 4 d 4 f f f d d . 
    . . . . . . f . . . . . . . f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 f 4 f 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . d d 4 d 4 f f f 4 d . 
    . . . . f d 4 . . . . . . . d . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 d 4 d 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . . d 4 d 4 f f f d d . 
    . . . . . . f . . . . . . . f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 f 4 f 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . d d 4 d 4 f f f 4 d . 
    . . . . f d 4 . . . . . . . d . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 f 4 f 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . . d 4 d 4 f f f d d . 
    . . . . . . f . . . . . . . f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 . . . . . . . . . 
    . 4 f 4 d 4 f 4 . . . . . . . . 
    . 4 f 4 4 4 f 4 . . . . . . . . 
    . 4 4 d 4 d 4 4 . . . . . . . . 
    . e 4 f 4 f 4 e . . . . e 4 f . 
    . e 4 4 4 4 4 4 d . . . e 4 f . 
    f d 4 4 4 4 4 d d e e e 4 4 4 . 
    . . d d d 4 f d 4 4 4 4 4 4 . . 
    . . . d d f f d d 4 4 4 4 4 4 . 
    . . . . . d d d 4 4 f 4 f 4 4 . 
    . . . . . d d 4 d 4 f f f 4 d . 
    . . . . f d 4 . . . . . . . d . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
250,
true
)
scene.cameraFollowSprite(Johnny)
controller.moveSprite(Dog, 60, 60)
tiles.placeOnRandomTile(Dog, sprites.dungeon.buttonOrange)
tiles.placeOnRandomTile(Johnny, sprites.dungeon.buttonTeal)
forever(function () {
	
})
