ServerEvents.recipes(e => {
    e.forEachRecipe({type: "gtceu:mixer"}, recipe => {
        let r = JSON.parse(recipe.json)

        let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null
        if (!(EUt <= 8)) { //Reject recipes that cost more than 8 eu/t, check is done like this to filter out null
            return
        }
        
        if (r.inputs.fluid) { return }
        let outputs = r.outputs.item
        if (!outputs || outputs[0].content.type != "gtceu:sized" || !outputs[0].content.ingredient.item) { //Not sure if outputs other than "item" are possible. Check to be safe
            return
        }
        r.inputs.item.forEach(items => {
            console.log(items)
        })
        console.log('-')
        // console.log(r.inputs.item)
        e.recipes.gtceu.steam_mixer(`kubejs:gtceu/steam_mixer/${recipe.getId().split(':')[1]}`)
            .itemInputs('dirt')
            .itemOutputs('diamond')
            .duration(r.duration)
            .EUt(7)
        // e.custom(recipe.json.toString()).id(`kubejs:gtceu/steam_mixer/${recipe.getId().split(':')[1]}`)
    })
})