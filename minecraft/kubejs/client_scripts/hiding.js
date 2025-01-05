JEIEvents.hideItems(event => {
    // event.hide(/^emi:.*repairing.*/)
    // event.hide(/^gtceu:.*ore/)
    // event.hide(/^gtceu:.*indicator/)
    // event.hide(/^gtceu:.*raw.*block/)

    // let tags = [
    //     Ingredient.of("#forge:tools").itemIds,
    //     Ingredient.of("#forge:tools/scythes").itemIds,
    //     Ingredient.of("#forge:tools/saws").itemIds,
    //     Ingredient.of("#forge:tools/hammers").itemIds,
    //     Ingredient.of("#forge:tools/mining_hammers").itemIds,
    //     Ingredient.of("#forge:tools/mortars").itemIds,
    //     Ingredient.of("#forge:tools/drills").itemIds,
    //     Ingredient.of("#forge:tools/wire_cutters").itemIds,
    //     Ingredient.of("#forge:tools/files").itemIds,
    //     Ingredient.of("#forge:tools/screwdrivers").itemIds,
    //     Ingredient.of("#forge:tools/wrenches").itemIds,
    //     Ingredient.of("#forge:tools/knives").itemIds,
    //     Ingredient.of("#forge:tools/butchery_knives").itemIds,
    //     Ingredient.of("#forge:tools/crowbars").itemIds,
    //     Ingredient.of("#forge:tools/spades").itemIds,
    //     Ingredient.of("#forge:tools/mallets").itemIds,
    //     Ingredient.of("#forge:tools/chainsaws").itemIds,
    // ]

    // tags.forEach(itemList => {
    //     let gtItemsList = itemList.filter((i) => Ingredient.of(/^gtceu:.*/).itemIds.toArray().includes(i))
    //     gtItemsList = gtItemsList.filter((i) => !Ingredient.of(/.*:iron.*/).itemIds.toArray().includes(i))
    //     event.hide(gtItemsList)
    // })
    
})

// DEV STUFF BELOW HERE

// add tooltip to nuked items

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
