BlockEvents.rightClicked(e => {
    function getVoltage(item) { return item.toString().slice(item.toString().indexOf(':') + 1, item.toString().indexOf('_')) }
    if (e.hand != 'MAIN_HAND') return
    if (e.block.entityData == null) return

    let machineData = e.block.entityData.toString()
    let mainHand = e.player.getMainHandItem().id

    if (e.player.crouching && Item.of(mainHand).hasTag('kubejs:upgrade_kit')) {
        // a uh good enough check to see if its a machine... probably a better way to do this
        if ((/gtceu:.*v_/.test(machineData) && /chargerInventory/.test(machineData)
            && /energyStored/.test(machineData)) || /world_accel/.test(machineData)
        ) {
            let machinetier = global.voltageTiers.indexOf(getVoltage(e.block.getId()))
            let itemtier = global.voltageTiers.indexOf(getVoltage(mainHand))
            if (machinetier + 1 == itemtier) {
                // upgrade passed
                // setting block like this doesnt work with nbt really well, command works better unfortunately
                // e.level.getBlock(e.block.pos).set(e.block.id.replace(getVoltage(e.block.getId()), getVoltage(mainHand)))
                let facing = e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase();
                e.item.count--
                e.level.getBlock(e.block.pos).set('minecraft:air')
                e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} ${e.block.id.replace(getVoltage(e.block.getId()), getVoltage(mainHand))}[facing=${facing}]${machineData}`)
            }
        }
    }
})