ServerEvents.recipes(e => {
    // ULV Machine Recipes
    e.recipes.gtceu.coal_burner_recipe_type('kubejs:gtceu/test/coal_tag_burning')
        .itemInputs('#minecraft:coals')
        .EUt(-8)
        .duration(200)

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
    hammerIngotToPlate('minecraft:copper_ingot', 'gtceu:copper_plate')

})
