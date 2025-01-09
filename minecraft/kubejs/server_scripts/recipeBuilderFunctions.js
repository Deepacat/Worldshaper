//priority: 10
// Script for recipe building functions

function plateRecipe(input, output, mode) {
    let plate = `gtceu:${output}_plate`

    ServerEvents.recipes(e => {
        if (mode >= 3) {
            e.shaped(Item.of(plate), [
                'H  ',
                'I  ',
                'I  '
            ], {
                'H': '#forge:tools/hammers',
                'I': input
            }).id(`kubejs:hammering/${plate.split(':')[1]}`)
        }
        if (mode >= 2) {
            e.recipes.gtceu.forge_hammer(`kubejs:forge_hammer/${plate.split(':')[1]}`)
                .itemInputs(`3x ${input}`)
                .itemOutputs(`2x ${plate}`)
                .EUt(8)
                .duration(400)
        }
        if (mode >= 1) {
            e.recipes.gtceu.bender(`kubejs:bender/${plate.split(':')[1]}`)
                .itemInputs(input)
                .itemOutputs(plate)
                .circuit(1)
                .EUt(32)
                .duration(500)
        }
    })
    ServerEvents.tags('item', e => {
        e.remove('c:hidden_from_recipe_viewers', `#forge:plates/${output}`)
    })
}