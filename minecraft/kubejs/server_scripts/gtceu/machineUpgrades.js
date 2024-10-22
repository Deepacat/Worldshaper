BlockEvents.rightClicked(e => {
    function getVoltage(item) { return item.toString().slice(item.toString().indexOf(':') + 1, item.toString().indexOf('_')) }
    if (e.hand != 'MAIN_HAND') return

    let machineData = e.block.entityData.toString()
    let mainHand = e.player.getMainHandItem().id
    // console.log(Item.of(mainHand).hasTag('kubejs:upgrade_kit'))
    if (Item.of(mainHand).hasTag('kubejs:upgrade_kit') & e.block.entityData != null) {
        // a uh good enough check to see if its a machine... probably a better way to do this
        if ((/gtceu:.*v_/.test(machineData) & /chargerInventory/.test(machineData)
            & /energyStored/.test(machineData)) || /world_accel/.test(machineData)
        ) {
            let machinetier = global.voltageTiers.indexOf(getVoltage(e.block.getId()))
            let itemtier = global.voltageTiers.indexOf(getVoltage(mainHand))
            if(machinetier + 1 == itemtier){
                e.player.tell('can upgrade')
                e.level.getBlock(e.block.pos).set(e.block.id.replace(global.voltageTiers[machinetier], global.voltageTiers[itemtier]))
            }else{
                e.player.tell('cant upgrade')}
        }
    }
})
