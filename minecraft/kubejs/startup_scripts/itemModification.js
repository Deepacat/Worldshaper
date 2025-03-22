ItemEvents.modification(e => {
    function fireImmune(item) {
        e.modify(item, item => {
            item.setFireResistant(true)
        })
    }

    fireImmune('iron_ingot')
    fireImmune('gtceu:glass_dust')
    fireImmune('gtceu:glass_tube')
    fireImmune('minecraft:clay_ball')
    fireImmune('kubejs:ceramic_ball')
    fireImmune('kubejs:clay_ball_casting_mold')
    fireImmune('kubejs:ceramic_ball_casting_mold')
})