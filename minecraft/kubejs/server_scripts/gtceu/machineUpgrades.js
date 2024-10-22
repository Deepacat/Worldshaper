BlockEvents.rightClicked(e => {
    function getVoltage(item) { return item.toString().slice(item.toString().indexOf(':') + 1, item.toString().indexOf('_')) }
    if (e.hand != 'MAIN_HAND') return
    if (e.block.entityData == null) return

    const rawData = e.block.entityData
    let machineData = e.block.entityData.toString()
    let mainHand = e.player.getMainHandItem().id

    if (e.player.crouching && Item.of(mainHand).hasTag('kubejs:upgrade_kit')) {
        // a uh good enough check to see if its a machine... probably a better way to do this
        if ((/gtceu:.*v_/.test(machineData) && /chargerInventory/.test(machineData)
            && /energyStored/.test(machineData)) || /world_accel/.test(machineData)
        ) {
            let machinetier = global.voltageTiers.indexOf(getVoltage(e.block.getId()))
            let itemtier = global.voltageTiers.indexOf(getVoltage(mainHand))
            if(machinetier + 1 == itemtier){
                // upgrade passed
                e.level.getBlock(e.block.pos).set(e.block.id.replace(getVoltage(e.block.getId()), getVoltage(mainHand)), rawData)
                e.item.count--
            }
        }
    }
})

// BlockEvents.rightClicked(e => {
//     if (e.hand != 'MAIN_HAND') return
//     if (e.block.entityData == null) return

//     if (e.player.crouching && e.player.getMainHandItem().id == Item.of('minecraft:diamond') && e.block.getId() == 'minecraft:chest') {
//         e.player.tell('test')
//         e.level.getBlock(e.block.pos).set('minecraft:barrel')
//         e.block.getEntityData() = e.block.entityData
//     }
// })