//priority: 1
ServerEvents.recipes(e => {
    // ULV Machine Recipes
    e.recipes.gtceu.coal_burner_recipe_type('kubejs:gtceu/test/coal_tag_burning')
        .itemInputs('#minecraft:coals')
        .EUt(-8)
        .duration(200)
})

// Plate recipes
plateRecipe(GTMaterials.Iron, '', 3)
plateRecipe(GTMaterials.Gold, '', 2)
plateRecipe(GTMaterials.Copper, '', 3)
plateRecipe(GTMaterials.Tin, '', 3)
plateRecipe(GTMaterials.Lead, '', 3)
plateRecipe('#forge:gems/diamond', GTMaterials.Diamond, 3)

// Rod recipes
rodRecipe(GTMaterials.Iron, 2)
rodRecipe(GTMaterials.Tin, 2)
rodRecipe(GTMaterials.Copper, 2)

// Gear recipes
gearRecipe(GTMaterials.Iron, 2)
gearRecipe(GTMaterials.Bronze, 2)

// Screw recipes
screwRecipe(GTMaterials.Iron, 2)

// Bolt recipes
boltRecipe(GTMaterials.Iron, 2)