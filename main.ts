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
    export const intro = SpriteKind.create()
    export const Game_red = SpriteKind.create()
    export const Open_door = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile89`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Game_red, function (sprite, otherSprite) {
    music.playMelody("C E C F - - - - ", 400)
    door.destroy()
    Open_door.setPosition(304, 653)
    animation.runImageAnimation(
    Open_door,
    [img`
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
        ................................
        ................................
        e44e44e44e44e44ef44e44e44e44e44e
        e44e44e44e44e44ef44e44e44e44e44e
        e44e44e44e44e44ef44e44e44e44e44e
        `,img`
        eee..........................eee
        444..........................444
        444..........................444
        eee..........................eee
        444..........................444
        444..........................444
        eee..........................eee
        444..........................444
        444..........................444
        eee..........................eee
        444..........................444
        444..........................444
        eee..........................eee
        444ffffffffffffffffffffffffff444
        444ffffffffffffffffffffffffff444
        eeeffffffffffffffffffffffffffeee
        `],
    500,
    false
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
    2000,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    music.playMelody("C C D C - - - - ", 750)
    tiles.placeOnRandomTile(Johnny, sprites.dungeon.buttonTeal)
    controller.moveSprite(Johnny, 0, 0)
    pause(1000)
    controller.moveSprite(Johnny, 60, 60)
    music.playMelody("A A B A G F - B ", 120)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Open_door, function (sprite, otherSprite) {
    statusbar2 = statusbars.create(40, 10, StatusBarKind.EnemyHealth)
    statusbar2.setColor(5, 15, 4)
    statusbar2.setLabel("Boss", 2)
    statusbar2.positionDirection(CollisionDirection.Top)
    statusbar2.setBarBorder(1, 1)
    statusbar2.max = 12
    pause(200)
    monster_boss.follow(Johnny, 40)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    Johnny.setPosition(304, 650)
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
let statusbar2: StatusBarSprite = null
let Johnny: Sprite = null
let door: Sprite = null
let Open_door: Sprite = null
let monster_boss: Sprite = null
let UomoSuLeva = 0
UomoSuLeva = 0
scene.setBackgroundColor(13)
monster_boss = sprites.create(img`
    ...........88888888888...........
    ........88866666666666888........
    .......8666666666666666668.......
    ......866666666666666666668......
    ....8866666666666666666666688....
    ....8666666688f888f8866666668....
    ...866666f8866f666f6688f666668...
    ..8666666ff666f666f666ff6666668..
    .866666686f666f666f666f686666668.
    .866666866ff611111116ff668666668.
    .8666686666111111111116666866668.
    886666866611155555551116668666688
    888668666611555555555116666866888
    86888866611555fffff55511666888868
    8666688861155ff1ffff5511688866668
    8666666861155f1fffff5511686666668
    8666666861155fffffff5511686666668
    8666666861155fffff1f5511686666668
    8666666861155fff11ff5511686666668
    86666668611555fffff55511686666668
    866666686611555555555116686666668
    866666668611155555551116866666668
    .8666666869111111111119686666668.
    .8666668666991111111999668666668.
    .8666666866669999999699986666668.
    ..86666668666666666666996666668..
    ...866666688666666666896666668...
    ....866666dd888888888dd666668....
    ....886666ddd6dd6dd6ddd666688....
    ......86666d66dd6dd66d66668......
    .......8666666666666666668.......
    ........88866666666666888........
    ...........88888888888...........
    `, SpriteKind.Player)
animation.runImageAnimation(
monster_boss,
[img`
    ...........88888888888...........
    ........88866666666666888........
    .......8666666666666666668.......
    ......866666666666666666668......
    ....8866666666666666666666688....
    ....8666666688f888f8866666668....
    ...866666f8866f666f6688f666668...
    ..8666666ff666f666f666ff6666668..
    .866666686f666f666f666f686666668.
    .866666866ff611111116ff668666668.
    .8666686666111111111116666866668.
    886666866611155555551116668666688
    888668666611555555555116666866888
    86888866611555fffff55511666888868
    8666688861155fffffff5511688866668
    8666666861155f1fffff5511686666668
    8666666861155fffffff5511686666668
    8666666861155fffff1f5511686666668
    8666666861155ffff1ff5511686666668
    86666668611555fffff55511686666668
    866666686611555555555116686666668
    866666668611155555551116866666668
    .8666666869111111111119686666668.
    .8666668666991111111999668666668.
    .8666666866669999999699986666668.
    ..86666668666666666666996666668..
    ...866666688666666666896666668...
    ....866666dd888888888dd666668....
    ....886666ddd6dd6dd6ddd666688....
    ......86666d26dd6dd62d66668......
    .......8666266666666626668.......
    ........88866666666666888........
    ...........88888888888...........
    `,img`
    ...........88888888888...........
    ........88866666666666888........
    .......8666666666666666668.......
    ......866666666666666666668......
    ....8866666666666666666666688....
    ....8666666688f888f8866666668....
    ...866666f8866f666f6688f666668...
    ..8666666ff666f666f666ff6666668..
    .866666686f666f666f666f686666668.
    .866666866ff611111116ff668666668.
    .8666686666111111111116666866668.
    886666866611155555551116668666688
    888668666611555555555116666866888
    86888866611555fffff55511666888868
    8666688861155ff1ffff5511688866668
    8666666861155f1fffff5511686666668
    8666666861155fffffff5511686666668
    8666666861155fffff1f5511686666668
    8666666861155fff11ff5511686666668
    86666668611555fffff55511686666668
    866666686611555555555116686666668
    866666668611155555551116866666668
    .8666666869111111111119686666668.
    .8666668666991111111999668666668.
    .8666666866669999999699986666668.
    ..86666668666666666666996666668..
    ...866666688666666666896666668...
    ....866666dd888888888dd666668....
    ....886666ddd6dd6dd6ddd666688....
    ......86666d26dd6dd62d66668......
    .......8666266666666626668.......
    ........88866666666666888........
    ...........88888888888...........
    `,img`
    ...........88888888888...........
    ........88866666666666888........
    .......8666666666666666668.......
    ......866666666666666666668......
    ....8866666666666666666666688....
    ....8666666688f888f8866666668....
    ...866666f8866f666f6688f666668...
    ..8666666ff666f666f666ff6666668..
    .866666686f666f666f666f686666668.
    .866666866ff611111116ff668666668.
    .8666686666111111111116666866668.
    886666866611155555551116668666688
    888668666611555555555116666866888
    86888866611555fffff55511666888868
    8666688861155ff11fff5511688866668
    8666666861155f1fffff5511686666668
    8666666861155fffffff5511686666668
    8666666861155fffff1f5511686666668
    8666666861155ff111ff5511686666668
    86666668611555fffff55511686666668
    866666686611555555555116686666668
    866666668611155555551116866666668
    .8666666869111111111119686666668.
    .8666668666991111111999668666668.
    .8666666866669999999699986666668.
    ..86666668666666666666996666668..
    ...866666688666666666896666668...
    ....866666dd888888888dd666668....
    ....886666ddd6dd6dd6ddd666688....
    ......86666d26dd6dd62d66668......
    .......8666266666666626668.......
    ........88866666666666888........
    ...........88888888888...........
    `,img`
    ...........88888888888...........
    ........88866666666666888........
    .......8666666666666666668.......
    ......866666666666666666668......
    ....8866666666666666666666688....
    ....8666666688f888f8866666668....
    ...866666f8866f666f6688f666668...
    ..8666666ff666f666f666ff6666668..
    .866666686f666f666f666f686666668.
    .866666866ff611111116ff668666668.
    .8666686666111111111116666866668.
    886666866611155555551116668666688
    888668666611555555555116666866888
    86888866611555fffff55511666888868
    8666688861155ff1ffff5511688866668
    8666666861155f1fffff5511686666668
    8666666861155fffffff5511686666668
    8666666861155fffff1f5511686666668
    8666666861155fff11ff5511686666668
    86666668611555fffff55511686666668
    866666686611555555555116686666668
    866666668611155555551116866666668
    .8666666869111111111119686666668.
    .8666668666991111111999668666668.
    .8666666866669999999699986666668.
    ..86666668666666666666996666668..
    ...866666688666666666896666668...
    ....866666dd888888888dd666668....
    ....886666ddd6dd6dd6ddd666688....
    ......86666d26dd6dd62d66668......
    .......8666266666666626668.......
    ........88866666666666888........
    ...........88888888888...........
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
Open_door = sprites.create(img`
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
    ................................
    ................................
    e44e44e44e44e44ef44e44e44e44e44e
    e44e44e44e44e44ef44e44e44e44e44e
    e44e44e44e44e44ef44e44e44e44e44e
    `, SpriteKind.Open_door)
Open_door.setPosition(0, 1000)
door = sprites.create(img`
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
    ................................
    ................................
    e44e44e44e44e44ef44e44e44e44e44e
    e44e44e44e44e44ef44e44e44e44e44e
    e44e44e44e44e44ef44e44e44e44e44e
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
    `, SpriteKind.Game_red)
red.setPosition(360, 552)
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
game.setDialogCursor(img`
    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 f 1 1 1 f 1 f 1 1 1 7 
    7 1 1 1 f 1 f 1 1 f 1 f 1 1 1 7 
    7 1 1 1 f 1 f 1 1 f f 1 1 1 1 7 
    7 1 1 1 f 1 f 1 1 f 1 f 1 1 1 7 
    7 1 1 1 1 f 1 1 1 f 1 f 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
    `)
game.setDialogFrame(img`
    7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
    `)
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
let intro = sprites.create(img`
    ................................
    ................................
    .............ffff.........f.....
    ............fffcfff......f6f....
    ..........ffcfffcfcf....f691f...
    ........ccfffffcfcfcf...f691f...
    .......cffcffccfffcff...f691f...
    .......ffffcffecfffff...f991f...
    ......ffcfffffefcfcfff..f911f...
    ......ffcffffefcfcfffff.f611f...
    ......fcffffe4ffffcffff.f691f...
    ......fffcffe44fd4fff...f691f...
    ......f..fffe44f14cff...f991f...
    .........ffe444444cff...f611f...
    ..........ffe44444cff...f691f...
    ........fffffee4ffcff...f691f...
    ....fffffbbbffffeebbbf..f691f...
    ...f44444fbb2eee22ebbbf..f9f....
    ..f5ffff4f2222222222ebbf.f9f....
    .f55555f4fe2222222222eff.f9f.ff.
    .f55555f4fee222222f22f88ff6ff8af
    .f55555f4ffe22222ef2ef8af1fdf8af
    f5555555f4f2222222fe2f88af5f88af
    f555555f4fff222222ffeefa8a888af.
    f55555f4ffef22222ef.ffffffffff..
    .f5555f4fe4feeeeeef...fe4feef...
    .f5555f4fe4f666666f...ff4f44e...
    ..f555f4fff66666666f...fef44e...
    ..ffff4f..f66666666f...fffe4e...
    ...f44f...ff666666ff....f4fef...
    ....ff....ffff666ffff.....ff....
    .........ffcffffffccf....fd5f...
    .........ffcff...fccff...f51f...
    .........fffff...ffffff...ff....
    ........ffffff...fffffff........
    .......fffccff...fccffcf........
    .......fffcfff...ffcffff........
    .......fffffff....fffffff.......
    ......ffffffff....fffffff.......
    ....fffffffff......ffffff.......
    ....ffccfffff......fffccff......
    ....fffffffff......fffffff......
    ....fffffffff.......ffffff......
    `, SpriteKind.intro)
intro.setPosition(1056, 75)
let JOHNNY_INTRO = sprites.create(assets.image`JOHNNY`, SpriteKind.intro)
animation.runImageAnimation(
JOHNNY_INTRO,
[img`
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ...dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd...
    ...ddddddddddddddddddddddddddddddffffffffffffffffffffffffdddddddddd...
    ...dddddddddddddddddddddddddddddf666666676667767776777777fddddddddd...
    ...dddddddddddddddddddddddddddddf666667666766777677777777fddddddddd...
    ...dddddddddddddddddddddddddddddf666ffffffffffffffffff777fddddddddd...
    ...ddddddddddddddddddddddffdddddf66fddddddddddddddddddf77fddddddddd...
    ...dddddddddddddddddddddf66fddddf66fddddddddddddddddddf77fddddddddd...
    ...dddddfffffffffffffffff66ffffff66ffffffffffffffffffffffffffdddddd...
    ...ddddf2222222222222222f66f2222f66f2222222222222227222227227ffdddd...
    ...ddddf2222222222222222f66f2222f66f222222222222722222272222272ffdd...
    ...dddddffff22fffffffffff66ffffff66fffffffffffffffffffffffff72727fd...
    ...ddddddddf22fdfffffffdf66fddddf66ffdddddffdffdddddfff77fddff272fd...
    ...ddddddddf22ff5555555ff66fddddf6f88fdddf88f88fdddf88f77fddddf77fd...
    ...ddddddddf22f555555555f66ffffff6f88fddf888f888fddf88f77fddddf72fd...
    ...ddddddddf2f55555555555f66666666f88fdf8888f8888fdf88f777fddf777fd...
    ...ddddddddf2f5555fff5555f66666666f888f88888f88888f888ff77fddf77fdd...
    ...ddffddddf2f555fdddf555f6ffffff6f888888f88f88f888888ff777ff777fdd...
    ...df22fdddf2f555fdddf555f6fddddf6f88888ff88f88ff88888fdf777777fddd...
    ...df22fddf22f555fdddf555f6fddddf6f8888fdf88f88fdf8888fddf77777fddd...
    ...df222ff222f5555fff5555f6fddddf6f888fddf88f88fddf888fdddf777fdddd...
    ...df22222222f55555555555f6fddddf6f88fdddf88f88fdddf88ffff7777fdddd...
    ...ddf222222fdf555555555f66fddddf6f88fdddf88f88fdddf88f777777fddddd...
    ...dddff222fdddf5555555ff66fddddf6f88fdddf86f88fdddf88f777777fddddd...
    ...dddddfffdddddfffffffdf66fdddddfdffddddf88888fddddfffffffffdddddd...
    ...dddddddddddddddddddddf66fdddddddddddddf88f86fddddddddddddddddddd...
    ...dddddddddddddddddddddf66fdddddddddddddf88688fddddddddddddddddddd...
    ...dddddddddddddddddddddf666fffffffffffff888868fddddddddddddddddddd...
    ...dddddddddddddddddddddf6666666686868888688f88fddddddddddddddddddd...
    ...dddddddddddddddddddddf66666666886888688f8888fddddddddddddddddddd...
    ...ddddddddddddddddddddddffffffffffffffffffffffdddddddddddddddddddd...
    ...dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd...
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    `,img`
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ...cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ...cccccccccccccccccccccccccccccc111111111111111111111111cccccccccc...
    ...ccccccccccccccccccccccccccccc12222222a222aa2aaa2aaaaaa1ccccccccc...
    ...ccccccccccccccccccccccccccccc122222a222a22aaa2aaaaaaaa1ccccccccc...
    ...ccccccccccccccccccccccccccccc1222111111111111111111aaa1ccccccccc...
    ...cccccccccccccccccccccc11ccccc1221cccccccccccccccccc1aa1ccccccccc...
    ...ccccccccccccccccccccc1221cccc1221cccccccccccccccccc1aa1ccccccccc...
    ...ccccc11111111111111111221111112211111111111111111111111111cccccc...
    ...cccc16666666666666666122166661221666666666666666a66666a66a11cccc...
    ...cccc16666666666666666122166661221666666666666a666666a66666a611cc...
    ...ccccc1111661111111111122111111221111111111111111111111111a6a6a1c...
    ...cccccccc1661c1111111c1221cccc12211ccccc11c11ccccc111aa1cc116a61c...
    ...cccccccc16611888888811221cccc121551ccc1551551ccc1551aa1cccc1aa1c...
    ...cccccccc166188888888812211111121551cc155515551cc1551aa1cccc1a61c...
    ...cccccccc161888888888881222222221551c15555155551c1551aaa1cc1aaa1c...
    ...cccccccc161888811188881222222221555155555155555155511aa1cc1aa1cc...
    ...cc11cccc1618881ccc18881211111121555555155155155555511aaa11aaa1cc...
    ...c1661ccc1618881ccc1888121cccc12155555115515511555551c1aaaaaa1ccc...
    ...c1661cc16618881ccc1888121cccc12155551c1551551c155551cc1aaaaa1ccc...
    ...c166611666188881118888121cccc1215551cc1551551cc15551ccc1aaa1cccc...
    ...c166666666188888888888121cccc121551ccc1551551ccc1551111aaaa1cccc...
    ...cc16666661c18888888881221cccc121551ccc1551551ccc1551aaaaaa1ccccc...
    ...ccc116661ccc1888888811221cccc121551ccc1521551ccc1551aaaaaa1ccccc...
    ...ccccc111ccccc1111111c1221ccccc1c11cccc1555551cccc111111111cccccc...
    ...ccccccccccccccccccccc1221ccccccccccccc1551521ccccccccccccccccccc...
    ...ccccccccccccccccccccc1221ccccccccccccc1552551ccccccccccccccccccc...
    ...ccccccccccccccccccccc122211111111111115555251ccccccccccccccccccc...
    ...ccccccccccccccccccccc122222222525255552551551ccccccccccccccccccc...
    ...ccccccccccccccccccccc122222222552555255155551ccccccccccccccccccc...
    ...cccccccccccccccccccccc1111111111111111111111cccccccccccccccccccc...
    ...cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    `],
100,
true
)
JOHNNY_INTRO.setPosition(1100, 102)
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
// at door monster
Johnny.setPosition(304, 650)
scene.cameraFollowSprite(Johnny)
controller.moveSprite(Johnny, 60, 60)
let statusbar = statusbars.create(40, 10, StatusBarKind.Health)
statusbar.max = 10
statusbar.setColor(7, 2, 6)
statusbar.setLabel("HP", 15)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setBarBorder(1, 1)
forever(function () {
	
})
