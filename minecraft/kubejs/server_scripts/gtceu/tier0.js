ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:mixer" }, recipe => {
        let r = JSON.parse(recipe.json)

        if (r.inputs.fluid) { return }

        let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null
        if (!(EUt <= 8)) { //Reject recipes that cost more than 8 eu/t, check is done like this to filter out null
            return
        }

        let outputs = r.outputs.item
        if (!outputs || outputs[0].content.type != "gtceu:sized" || !outputs[0].content.ingredient.item) { //Not sure if outputs other than "item" are possible. Check to be safe
            return
        }

        console.log()

        r.inputs.item.forEach(items => {
            if (items.content.type == "gtceu:circuit") { return }
            console.log(`${recipe.id} item: ${Ingredient.of(items.content.ingredient).getItemIds()[0]}`)
            console.log(`${recipe.id} count: ${items.content.count}`)
        })
    })
})

ServerEvents.recipes(e => {
    e.recipes.gtceu.steam_mixer(`kubejs:gtceu/steam_mixer/test2`)
        .itemInputs(
            Ingredient.of(
                {
                    "ingredient": { "tag": "forge:dusts/iron" }
                }
            ).withCount(4)
        )
        .itemOutputs('diamond')
        .duration(60)
        .EUt(7)

    e.recipes.gtceu.steam_mixer(`kubejs:gtceu/steam_mixer/test3`)
        .itemInputs(
            Ingredient.of(
                {
                    "ingredient": { "tag": "forge:dusts/iron" }
                }
            ).withCount(4),
            Ingredient.of(
                {
                    "ingredient": { "tag": "forge:dusts/gold" }
                }
            ).withCount(5),
            Ingredient.of(
                {
                    "ingredient": { "tag": "forge:dusts/copper" }
                }
            ).withCount(6)
        )
        .itemOutputs('diamond')
        .duration(60)
        .EUt(7)

    // e.custom({
    //     type: "gtceu:steam_mixer",
    //     duration: 500.0,
    //     inputs: {
    //         item: [
    //             {
    //                 content: {
    //                     type: "gtceu:sized",
    //                     count: 1.0,
    //                     ingredient: { tag: "forge:dusts/copper" }
    //                 },
    //                 chance: 10000.0,
    //                 maxChance: 10000.0,
    //                 tierChanceBoost: 0.0
    //             },
    //             {
    //                 content: {
    //                     type: "gtceu:sized",
    //                     count: 4.0,
    //                     ingredient: { tag: "forge:dusts/gold" }
    //                 },
    //                 chance: 10000.0,
    //                 maxChance: 10000.0,
    //                 tierChanceBoost: 0.0
    //             },
    //             {
    //                 content: {
    //                     type: "gtceu:circuit",
    //                     configuration: 3.0
    //                 },
    //                 chance: 0.0,
    //                 maxChance: 10000.0,
    //                 tierChanceBoost: 0.0
    //             }
    //         ]
    //     },
    //     outputs: {
    //         item: [
    //             {
    //                 content: {
    //                     type: "gtceu:sized",
    //                     count: 5.0,
    //                     ingredient: { item: "gtceu:rose_gold_dust" }
    //                 },
    //                 chance: 10000.0,
    //                 maxChance: 10000.0,
    //                 tierChanceBoost: 0.0
    //             }
    //         ]
    //     },
    //     tickInputs: {
    //         eu: [
    //             {
    //                 content: 120.0,
    //                 chance: 10000.0,
    //                 maxChance: 10000.0,
    //                 tierChanceBoost: 0.0
    //             }
    //         ]
    //     },
    //     tickOutputs: {},
    //     inputChanceLogics: {},
    //     outputChanceLogics: {},
    //     tickInputChanceLogics: {},
    //     tickOutputChanceLogics: {}
    // }).id('kubejs:gtceu/steam_mixer/test')

})
