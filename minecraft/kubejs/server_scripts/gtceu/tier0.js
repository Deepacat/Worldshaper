ServerEvents.recipes(e => {
    e.forEachRecipe({ type: "gtceu:mixer" }, recipe => {
        let r = JSON.parse(recipe.json)
        if (r.inputs.fluid) { return }

        let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null
        if (!(EUt <= 8)) { //Reject recipes that cost more than 8 eu/t, check is done like this to filter out null
            return
        }

        let outputs = r.outputs.item

        let toInput = []

        r.inputs.item.forEach(items => {
            if (items.content.type == "gtceu:circuit") { return }

            let curCount = items.content.count
            let curItem = Ingredient.of(items.content.ingredient)

            toInput.push(Item.of(curItem, curCount))
        })

        let toOutput = Item.of(Ingredient.of(outputs[0].content.ingredient), outputs[0].content.count)


        e.recipes.gtceu.steam_mixer_recipes(`kubejs:gtceu/steam_mixer/${recipe.getId().split(':')[1]}`)
            .itemInputs(toInput)
            .itemOutputs(toOutput)
            .outputFluids()
            .duration(r.duration)
            .EUt(EUt)
    })
})