//priority: 999
//! This script loads first before the other startup scripts
/**
 * This script loads first before the other startup scripts.
 * Put your utility functions or global vars here so that you can access them in other scripts
 */

// Spoof our custom items' mod name
Platform.mods.kubejs.name = "SHAPE Program"

/**
 * Capitalizes the first char of the string
 * @param {string} word
 * @returns {string}
 */
const capitalize = (word) => (word[0].toUpperCase() + word.substring(1));

/**
 * Creates a placeholder item
 * @param {Registry.Item} registry
 * @param {ResourceLocation_ | string} name - item (id)
 */
const placeHolder = (registry, name) => {
    registry.create(name).texture('kubejs:item/barrier').displayName(`§eT. B. I. §r- §d${name.split('_').map(v => capitalize(v))}`);
}

global.compList = [
    "#gtceu:electric_motors",
    "#gtceu:electric_pumps",
    "#gtceu:fluid_regulators",
    "#gtceu:conveyor_modules",
    "#gtceu:electric_piston",
    "#gtceu:robot_arms",
    "#gtceu:field_generators",
    "#gtceu:emitters",
    "#gtceu:sensors"
]
global.voltageRegex = [/.*ulv.*/, /.*lv.*/, /.*mv.*/, /.*hv.*/, /.*ev.*/, /.*iv.*/, /.*luv.*/, /.*zpm.*/, /.*uv.*/, /.*uhv.*/]
global.voltageList = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']
// Defines the current packs max voltage for recipe sake
global.maxVoltage = global.voltageList[1]

// create nukelist
global.nukeList = []

// doing nukelist stuff inside of item modification since its post registry to access items

ItemEvents.modification(e => {
    let toNuke = [
        /^gtceu:.*board/, /^gtceu:.*chip/, /^gtceu:.*wafer/, /^gtceu:.*boule/, /^gtceu:.*transistor/,
        /^gtceu:.*resistor/, /^gtceu:.*capacitor/, /^gtceu:.*diode/, /^gtceu:.*inductor/, /^gtceu:.*soc/, /^gtceu:.*cpu/,
    ]
    toNuke.forEach(item => {
        console.log(item)
        console.log(Ingredient.of(item).itemIds)
        global.nukeList = global.nukeList.concat(Ingredient.of(item).itemIds)
    })

    // generated nukelist from tags ( DO NOT ADD TO MANUALLY, COPY PASTE FROM SERVER SCRIPT OUTPUT)
    // global.nukeList = [
    // 'gtceu:wetware_printed_circuit_board', 'gtceu:phenolic_circuit_board', 'gtceu:resin_circuit_board', 'gtceu:plastic_printed_circuit_board', 'gtceu:phenolic_printed_circuit_board', 'gtceu:plastic_circuit_board', 'gtceu:epoxy_circuit_board', 'gtceu:wetware_circuit_board', 'gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'gtceu:resin_printed_circuit_board', 'gtceu:fiber_reinforced_circuit_board', 'gtceu:epoxy_printed_circuit_board', 'gtceu:fiber_reinforced_printed_circuit_board', 'gtceu:multilayer_fiber_reinforced_circuit_board', 'gtceu:raw_crystal_chip', 'gtceu:uhpic_chip', 'gtceu:nand_chip', 'gtceu:qbit_cpu_chip', 'gtceu:microchip_processor', 'gtceu:nano_cpu_chip', 'gtceu:engraved_lapotron_crystal_chip', 'gtceu:ilc_chip', 'gtceu:hpic_chip', 'gtceu:lpic_chip', 'gtceu:nand_memory_chip', 'gtceu:engraved_crystal_chip', 'gtceu:ram_chip', 'gtceu:cpu_chip', 'gtceu:nor_memory_chip', 'gtceu:mpic_chip', 'gtceu:raw_crystal_chip_parts', 'gtceu:ulpic_chip', 'gtceu:nano_cpu_wafer', 'gtceu:advanced_soc_wafer', 'gtceu:nand_memory_wafer', 'gtceu:neutronium_wafer', 'gtceu:hpic_wafer', 'gtceu:lpic_wafer', 'gtceu:ilc_wafer', 'gtceu:naquadah_wafer', 'gtceu:mpic_wafer', 'gtceu:uhpic_wafer', 'gtceu:nor_memory_wafer', 'gtceu:qbit_cpu_wafer', 'gtceu:highly_advanced_soc_wafer', 'gtceu:silicon_wafer', 'gtceu:soc_wafer', 'gtceu:ram_wafer', 'gtceu:ulpic_wafer', 'gtceu:cpu_wafer', 'gtceu:simple_soc_wafer', 'gtceu:phosphorus_wafer', 'gtceu:neutronium_boule', 'gtceu:phosphorus_boule', 'gtceu:silicon_boule', 'gtceu:naquadah_boule', 'gtceu:vacuum_tube', 'gtceu:nand_chip', 'gtceu:basic_electronic_circuit', 'gtceu:basic_integrated_circuit', 'gtceu:microchip_processor', 'gtceu:good_electronic_circuit', 'gtceu:good_integrated_circuit', 'gtceu:micro_processor', 'gtceu:advanced_integrated_circuit', 'gtceu:micro_processor_assembly', 'gtceu:nano_processor', 'gtceu:micro_processor_computer', 'gtceu:nano_processor_assembly', 'gtceu:quantum_processor', 'gtceu:micro_processor_mainframe', 'gtceu:nano_processor_computer', 'gtceu:quantum_processor_assembly', 'gtceu:crystal_processor', 'gtceu:nano_processor_mainframe', 'gtceu:quantum_processor_computer', 'gtceu:crystal_processor_assembly', 'gtceu:wetware_processor', 'gtceu:quantum_processor_mainframe', 'gtceu:crystal_processor_computer', 'gtceu:wetware_processor_assembly', 'gtceu:crystal_processor_mainframe', 'gtceu:wetware_processor_computer', 'gtceu:wetware_processor_mainframe', 'gtceu:transistor', 'gtceu:advanced_smd_transistor', 'gtceu:smd_transistor', 'gtceu:resistor', 'gtceu:advanced_smd_resistor', 'gtceu:smd_resistor', 'gtceu:smd_capacitor', 'gtceu:capacitor', 'gtceu:advanced_smd_capacitor', 'gtceu:tantalum_capacitor', 'gtceu:zpm_diode', 'gtceu:ev_diode', 'gtceu:luv_diode', 'gtceu:advanced_smd_diode', 'gtceu:lv_diode', 'gtceu:mv_diode', 'gtceu:uv_diode', 'gtceu:smd_diode', 'gtceu:hv_diode', 'gtceu:iv_diode', 'gtceu:diode', 'gtceu:inductor', 'gtceu:smd_inductor', 'gtceu:advanced_smd_inductor', 'gtceu:advanced_soc_wafer', 'gtceu:soc', 'gtceu:highly_advanced_soc_wafer', 'gtceu:soc_wafer', 'gtceu:highly_advanced_soc', 'gtceu:advanced_soc', 'gtceu:simple_soc', 'gtceu:crystal_soc', 'gtceu:simple_soc_wafer', 'gtceu:nano_cpu_wafer', 'gtceu:crystal_cpu', 'gtceu:qbit_cpu_wafer', 'gtceu:cpu_chip', 'gtceu:qbit_cpu_chip', 'gtceu:nano_cpu_chip', 'gtceu:cpu_wafer'
    // ]

    // GT manually added to nukelist
    global.nukeList.push('gtceu:data_stick', 'gtceu:data_orb', 'gtceu:data_module')
    // PNC manually added to nukelist
    global.nukeList.push()
    // AE2 manually added to nukelist
    global.nukeList.push()
    // Ad Astra manually added to nukelist
    global.nukeList.push('ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe')
    // Misc manually added to nukelist
    global.nukeList.push()

    console.log(global.nukeList)
})
