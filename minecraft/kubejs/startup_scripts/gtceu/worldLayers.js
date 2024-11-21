GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('owstones')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions('minecraft:overworld', 'worldshaper:wsoverworld')
})