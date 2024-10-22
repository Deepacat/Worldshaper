BlockEvents.rightClicked(e => {
    if (e.hand != 'MAIN_HAND') return

    let machineData = e.block.entityData.toString()
    let mainHand = e.player.getMainHandItem().id
    // console.log(Item.of(mainHand).hasTag('kubejs:upgrade_kit'))
    if (Item.of(mainHand).hasTag('kubejs:upgrade_kit') & e.block.entityData != null) {
        // a uh good enough check to see if its a machine... probably a better way to do this
        if ((/gtceu:.*v_/.test(machineData) & /chargerInventory/.test(machineData) 
            & /energyStored/.test(machineData)) || /world_accel/.test(machineData)
        ) {
            // e.player.tell('machine')
        }
    }
})
