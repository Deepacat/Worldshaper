// DEV STUFF BELOW HERE

// add tooltip to nuked items

JEIEvents.hideItems(event => {
    event.hide([
        // misc
        Ingredient.of(/emi:.*repairing.*/),
        // gt ore related
        Ingredient.of(/gtceu:.*ore/),
        Ingredient.of(/gtceu:.*indicator/),
        Ingredient.of(/gtceu:.*raw.*block/),
        // gt tools
        Ingredient.of(/gtceu:(?!iron(_|$)).*_scythe/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*saw/),
        Ingredient.of(/gtceu:(?!iron(_|$))(?!.*forge).*_hammer/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_mortar/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_drill/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_wir.*utter/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_file/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_screwdriver/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_wrench/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_knife/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_crowbar/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_spade/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_mallet/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_plunger/),
        // vanilla gt tools
        Ingredient.of(/gtceu:(?!iron(_|$)).*_sword/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_pickaxe/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_axe/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_shovel/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_hoe/),
        Ingredient.of(/gtceu:(?!iron(_|$)).*_sword/)
    ])
})

if (global.devMode) {
    // mark things as nuked instead of hiding in dev mode
    ItemEvents.tooltip(event => {
        global.nukeList.forEach(i => {
            event.add(i, '§c§l - - - - NUKED - - - - ')
        })
    })

    // change nukelist textures (Only works on generic items)
    // ClientEvents.highPriorityAssets(e => {
    //     global.nukeList.forEach(item => {
    //         e.addModel("item", item, gen => {
    //             gen.parent('item/generated')
    //             gen.textures({
    //                 layer0: "kubejs:item/icon",
    //                 layer1: "kubejs:item/icon",
    //                 layer2: "kubejs:item/icon",
    //                 layer3: "kubejs:item/icon"
    //             })
    //         })
    //     })
    // })
} else {
    // hide items instead of marking as nuked outside dev mode
    JEIEvents.hideItems(event => {
        // hide nukelist
        event.hide(global.nukeList)
    })
}
