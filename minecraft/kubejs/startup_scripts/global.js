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
global.voltageRegex = [/^gtceu:.*ulv_.*/, /^gtceu:.*lv_.*/, /^gtceu:.*mv_.*/, /^gtceu:.*hv_.*/, /^gtceu:.*ev_.*/, /^gtceu:.*iv_.*/, /^gtceu:.*luv_.*/, /^gtceu:.*zpm_.*/, /^gtceu:.*uv_.*/, /^gtceu:.*uhv_.*/]

// Defines the current packs max voltage for recipe sake
global.maxVoltage = 1

// create nukelist
global.nukeList = []

// doing nukelist stuff inside of item modification since its post registry to access items

ItemEvents.modification(e => {
    // list of regex's to nuke
    let regexToNuke = [
        // comps
        /^gtceu:.*board/, /^gtceu:.*chip/, /^gtceu:.*wafer/, /^gtceu:.*boule/, /^gtceu:.*transistor/, /^gtceu:.*resistor/, /^gtceu:.*capacitor/, /^gtceu:.*diode/, /^gtceu:.*inductor/, /^gtceu:.*soc/, /^gtceu:.*cpu/,
        // materials (WOW THIS IS AWFUL)
        /^gtceu:.*hastelloy_c_276/, /^gtceu:.*titanium_tungsten_carbide/, /^gtceu:.*titanium_carbide/, /^gtceu:.*stellite_100/, /^gtceu:.*hastelloy_x/, /^gtceu:.*maraging_steel_300/, /^gtceu:.*incoloy_ma_956/, /^gtceu:.*watertight_steel/, /^gtceu:.*zeron_100/, /^gtceu:.*molybdenum_disilicide/, /^gtceu:.*hsla_steel/, /^gtceu:.*tantalum_carbide/, /^gtceu:.*blue_alloy/, /^gtceu:.*hsss/, /^gtceu:.*hsse/, /^gtceu:.*hssg/, /^gtceu:.*red_alloy/, /^gtceu:.*blue_steel/, /^gtceu:.*red_steel/, /^gtceu:.*borosilicate_glass/, /^gtceu:.*potin/, /^gtceu:.*ruthenium_trinium_americium_neutronate/, /^gtceu:.*enriched_naquadah_trinium_europium_duranide/, /^gtceu:.*uranium_rhodium_dinaquadide/, /^gtceu:.*indium_tin_barium_titanium_cuprate/, /^gtceu:.*samarium_iron_arsenic_oxide/, /^gtceu:.*uranium_triplatinum/, /^gtceu:.*mercury_barium_calcium_cuprate/, /^gtceu:.*magnesium_dioboride/, /^gtceu:.*manganese_phosphide/, /^gtceu:.*tungsten_carbide/, /^gtceu:.*nickel_zinc_ferrite/, /^gtceu:.*indium_gallium_phosphide/, /^gtceu:.*gallium_arsenide/, /^gtceu:.*yttrium_barium_cuprate/, /^gtceu:.*vanadium_gallium/, /^gtceu:.*magnalium/, /^gtceu:.*niobium_nitride/, /^gtceu:.*niobium_titanium/, /^gtceu:.*bismith_bronze/, /^gtceu:.*black_bronze/, /^gtceu:.*rose_gold/, /^gtceu:.*sterling_silver/, /^gtceu:.*samarium/, /^gtceu:.*tantalum/, /^gtceu:.*yttrium/, /^gtceu:.*plutonium_241/, /^gtceu:.*niobium/, /^gtceu:.*neodymium/, /^gtceu:.*molybdenum/, /^gtceu:.*manganese/, /^gtceu:.*bismuth/, /^gtceu:.*beryllium/, /^gtceu:.*cobalt/
    ]

    // add tiered items regex's to nuke list,
    global.voltageRegex.forEach(regex => {
        if(global.voltageRegex.indexOf(regex) > global.maxVoltage)
            regexToNuke.push(regex)
    })
    console.log(regexToNuke)

    // add items to nuke list from the regex's
    regexToNuke.forEach(itemlist => {
        let currentitemlist = Ingredient.of(itemlist).itemIds
        currentitemlist.forEach(item => {
            if (!global.nukeList.includes(item))
                global.nukeList = global.nukeList.concat(item)
        })
    })
    
    // GT manually added to nukelist
    global.nukeList.push(
        // gcyms

    )
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
