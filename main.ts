namespace SpriteKind {
    export const HealFood = SpriteKind.create()
    export const jUnK = SpriteKind.create()
    export const Power = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const BossShot = SpriteKind.create()
}
function PowerEnd () {
    spacePlane.setImage(assets.image`Spider`)
    pause(8200)
    spacePlane.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    spacePlane.setImage(assets.image`Spider0`)
    pause(200)
    spacePlane.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    spacePlane.setImage(assets.image`Spider`)
    pause(200)
    spacePlane.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    spacePlane.setImage(assets.image`Spider0`)
    pause(200)
    spacePlane.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    spacePlane.setImage(assets.image`Spider`)
    pause(200)
    spacePlane.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    spacePlane.setImage(assets.image`Spider0`)
}
sprites.onOverlap(SpriteKind.BossShot, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 100)
    if (PowerUp != 1) {
        info.changeLifeBy(-2)
        music.knock.play()
        scene.cameraShake(4, 500)
        HitsTaken += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    TimeFlown = game.runtime() / 1000
    game.showLongText("Bogeys Destroyed: " + convertToText(KillCount) + " Consumables Collected: " + convertToText(ConsumablesCollected) + (" Time Flown: " + convertToText(TimeFlown) + " Hits Taken: " + convertToText(HitsTaken)), DialogLayout.Full)
})
sprites.onOverlap(SpriteKind.Power, SpriteKind.Player, function (sprite, otherSprite) {
    PowerUp = randint(1, 5)
    music.magicWand.play()
    ConsumablesCollected += 1
    if (PowerUp == 1) {
        spacePlane.say("Invincibility!", 2500)
        spacePlane.startEffect(effects.halo, 10000)
        PowerEnd()
    } else if (PowerUp == 2) {
        spacePlane.say("Speed Up!", 2500)
        spacePlane.startEffect(effects.fire, 10000)
        Speed = 150
        PowerEnd()
        Speed = 100
    } else if (PowerUp == 3) {
        spacePlane.say("Attack Speed Up!", 2500)
        PowerEnd()
    } else if (PowerUp == 4) {
        spacePlane.say("Triple Points!", 2500)
        PowerEnd()
    } else if (PowerUp == 5) {
        spacePlane.say("Multi Shot!", 2500)
        PowerEnd()
    }
    PowerUp = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (PowerUp == 5) {
            music.pewPew.play()
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 8 8 8 . . . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                . . b 6 6 6 6 8 7 7 7 7 7 8 8 8 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . . . . . . . . . . 8 8 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, spacePlane, 200, 45)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 8 8 8 . . . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                . . b 6 6 6 6 8 7 7 7 7 7 8 8 8 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . . . . . . . . . . 8 8 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, spacePlane, 200, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 8 8 8 . . . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                . . b 6 6 6 6 8 7 7 7 7 7 8 8 8 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . . . . . . . . . . 8 8 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, spacePlane, 200, -45)
            pause(AttackSpeed)
        } else {
            music.pewPew.play()
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 8 8 8 . . . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                . . b 6 6 6 6 8 7 7 7 7 7 8 8 8 
                . b . . . . . . 8 7 7 7 7 8 8 . 
                b . . . . . . . . 8 7 7 7 8 . . 
                . . . . . . . . . . 8 8 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, spacePlane, 200, 0)
            pause(AttackSpeed)
        }
    }
})
function Boss_Fight () {
    if (BossFight == 1) {
        pause(1000)
        projectile2 = sprites.createProjectileFromSprite(assets.image`galgaDart0`, Bossy, -150, 0)
        projectile2.setKind(SpriteKind.BossShot)
        music.pewPew.play()
        pause(1000)
        projectile2 = sprites.createProjectileFromSprite(assets.image`galgaDart0`, Bossy, -150, 0)
        projectile2.setKind(SpriteKind.BossShot)
        music.pewPew.play()
        pause(1000)
        projectile2 = sprites.createProjectileFromSprite(assets.image`galgaDart0`, Bossy, -150, 0)
        projectile2.setKind(SpriteKind.BossShot)
        music.pewPew.play()
        pause(1000)
        Bossy.setPosition(125, spacePlane.y)
        pause(1000)
        projectile2 = sprites.createProjectileFromSprite(assets.image`galgaDart0`, Bossy, -150, 0)
        projectile2.setKind(SpriteKind.BossShot)
        music.pewPew.play()
        pause(1000)
        projectile2 = sprites.createProjectileFromSprite(assets.image`galgaDart0`, Bossy, -150, 0)
        projectile2.setKind(SpriteKind.BossShot)
        music.pewPew.play()
        pause(1000)
        projectile2 = sprites.createProjectileFromSprite(assets.image`galgaDart0`, Bossy, -150, 0)
        projectile2.setKind(SpriteKind.BossShot)
        music.pewPew.play()
        pause(1000)
        Bossy.setPosition(133, spacePlane.y)
    }
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    music.jumpUp.play()
    sprite.destroy()
    Fuel.value += randint(30, 70)
    ConsumablesCollected += 1
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    Bossy.destroy(effects.spray, 500)
    BossFight = 0
    KillCount += 1
    BossHealth.max += 10
    BossHealth.value += 10
    if (PowerUp == 4) {
        info.changeScoreBy(60)
    } else {
        info.changeScoreBy(20)
    }
    info.changeLifeBy(2)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 100)
    if (PowerUp != 1) {
        info.changeLifeBy(-1)
        music.knock.play()
        scene.cameraShake(4, 500)
        HitsTaken += 1
    }
})
sprites.onOverlap(SpriteKind.HealFood, SpriteKind.Player, function (sprite, otherSprite) {
    music.powerUp.play()
    sprite.destroy()
    info.changeLifeBy(1)
    ConsumablesCollected += 1
})
sprites.onOverlap(SpriteKind.jUnK, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    if (PowerUp != 1) {
        music.knock.play()
        info.changeLifeBy(-1)
        HitsTaken += 1
        Speed = 50
        pause(2000)
        Speed = 100
    }
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.knock.play()
    otherSprite.destroy()
    BossHealth.value += -10
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy()
    if (PowerUp == 4) {
        info.changeScoreBy(3)
    } else {
        info.changeScoreBy(1)
    }
    KillCount += 1
    BossCount += 1
})
let Pizza: Sprite = null
let Bogey: Sprite = null
let Asteroid: Sprite = null
let Power: Sprite = null
let Apple: Sprite = null
let BossHealth: StatusBarSprite = null
let Bossy: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let BossFight = 0
let AttackSpeed = 0
let PowerUp = 0
let HitsTaken = 0
let ConsumablesCollected = 0
let KillCount = 0
let TimeFlown = 0
let Fuel: StatusBarSprite = null
let Speed = 0
let spacePlane: Sprite = null
spacePlane = sprites.create(assets.image`Spider0`, SpriteKind.Player)
Speed = 100
spacePlane.setStayInScreen(true)
info.setLife(3)
Fuel = statusbars.create(20, 5, StatusBarKind.Energy)
Fuel.attachToSprite(spacePlane)
Fuel.setColor(4, 2, 3)
Fuel.setBarBorder(1, 8)
Fuel.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
Fuel.setOffsetPadding(0, -7)
Fuel.setLabel("ENG")
effects.starField.startScreenEffect()
let asteroidCostumes = [
sprites.space.spaceSmallAsteroid0,
sprites.space.spaceSmallAsteroid1,
sprites.space.spaceSmallAsteroid2,
sprites.space.spaceSmallAsteroid3,
sprites.space.spaceAsteroid0,
sprites.space.spaceAsteroid1,
sprites.space.spaceSmallAsteroid4,
sprites.space.spaceSmallAsteroid5,
sprites.space.spaceAsteroid2,
sprites.space.spaceAsteroid3,
sprites.space.spaceAsteroid4
]
game.showLongText("Welcome to Space Raider! Use the buttons to move, and A to attack. Collect apples to replenish Energy, pizza to increase your hearts, and crystals to gain a Power-Up! Press B to see your performance. Enjoy!!! ", DialogLayout.Bottom)
TimeFlown = 0
KillCount = 0
ConsumablesCollected = 0
HitsTaken = 0
PowerUp = 0
AttackSpeed = 500
let BossCount = 0
let BossKillC = 0
BossFight = 0
game.onUpdate(function () {
    controller.moveSprite(spacePlane, Speed, Speed)
    if (PowerUp == 3) {
        AttackSpeed = 250
    } else {
        AttackSpeed = 500
    }
    if (BossCount == 20) {
        BossCount = 0
        Bossy = sprites.create(assets.image`MSS Centerprise0`, SpriteKind.Boss)
        Bossy.setPosition(130, 50)
        BossHealth = statusbars.create(21, 5, StatusBarKind.EnemyHealth)
        BossHealth.attachToSprite(Bossy, -10, -5)
        BossHealth.setColor(7, 2, 3)
        BossHealth.setBarBorder(1, 8)
        BossHealth.setLabel("BOSS")
        BossFight = 1
    }
})
game.onUpdateInterval(randint(4000, 6000), function () {
    Apple = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    Apple.setVelocity(-100, 0)
    Apple.setPosition(160, randint(5, 115))
    Apple.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(randint(22500, 27500), function () {
    Power = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Power)
    Power.setVelocity(-100, 0)
    Power.setPosition(160, randint(5, 115))
    Power.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2500, function () {
    Asteroid = sprites.create(asteroidCostumes._pickRandom(), SpriteKind.jUnK)
    Asteroid.setVelocity(randint(-20, -60), 0)
    Asteroid.setPosition(160, randint(5, 115))
    Asteroid.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1000, function () {
    Bogey = sprites.create(assets.image`UFO`, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(160, randint(5, 115))
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    Boss_Fight()
})
game.onUpdateInterval(200, function () {
    Fuel.value += -1
})
game.onUpdateInterval(randint(14000, 16000), function () {
    Pizza = sprites.create(img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, SpriteKind.HealFood)
    Pizza.setVelocity(-100, 0)
    Pizza.setPosition(160, randint(5, 115))
    Pizza.setFlag(SpriteFlag.AutoDestroy, true)
})
