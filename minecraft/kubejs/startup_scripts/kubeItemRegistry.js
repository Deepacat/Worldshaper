StartupEvents.registry('item', event => {
    // voltage tiers and color for registering tier based items
    const volts = [['LV','§7'], ['MV','§b'], ['HV','§6'], ['EV','§5'], ['IV','§9'], ['LuV','§d'], ['ZPM','§c'], ['UV','§3'], ['UHV','§4']]

    // loops through voltage array and makes science packs and upgrade kits for the tiers
    for(let i = 0; i < volts.length; i++){
        event.create(volts[i][0].toLowerCase()+'_upgrade_kit')
            .maxStackSize(16)
            .rarity(3)
            .displayName(`${volts[i][1]}${volts[i][0]} Upgrade Kit`)
            .tag('kubejs:upgrade_kit')
        event.create(volts[i][0].toLowerCase()+'_science_pack')
            .maxStackSize(64)
            .rarity(3)
            .displayName(`${volts[i][1]}${volts[i][0]} Science Pack`)
            .tag('kubejs:science_pack')
    }
    event.create('ulv_science_pack')
        .maxStackSize(64)
        .rarity(3)
        .displayName('§8ULV Science Pack')
        .tag('kubejs:science_pack')
})

