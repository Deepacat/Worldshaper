//priority: 999
//! This script loads first before the other startup scripts
/**
 * This script loads first before the other startup scripts.
 * Put your utility functions or global vars here so that you can access them in other scripts
 */

// Spoof our custom items' mod name
Platform.mods.kubejs.name = "Shape Program"

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

global.voltageRegex = ['ulv_', 'lv_', 'mv_', 'hv_', 'ev_', 'iv_', 'luv_', 'zpm_', 'uv_', 'uhv_']
// Defines the current packs max voltage for item hiding sake
global.maxVoltage = 1

// list of regex's to nuke
let regexToNuke = [
    // comps
    'board', 'chip', 'wafer', 'boule', 'transistor', 'resistor', 'capacitor', 'diode', 'inductor', 'soc', 'cpu',
    // materials (WOW THIS IS AWFUL)
    'hastelloy_c_276', 'titanium_tungsten_carbide', 'titanium_carbide', 'stellite_100', 'hastelloy_x', 'maraging_steel_300', 'incoloy_ma_956', 'watertight_steel', 'zeron_100', 'molybdenum_disilicide', 'hsla_steel', 'tantalum_carbide', 'blue_alloy', 'hsss', 'hsse', 'hssg', 'red_alloy', 'blue_steel', 'red_steel', 'borosilicate_glass', 'potin', 'ruthenium_trinium_americium_neutronate', 'enriched_naquadah_trinium_europium_duranide', 'uranium_rhodium_dinaquadide', 'indium_tin_barium_titanium_cuprate', 'samarium_iron_arsenic_oxide', 'uranium_triplatinum', 'mercury_barium_calcium_cuprate', 'magnesium_dioboride', 'manganese_phosphide', 'tungsten_carbide', 'nickel_zinc_ferrite', 'indium_gallium_phosphide', 'gallium_arsenide', 'yttrium_barium_cuprate', 'vanadium_gallium', 'magnalium', 'niobium_nitride', 'niobium_titanium', 'bismith_bronze', 'black_bronze', 'rose_gold', 'sterling_silver', 'samarium', 'tantalum', 'yttrium', 'plutonium_241', 'niobium', 'neodymium', 'molybdenum', 'manganese', 'bismuth', 'beryllium', 'cobalt', 'damascus_steel', 'black_steel', 'opal', 'red_garnet', 'yellow_garnet', 'olivine', 'sodalite', 'lazurite', 'ruby', 'sapphire', 'blue_topaz', 'emerald', 'green_sapphire', 'topaz', 'amethyst', 'echo_shard'
]

// create nukelist
global.nukeList = []

// doing nukelist stuff inside of item modification since its post registry to access items
ItemEvents.modification(e => {
    // add tiered items regex's to nuke list,
    global.voltageRegex.forEach(regex => {
        if (global.voltageRegex.indexOf(regex) > global.maxVoltage)
            regexToNuke.push(regex)
    })

    // add items to nuke list from the regex's
    regexToNuke.forEach(itemlistRegex => {
        let formattedRegex = new RegExp(`^gtceu.*${itemlistRegex}`, 'g')
        let currentitemlist = Ingredient.of(formattedRegex).itemIds
        currentitemlist.forEach(item => {
            if (!global.nukeList.includes(item))
                global.nukeList = global.nukeList.concat(item)
        })
    })

    // GT manually added to nukelist
    global.nukeList.push(
        // gcyms
        "gtceu:large_maceration_tower", "gtceu:large_chemical_bath", "gtceu:large_centrifuge", "gtceu:large_mixer", "gtceu:large_electrolyzer", "gtceu:large_electromagnet", "gtceu:large_packer", "gtceu:large_assembler", "gtceu:large_circuit_assembler", "gtceu:large_arc_smelter", "gtceu:large_engraving_laser", "gtceu:large_sifting_funnel", "gtceu:blast_alloy_smelter", "gtceu:large_autoclave", "gtceu:large_material_press", "gtceu:large_brewer", "gtceu:large_cutter", "gtceu:large_distillery", "gtceu:large_extractor", "gtceu:large_extruder", "gtceu:large_solidifier", "gtceu:large_wiremill", "gtceu:mega_blast_furnace", "gtceu:mega_vacuum_freezer"
    )
    // PNC manually added to nukelist
    global.nukeList.push()
    // AE2 manually added to nukelist
    global.nukeList.push()
    // Ad Astra manually added to nukelist
    global.nukeList.push('ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe')
    // Misc manually added to nukelist
    global.nukeList.push()

    // console.log(global.nukeList)
})
