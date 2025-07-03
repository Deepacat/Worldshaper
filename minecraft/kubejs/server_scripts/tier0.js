//priority: 1
ServerEvents.recipes(e => {
    function stackShaped(result, pattern, key) {
        for (let i in key) {
            let stack = Item.of(key[i])
            key[i] = {
                item: stack.id.toString(),
                count: stack.count
            }
        }
        result = Item.of(result)
        let recipe = {
            type: "stackcrafting:stack_crafting",
            category: "misc",
            key: key,
            pattern: pattern,
            result: {
                item: result.id,
                count: result.count
            }
        }
        e.custom(recipe)
    }

    stackShaped("17x minecraft:dirt", [
        "A",
        "B",
        "C"
    ], {
        "A": "3x minecraft:iron_ingot",
        "B": "4x minecraft:gold_ingot",
        "C": "5x minecraft:diamond",
    })
    stackShaped("worldshapercore:ulv_miner", [
        "ABC",
        "DE "
    ], {
        "A": "40x gtceu:wrought_iron_ingot",
        "B": "18x minecraft:copper_ingot",
        "C": "12x gtceu:lead_ingot",
        "D": "32x gtceu:tin_ingot",
        "E": "10x gtceu:rubber_plate"
    })

    e.shaped('worldshapercore:ulv_miner', [
        'MMM',
        'CHC',
        'VDV'
    ], {
        'M': 'ulvcovm:ulv_electric_motor',
        'C': 'gtceu:tin_single_cable',
        'H': 'gtceu:ulv_machine_hull',
        'V': 'gtceu:vacuum_tube',
        'D': 'gtceu:iron_drill_head'
    })
    e.shaped('gtceu:ulv_coal_burner', [
        'PCP',
        'MHM',
        'WTW'
    ], {
        'M': 'ulvcovm:ulv_electric_motor',
        'T': 'gtceu:tin_single_cable',
        'H': 'gtceu:ulv_machine_hull',
        'C': 'gtceu:vacuum_tube',
        'P': 'ulvcovm:ulv_electric_piston',
        'W': '#forge:plates/wrought_iron'
    })
    e.shaped('gtceu:ulv_machine_hull', [
        'CUC',
        'WPW'
    ], {
        'C': 'gtceu:tin_single_cable',
        'U': 'gtceu:ulv_machine_casing',
        'W': 'gtceu:wood_plate',
        'P': 'gtceu:iron_plate'
    })
    e.shaped('gtceu:rubber_plate', [
        ' H ',
        'RRR'
    ], {
        'H': '#forge:tools/hammers',
        'R': 'gtceu:sticky_resin'
    })
    e.shaped('gtceu:vacuum_tube', [
        'BTB',
        'WWW'
    ], {
        'B': 'gtceu:wrought_iron_bolt',
        'T': 'gtceu:glass_tube',
        'W': 'gtceu:copper_single_wire'
    })
    e.replaceInput({ id: 'gtceu:shaped/drill_head_iron' }, 'gtceu:steel_plate', 'gtceu:wrought_iron_plate')
    e.shaped('kubejs:clay_ball_casting_mold', [
        'CBC',
        'CCC'
    ], {
        'B': 'kubejs:ceramic_ball',
        'C': 'minecraft:clay_ball'
    }).keepIngredient('kubejs:ceramic_ball')
    e.shaped('gtceu:wood_plate', [
        'H  ',
        'P  ',
        'P  '
    ], {
        'H': '#forge:tools/hammers',
        'P': '#minecraft:planks'
    })

    e.replaceInput({ id: 'ulvcovm:shaped/ulv_electric_motor' }, 'gtceu:magnetic_iron_rod', 'gtceu:iron_rod')
    e.replaceInput({ id: 'immersive_aircraft:engine' }, 'minecraft:piston', 'ulvcovm:ulv_electric_piston')
})

// Plate recipes
// plateRecipe(GTMaterials.Iron, '', 3)
// plateRecipe(GTMaterials.Gold, '', 2)
// plateRecipe(GTMaterials.Copper, '', 3)
// plateRecipe(GTMaterials.Tin, '', 3)
// plateRecipe(GTMaterials.Lead, '', 3)
// plateRecipe('#forge:gems/diamond', GTMaterials.Diamond, 3)

// Rod recipes
// rodRecipe(GTMaterials.Iron, 2)
// rodRecipe(GTMaterials.Tin, 2)
// rodRecipe(GTMaterials.Copper, 2)

// Gear recipes
// gearRecipe(GTMaterials.Iron, 2)
// gearRecipe(GTMaterials.Bronze, 2)

// Screw recipes
// screwRecipe(GTMaterials.Iron, 2)

// Bolt recipes
// boltRecipe(GTMaterials.Iron, 2)