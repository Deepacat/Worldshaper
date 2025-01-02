ServerEvents.recipes(e => {
    // Copy non fluid recipes from mixer to ulv mixer
    e.forEachRecipe({ type: "gtceu:mixer" }, recipe => {
        let r = JSON.parse(recipe.json)
        if (r.inputs.fluid) { return }

        let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null
        if (!(EUt <= 8)) { //Reject recipes that cost more than 8 eu/t, check is done like this to filter out null
            return
        }

        let outputs = r.outputs.item

        let toInput = []

        r.inputs.item.forEach(items => {
            if (items.content.type == "gtceu:circuit") { return }

            let curCount = items.content.count
            let curItem = Ingredient.of(items.content.ingredient)

            toInput.push(Item.of(curItem, curCount))
        })

        let toOutput = Item.of(Ingredient.of(outputs[0].content.ingredient), outputs[0].content.count)

        e.recipes.gtceu.steam_mixer_recipes(`kubejs:gtceu/steam_mixer/${recipe.getId().split(':')[1]}`)
            .itemInputs(toInput)
            .itemOutputs(toOutput)
            .outputFluids()
            .duration(r.duration)
            .EUt(EUt)
    })

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
