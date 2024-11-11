JEIEvents.hideItems(event => {
    event.hide(/gtceu:.*ore/)
    event.hide(/gtceu:.*indicator/)
    event.hide(/gtceu:.*raw.*block/)

    // hide nukelist
    event.hide(global.nukeList)
})

// DEV STUFF BELOW HERE
if (global.devMode) {
    // add tooltip to nuked items
    ItemEvents.tooltip(event => {
        global.nukeList.forEach(i => {
            event.add(i, '§c§l - - - - NUKED - - - - ')
        })
    })

    // change nukelist textures (Only works on generic items)
    ClientEvents.highPriorityAssets(e => {
        global.nukeList.forEach(item => {
            e.addModel("item", item, gen => {
                gen.parent('item/generated')
                gen.textures({
                    layer0: "kubejs:item/icon",
                    layer1: "kubejs:item/icon",
                    layer2: "kubejs:item/icon",
                    layer3: "kubejs:item/icon"
                })
            })
        })
    })
}
