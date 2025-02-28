// this file is for itemstack hiding
// see minecraft\kubejs\assets\emi\recipe\filters\hidecategories.json for category hiding/mass group hiding
// see minecraft\kubejs\server_scripts\initialRemovals.js for tag based hiding

JEIEvents.hideItems(event => {
    event.hide([
        // misc

        // gt ore related
        Ingredient.of(/gtceu:.*ore/),
        Ingredient.of(/gtceu:.*indicator/),
        Ingredient.of(/gtceu:.*raw.*block/),
        // gt tools
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_scythe/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_saw$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_buzzsaw$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_buzz_saw_blade$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_chainsaw$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*chainsaw_head$/),
        // Ingredient.of(/gtceu:(?!iron(_|$))(?!.*forge).*_hammer/),
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_mortar/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_wirecutter$/),
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_wire_cutter/),
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_file/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?steel).*_drill$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?steel).*_drill_head$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_screwdriver$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_screwdriver_tip$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_wrench$/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_wrench_tip$/),
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_knife/),
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_crowbar/),
        // Ingredient.of(/gtceu:(?!iron(_|$)).*_spade/),
        // Ingredient.of(/gtceu:(?!rubber(_|$)).*_mallet/),
        // Ingredient.of(/gtceu:(?!rubber(_|$)).*_plunger/),
        // Ingredient.of(/^gtceu:(?!([a-z]?v_)?iron).*_turbine_blade$/),

        // vanilla gt tools
        // Ingredient.of(/gtceu:.*_sword/),
        // Ingredient.of(/gtceu:.*_pickaxe/),
        // Ingredient.of(/gtceu:.*_axe/),
        // Ingredient.of(/gtceu:.*_shovel/),
        // Ingredient.of(/gtceu:.*_hoe/),
        // Ingredient.of(/gtceu:.*_sword/)
    ])
})

if (global.devMode) {
    // mark things as nuked instead of hiding in dev mode
    ItemEvents.tooltip(event => {
        global.nukeList.forEach(i => {
            event.add(i, '§c§l - - - - NUKED - - - - ')
        })
    })
    // comment this out unless reload testing
    JEIEvents.hideItems(event => {
        // hide nukelist
        event.hide(global.nukeList)
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
