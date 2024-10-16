ServerEvents.tags('item', e => {
    let buds = Item.getTypeList().filter(id => id.includes("budding"))
    console.log(buds)
    buds.forEach(bud => {
        e.add('forge:ores', bud)
        e.add('forge:ores/'+bud.replace(/.*:/, ''), bud)
    })
})