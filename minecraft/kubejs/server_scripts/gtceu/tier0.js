ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:mixer" }, recipe => {
        let r = JSON.parse(recipe.json)
        // console.log(r)

        let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null
        if (!(EUt <= 8)) { //Reject recipes that cost more than 8 eu/t, check is done like this to filter out null
            return
        }

        if (r.inputs.fluid) { return }
        let outputs = r.outputs.item
        if (!outputs || outputs[0].content.type != "gtceu:sized" || !outputs[0].content.ingredient.item) { //Not sure if outputs other than "item" are possible. Check to be safe
            return
        }
        // r.inputs.item.forEach(items => {
        //     console.log(items)
        // })
        // r.inputs['item'].forEach(item => {
        //     console.log(item)
        // })

        // console.log('------------------')
        // e.recipes.gtceu.steam_mixer(`kubejs:gtceu/steam_mixer/${recipe.getId().split(':')[1]}`)
        //     .itemInputs('dirt')
        //     .itemOutputs('diamond')
        //     .duration(r.duration)
        //     .EUt(7)
    })
})

ServerEvents.recipes(e => {
    e.recipes.gtceu.steam_mixer(`kubejs:gtceu/steam_mixer/test`)
        .itemInputs('dirt')
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
