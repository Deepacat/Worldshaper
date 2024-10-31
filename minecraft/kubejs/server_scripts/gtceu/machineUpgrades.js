BlockEvents.rightClicked(e => {
    const {x, y, z} = e.block;

    function getVoltage(item) { return item.toString().slice(item.toString().indexOf(':') + 1, item.toString().indexOf('_')) }
    if (e.hand != 'MAIN_HAND') return
    if (e.block.entityData == null) return

    let machineData = e.block.entityData.toString()
    let mainHand = e.player.getMainHandItem().id

    if (e.player.crouching && Item.of(mainHand).hasTag('kubejs:upgrade_kit')) {
        // a uh good enough check to see if its a machine... probably a better way to do this
        if ((/gtceu:.*v_/.test(machineData) && /chargerInventory/.test(machineData) && /energyStored/.test(machineData))) {
            let machinetier = global.voltageTiers.indexOf(getVoltage(e.block.getId()))
            let itemtier = global.voltageTiers.indexOf(getVoltage(mainHand))
            let machineNextTier = e.block.id.replace(getVoltage(e.block.getId()), getVoltage(mainHand))
            if (machinetier + 1 == itemtier && Item.of(machineNextTier) != null) {
                // upgrade passed
                
                // setting block like this doesnt work with nbt really well, command works better unfortunately
                let facing = e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase();
                // remove upgrade kit 
                e.item.count--
                //  adding ${machineData} to pass the nbt results in the block copying data and ejecting items which dupes right now..
                e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${x} ${y} ${z} ${machineNextTier}[facing=${facing}]`)
                e.player.server.runCommandSilent(`playsound gtceu:wrench player @p ${x} ${y} ${z}`);
            }
        }
    }
})

ItemEvents.rightClicked("minecraft:gold_ingot", e => {
    let { x, y, z } = e.player
    e.player.server.runCommandSilent(`playsound minecraft:item.flintandsteel.use player @p ${x} ${y} ${z}`);
   // event.server.playSound(soundID, volume, pitch);    // Play sound at the player's position
})