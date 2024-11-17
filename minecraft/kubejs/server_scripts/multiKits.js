let kitsNames = [
    'kubejs:quarry_kit',
]

let quarry_kit = [
    "worldshapercore:steam_quarry",
    "gtceu:steam_input_hatch",
    "gtceu:steam_input_bus",
    "2x gtceu:steam_output_bus",
    "6x gtceu:steel_pipe_casing",
    "12x gtceu:solid_machine_casing",
    "4x minecraft:chain"
]

let kits = [
    quarry_kit
]

ItemEvents.rightClicked(event => {
    if (kitsNames.includes(event.item.id)) {
        kitsNames.forEach(kitname => {
            let kit = kits[kitsNames.indexOf(kitname)]
            kit.forEach(item => {
                event.player.give(item)
            })
        })
        event.player.swing()
        event.player.playSound('minecraft:item.armor.equip_iron')
        event.item.count--
    }
})