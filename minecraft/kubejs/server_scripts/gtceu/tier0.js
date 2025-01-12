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
