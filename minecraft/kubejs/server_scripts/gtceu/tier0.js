//priority: 1
ServerEvents.recipes(e => {
    // ULV Machine Recipes
    e.recipes.gtceu.coal_burner_recipe_type('kubejs:gtceu/test/coal_tag_burning')
        .itemInputs('#minecraft:coals')
        .EUt(-8)
        .duration(200)
})

// Plate recipes
plateRecipe('#forge:ingots/iron', 'iron', 3)
plateRecipe('#forge:ingots/gold', 'gold', 2)
plateRecipe('#forge:ingots/copper', 'copper', 3)
plateRecipe('#forge:ingots/tin', 'tin', 3)
plateRecipe('#forge:ingots/lead', 'lead', 3)