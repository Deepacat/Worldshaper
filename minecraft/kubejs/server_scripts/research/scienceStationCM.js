ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:science_station", 60)
        .requireFunctionOnStart(ctx => {
            if(isQuestComplete(ctx.machine.owner, getQuestObject(ctx.machine.owner.level, selectedQuest))){
                return ctx.error("Quest Completed")
            }
            let inputs = [] // placeholder for machine held items

            for (let i = 1; i <= 6; i++) {
                inputs.push(ctx.machine.getItemStored("input" + i))
            }

            let reqScience = questPacks.find(pack => pack[0] == selectedQuest)[1] // finds the required science pack list for the selected quest, in color names
            let reqSciencePacks = [] // placeholder for required science packs to make a list of full item ids

            for (let i = 0; i < reqScience.length; i++) {
                reqSciencePacks.push('kubejs:' + reqScience[i] + '_science_pack') // converts color names to full item ids
            }

            let matches = 0 // placeholder for number of matches in inputs compared to required
            let matchedItems = [] // placeholder for matched items
            for (let i = 0; i < inputs.length; i++) {
                if (!reqSciencePacks.includes(inputs[i].id)) { // checks if the item id is not in the list of required science packs
                    continue // if it is not, it continues to check the next item
                } else {
                    if (!matchedItems.includes(inputs[i].id)) {
                        matches++ // if it is, it is added to matches
                        matchedItems.push(inputs[i].id)
                    }
                }
            }
            if (matches == reqScience.length) { // checks if matches is equal to the number of required science packs, meaning that the correct science is inputted
                reqSciencePacks.forEach(pack => {
                    ctx.machine.removeItemFromSlot('input' + (inputs.indexOf(pack) + 1), 1, false) // remove used packs from slots
                })
                return ctx.success() // return success to start recipe
            } else {
                return ctx.error('incorrect science') // return error message if not enough matches
            }
        })
        .requireFunctionOnEnd(ctx => {
            addQuestProgress(ctx.machine.owner, getQuestObject(ctx.machine.owner.level, selectedQuest), 1)
            return ctx.success()
        })
})