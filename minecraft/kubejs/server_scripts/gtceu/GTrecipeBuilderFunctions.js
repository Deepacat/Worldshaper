//priority: 10
// Script for recipe building functions

// /**
//  * Creates plate recipes for the specified input material.
//  *
//  * Depending on the input type and mode, it generates different types of recipes
//  * for converting the input into an output plate using various methods such as hammering,
//  * forge hammering, or bending.
//  *
//  * @param {string} input - The input material for the recipe. If it includes 'gtceu:', 
//  *                         it is assumed to be a GTCEu material and will be processed accordingly.
//  * @param {string} output - The output material for the recipe. Used if the input is not GTCEu material.
//  * @param {number} mode - Determines the type of recipes to generate:
//  *                        3 = All methods (hammering, forge hammer, bender),
//  *                        2 = Forge hammer and bender,
//  *                        1 = Only bender.
//  */
// function plateRecipe(input, output, mode) {
//     if (input.toString().includes('gtceu:')) {
//         output = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.plate, input).id
//         input = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.ingot, input).id
//     } else {
//         output = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.plate, output).id
//     }

//     ServerEvents.recipes(e => {
//         if (mode >= 3) {
//             e.shaped(output, [
//                 'H  ',
//                 'I  ',
//                 'I  '
//             ], {
//                 'H': '#forge:tools/hammers',
//                 'I': input
//             }).id(`kubejs:hammering/${output.split(':')[1]}`)
//         }
//         if (mode >= 2) {
//             e.recipes.gtceu.forge_hammer(`kubejs:forge_hammer/${output.split(':')[1]}`)
//                 .itemInputs(`3x ${input}`)
//                 .itemOutputs(`2x ${output}`)
//                 .EUt(8)
//                 .duration(400)
//         }
//         if (mode >= 1) {
//             e.recipes.gtceu.bender(`kubejs:bender/${output.split(':')[1]}`)
//                 .itemInputs(input)
//                 .itemOutputs(output)
//                 .circuit(1)
//                 .EUt(32)
//                 .duration(500)
//         }
//     })
//     unhideTag(`#forge:plates/${output.split(':')[1].replace('_plate', '')}`)
// }
// /**
//  * Creates rod recipes for the specified input material.
//  *
//  * Depending on the input type and mode, it generates different types of recipes
//  * for converting the input into an output rod using various methods such as filing,
//  * or lathe.
//  *
//  * @param {string} material - The input material for the recipe. If it includes 'gtceu:', 
//  *                            it is assumed to be a GTCEu material and will be processed accordingly.
//  * @param {number} mode - Determines the type of recipes to generate:
//  *                        2 = All methods (filing, lathe),
//  *                        1 = Only lathe.
//  */
// function rodRecipe(material, mode) {
//     let output = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.rod, material).id
//     let input = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.ingot, material).id

//     ServerEvents.recipes(e => {
//         if (mode >= 2) {
//             e.shaped(output, [
//                 ' F ',
//                 ' R '
//             ], {
//                 'F': '#forge:tools/files',
//                 'R': input
//             }).id(`kubejs:filing/${output.split(':')[1]}`)
//         }
//         if (mode >= 1) {
//             e.recipes.gtceu.lathe(`kubejs:lathe/${output.split(':')[1]}`)
//                 .itemInputs(`1x ${input}`)
//                 .itemOutputs(`2x ${output}`)
//                 .EUt(8)
//                 .duration(400)
//         }
//     })
//     unhideTag(`#forge:rods/${output.split(':')[1].replace('_rod', '')}`)
// }

// function gearRecipe(material, mode) {
//     let rod = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.rod, material).id
//     let gear = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.gear, material).id
//     let plate = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.plate, material).id
//     let ingot = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.ingot, material).id

//     ServerEvents.recipes(e => {
//         if (mode >= 2) {
//             e.shaped(gear, [
//                 'PRP',
//                 'RHR',
//                 'PRP'
//             ], {
//                 'P': plate,
//                 'R': rod,
//                 'H': '#forge:tools/hammers'
//             }).id(`kubejs:gears/${gear.split(':')[1]}`)
//         }
//         if (mode >= 1) {
//             e.recipes.gtceu.extruder(`kubejs:extruder/${gear.split(':')[1]}`)
//                 .itemInputs(`4x ${ingot}`)
//                 .notConsumable('gtceu:gear_extruder_mold')
//                 .itemOutputs(`1x ${gear}`)
//                 .EUt(8)
//                 .duration(600)
//         }
//     })
//     unhideTag(`#forge:gears/${gear.split(':')[1].replace('_gear', '')}`)
// }

// function boltRecipe(material, mode) {
//     let rod = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.rod, material).id
//     let bolt = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.bolt, material).id
//     let ingot = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.ingot, material).id

//     ServerEvents.recipes(e => {
//         if (mode >= 2) {
//             e.shaped(`2x ${bolt}`, [
//                 'RS '
//             ], {
//                 'R': rod,
//                 'S': '#forge:tools/saws'
//             }).id(`kubejs:bolts/${bolt.split(':')[1]}`)
//         }
//         if (mode >= 1) {
//             e.recipes.gtceu.extruder(`kubejs:extruder/${bolt.split(':')[1]}`)
//                 .itemInputs(`1x ${ingot}`)
//                 .notConsumable('gtceu:bolt_extruder_mold')
//                 .itemOutputs(`8x ${bolt}`)
//                 .EUt(8)
//                 .duration(600)
//         }
//     })
//     unhideTag(`#forge:bolts/${bolt.split(':')[1].replace('_bolt', '')}`)
// }

// function screwRecipe(material, mode) {
//     let bolt = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.bolt, material).id
//     let screw = ChemicalHelper['get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)'](TagPrefix.screw, material).id

//     ServerEvents.recipes(e => {
//         if (mode >= 2) {
//             e.shaped(screw, [
//                 'FB '
//             ], {
//                 'B': bolt,
//                 'F': '#forge:tools/files',

//             }).id(`kubejs:screws/${screw.split(':')[1]}`)
//         }
//         if (mode >= 1) {
//             e.recipes.gtceu.lathe(`kubejs:lathe/${screw.split(':')[1]}`)
//                 .itemInputs(`1x ${bolt}`)
//                 .itemOutputs(`2x ${screw}`)
//                 .EUt(8)
//                 .duration(600)
//         }
//     })
//     unhideTag(`#forge:screws/${screw.split(':')[1].replace('_screw', '')}`)
// }

function unhideTag(ingredient) {
    ServerEvents.tags('item', e => {
        e.remove('c:hidden_from_recipe_viewers', ingredient)
    })
}