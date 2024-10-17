StartupEvents.registry('item', event => {
    const volts = [['LV','§7'], ['MV','§b'], ['HV','§6'], ['EV','§5'], ['IV','§9'], ['LuV','§d'], ['ZPM','§c'], ['UV','§3'], ['UHV','§4']]
    for(let i = 0; i < volts.length; i++){
        event.create(volts[i][0].toLowerCase()+'_upgrade_kit')
            .maxStackSize(16)
            .glow(true)
            .displayName(`${volts[i][1]}${volts[i][0]} Upgrade Kit`)
    }
})