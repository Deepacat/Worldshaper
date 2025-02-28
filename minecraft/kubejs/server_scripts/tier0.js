//priority: 1
ServerEvents.recipes(e => {
    // ULV Machine Recipes
    e.recipes.gtceu.coal_burner_recipe_type('kubejs:gtceu/test/coal_tag_burning')
        .itemInputs('#minecraft:coals')
        .EUt(-8)
        .duration(200)

    e.recipes.custommachinery.custom_craft('custommachinery:machine_workbench', 'minecraft:dirt')
        .jei()
        .requireItem(Item.of('minecraft:iron_ingot', 4), 'in0')
        .requireItem(Item.of('gtceu:iron_plate', 2), 'in1')

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