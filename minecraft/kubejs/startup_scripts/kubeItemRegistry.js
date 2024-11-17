StartupEvents.registry('item', e => {
    // voltage tiers and color for registering tier based items
    const volts = [['LV', '§7'], ['MV', '§b'], ['HV', '§6'], ['EV', '§5'], ['IV', '§9'], ['LuV', '§d'], ['ZPM', '§c'], ['UV', '§3'], ['UHV', '§4']]

    function makeSciencePack(id, displayName) {
        e.create(id)
            .maxStackSize(64)
            .rarity(3)
            .displayName(displayName)
            .tag('kubejs:science_pack')
    }

    // loops through voltage array and makes science packs and upgrade kits for the existing tiers
    for (let i = 0; i < global.maxVoltage; i++) {
        // upgrade kits
        e.create(volts[i][0].toLowerCase() + '_upgrade_kit')
            .maxStackSize(16)
            .rarity(3)
            .displayName(`${volts[i][1]}${volts[i][0]} Upgrade Kit`)
            .tag('kubejs:upgrade_kit')

        makeSciencePack(volts[i][0].toLowerCase() + '_science_pack', `${volts[i][1]}${volts[i][0]} Science Pack`)
    }
    makeSciencePack('ulv_science_pack', '§8ULV Science Pack')
    makeSciencePack('primordial_science_pack', '§2Primordial Science Pack')
    makeSciencePack('candy_science_pack', '§dCandy Science Pack')
    makeSciencePack('magnetic_science_pack', '§9Magnetic Science Pack')
    makeSciencePack('abyssal_science_pack', '§1Abyssal Science Pack')
    makeSciencePack('toxic_science_pack', '§aToxic Science Pack')
    makeSciencePack('darkened_science_pack', '§cDarkened Science Pack')
    makeSciencePack('corrupted_science_pack', '§4Co§kr§r§4rrupt§ke§r§4d Sc§ki§r§4en§kc§r§4e P§ka§r§4ck')

    e.create('quarry_kit').maxStackSize(16).tooltip('§7Right click to get the items for a steam quarry').displayName('§6Quarry Kit')
})