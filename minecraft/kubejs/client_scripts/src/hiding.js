JEIEvents.hideItems(event => {
    event.hide(/gtceu:.*ore/)
    event.hide(/gtceu:.*raw.*block/)
    // event.hide(global.nukeList)
})

// DEV STUFF BELOW HERE

// add tooltip to nuked items
ItemEvents.tooltip(event => {
    global.nukeList.forEach(i => {
        event.add(i, '§c§l - - - - NUKED - - - - ')
    })
})

// change nuked textures
ClientEvents.highPriorityAssets(e => {
    console.log(global.nukeList)
    global.nukeList.forEach(item => {
        e.addModel("item", item, gen => {
            gen.parent('item/generated')
            gen.textures({layer0: "kubejs:item/icon"})
        })
    })
})