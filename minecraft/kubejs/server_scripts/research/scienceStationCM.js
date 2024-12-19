ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:science_station", 60)
        .requireFunctionOnStart(ctx => {
            while (ctx.machine.owner == null) {
                return ctx.error("Owner or science not found")
            }
            if (selectedQuest == '') {
                return ctx.error("No quest selected")
            }
            if (isQuestComplete(ctx.machine.owner, getQuestObject(ctx.tile.level, selectedQuest))) {
                return ctx.error("Quest Completed")
            }

            let inputs = [] // placeholder for machine held items
            for (let i = 1; i <= 6; i++) { // Adds all items currently in machine to an array
                if (ctx.machine.getItemStored("input" + i))
                    inputs.push(Item.of(ctx.machine.getItemStored("input" + i)))
            }

            let questPackArr = questPacks.find(pack => pack[0] == selectedQuest)[1] // gets the array of packs for the selected quest
            let reqSciencePacks = []
            questPackArr.forEach(pack => {
                reqSciencePacks.push(Item.of(`kubejs:${pack[0]}_science_pack`, pack[1]))
            })

            let matches = [] // placeholder for matched items
            reqSciencePacks.forEach(sciencePack => {
                for (let curSlot = 0; curSlot < inputs.length; curSlot++) {
                    if (inputs[curSlot].id == sciencePack.id) {
                        if (inputs[curSlot].count >= sciencePack.count) {
                            matches.push([sciencePack, curSlot])
                            return
                        }
                    }
                }
            })

            if (matches.length == reqSciencePacks.length) {
                matches.forEach(match => {
                    ctx.machine.removeItemFromSlot(`input${match[1] + 1}`, match[0].count, false)
                })
                ctx.machine.data.matches = matches
                return ctx.success()
            } else {
                return ctx.error("Missing Science")
            }
        })
        .requireFunctionOnEnd(ctx => {
            while (ctx.machine.owner == null) {
                return ctx.error("Owner or science not found")
            }
            addQuestProgress(ctx.machine.owner, getQuestObject(ctx.tile.level, selectedQuest), 1)
            return ctx.success()
        })

})