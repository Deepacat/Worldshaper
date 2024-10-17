BlockEvents.rightClicked(e => {
    let machineData = e.block.entityData.toString()
    let mainHand = e.player.getMainHandItem().id
    if (mainHand == 'minecraft:diamond' & e.block.entityData != null) {
        // a uh good enough check to see if its a machine... probably a better way to do this
        if (/gtceu:.*v_/.test(machineData) & /chargerInventory/.test(machineData) & /energyStored/.test(machineData)){
            
        }
    }
})
