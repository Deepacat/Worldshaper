ServerEvents.recipes(e => {
    // ULV Machine Recipes
    e.recipes.gtceu.coal_burner_recipe_type('kubejs:gtceu/test/coal_tag_burning')
        .itemInputs('#minecraft:coals')
        .EUt(-8)
        .duration(200)

    // GT Tools
    e.shaped(Item.of('gtceu:iron_hammer', 1, { MaxDamage: 1024 }), [
        ' BI',
        ' SB',
        'S  '
    ], {
        'S': 'minecraft:stick',
        'I': '#forge:ingots/iron',
        'B': '#forge:storage_blocks/iron'
    })
    e.shaped(Item.of('gtceu:steel_hammer', 1, { Unbreakable: 1 }), [
        ' BI',
        ' SB',
        'S  '
    ], {
        'S': 'minecraft:stick',
        'I': '#forge:ingots/steel',
        'B': '#forge:storage_blocks/steel'
    })
    function hammerIngotToPlate(ingot, plate) {
        e.shaped(Item.of(plate), [
            'H  ',
            'I  ',
            'I  '
        ], {
            'H': '#forge:tools/hammers',
            'I': ingot
        }).id(`kubejs:hammering/${plate.split(':')[1]}`)
    }

    hammerIngotToPlate('minecraft:iron_ingot', 'gtceu:iron_plate')
    hammerIngotToPlate('minecraft:gold_ingot', 'gtceu:gold_plate')
})
