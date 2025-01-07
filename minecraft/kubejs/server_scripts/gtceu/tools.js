ServerEvents.recipes(e => {
    // -- GT Tools --
    // hammer
    e.shaped(Item.of('gtceu:iron_hammer', 1, { MaxDamage: 1024 }), [
        ' BI',
        ' SB',
        'S  '
    ], {
        'S': 'minecraft:stick',
        'I': '#forge:ingots/iron',
        'B': '#forge:storage_blocks/iron'
    })
    e.shaped(Item.of('gtceu:steel_hammer', 1, { Unbreakable: 1 }), [
        ' BI',
        ' SB',
        'S  '
    ], {
        'S': 'minecraft:stick',
        'I': '#forge:ingots/steel',
        'B': '#forge:storage_blocks/steel'
    })
    // wirecutter
    e.shaped(Item.of('gtceu:iron_wire_cutter', 1, { MaxDamage: 512 }), [
        'PFP',
        'HPS',
        'RCR'
    ], {
        'P': '#forge:plates/iron',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers',
        'S': '#forge:tools/screwdrivers',
        'R': '#forge:rods/iron',
        'C': '#forge:screws/iron'
    })
    e.shaped(Item.of('gtceu:steel_wire_cutter', 1, { Unbreakable: 1 }), [
        'PFP',
        'HPS',
        'RCR'
    ], {
        'P': '#forge:plates/steel',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers',
        'S': '#forge:tools/screwdrivers',
        'R': '#forge:rods/steel',
        'C': '#forge:screws/steel'
    })
    // file
    e.shaped(Item.of('gtceu:iron_file', 1, { MaxDamage: 128 }), [
        ' P ',
        ' P ',
        ' S '
    ], {
        'P': '#forge:plates/iron',
        'S': 'minecraft:stick'
    })
    // saw
    e.shaped(Item.of('gtceu:iron_saw', 1, { MaxDamage: 128 }), [
        'PPS',
        'FHS'
    ], {
        'P': '#forge:plates/iron',
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
        'P': '#forge:plates/iron',
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
        'R': '#forge:rods/iron',
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
        'P': '#forge:plates/iron',
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
        'R': '#forge:rods/iron',
        'F': '#forge:tools/files',
        'H': '#forge:tools/hammers'
    })
})