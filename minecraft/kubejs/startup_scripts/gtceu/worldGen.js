GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    // Make a world layer for ores that spawn in the regular overworld and the flat overworld
    event.create('owstones')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions('minecraft:overworld', 'worldshaper:wsoverworld')
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {

})