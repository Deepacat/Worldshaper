ServerEvents.recipes(e => {
    // -- GT Tools --
    // hammer
    e.shaped(Item.of('gtceu:iron_hammer', 1, { MaxDamage: 1024 }), [
        ' BI',
        ' SB',
        'S  '
    ], {
        'S': 'minecraft:stick',
        'I': 'minecraft:iron_ingot',
        'B': '#forge:storage_blocks/iron'
    })
    e.shaped(Item.of('gtceu:steel_hammer', 1, { Unbreakable: 1 }), [
        ' BI',
        ' SB',
        'S  '
    ], {
        'S': 'minecraft:stick',
        'I': 'gtceu:steel_ingot',
        'B': '#forge:storage_blocks/steel'
    })
    // wirecutter
    e.shaped(Item.of('gtceu:iron_wire_cutter', 1, { MaxDamage: 512 }), [
        'PFP',
        'HPS',
        'RCR'
    ], {
        'P': 'gtceu:iron_plate',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers',
        'S': '#forge:tools/screwdrivers',
        'R': 'gtceu:iron_rod',
        'C': 'gtceu:iron_screw'
    })
    e.shaped(Item.of('gtceu:steel_wire_cutter', 1, { Unbreakable: 1 }), [
        'PFP',
        'HPS',
        'RCR'
    ], {
        'P': 'gtceu:steel_plate',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers',
        'S': '#forge:tools/screwdrivers',
        'R': 'gtceu:steel_rod',
        'C': 'gtceu:steel_screw'
    })
    // file
    e.shaped(Item.of('gtceu:iron_file', 1, { MaxDamage: 128 }), [
        ' P ',
        ' P ',
        ' S '
    ], {
        'P': 'gtceu:iron_plate',
        'S': 'minecraft:stick'
    })
    // saw
    e.shaped(Item.of('gtceu:iron_saw', 1, { MaxDamage: 128 }), [
        'PPS',
        'FHS'
    ], {
        'P': 'gtceu:iron_plate',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers',
        'S': 'minecraft:stick'
    })
    // wrench
    e.shaped(Item.of('gtceu:iron_wrench', 1, { MaxDamage: 256 }), [
        'BHB',
        ' P ',
        ' P '
    ], {
        'P': 'gtceu:iron_plate',
        'B': 'minecraft:iron_block',
        'H': '#forge:tools/hammers'
    })
    // screwdriver
    e.shaped(Item.of('gtceu:iron_screwdriver', 1, { MaxDamage: 128 }), [
        ' FR',
        ' RH',
        'S  '
    ], {
        'F': '#forge:tools/files',
        'R': 'gtceu:iron_rod',
        'H': '#forge:tools/hammers',
        'S': 'minecraft:stick'
    })
    // mortar
    e.shaped(Item.of('gtceu:iron_mortar', 1, { 'GT.Tool': { MaxDamage: 512 } }), [
        ' B ',
        'SBS',
        'SSS'
    ], {
        'B': 'minecraft:iron_block',
        'S': 'minecraft:stone'
    })
    // knife
    e.shaped(Item.of('gtceu:iron_knife', 1, { MaxDamage: 128 }), [
        ' FP',
        ' PH',
        'S  '
    ], {
        'P': 'gtceu:iron_plate',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers',
        'S': 'minecraft:stick'
    })
    // crowbar
    e.shaped(Item.of('gtceu:iron_crowbar', 1, { MaxDamage: 128 }), [
        'RR ',
        'HRF',
        ' R '
    ], {
        'R': 'gtceu:iron_rod',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers'
    })
})