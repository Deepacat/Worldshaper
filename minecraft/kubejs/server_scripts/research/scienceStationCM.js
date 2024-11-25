ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:science_station", 60)
        .requireFunctionOnStart(ctx => {
            while (ctx.machine.owner == null) {
                return ctx.error("Owner not found")
            }
            if (isQuestComplete(ctx.machine.owner, getQuestObject(ctx.tile.level, selectedQuest))) {
                return ctx.error("Quest Completed")
            }

            let inputs = [] // placeholder for machine held items
            for (let i = 1; i <= 6; i++) { // Adds all items currently in machine to an array
                inputs.push(ctx.machine.getItemStored("input" + i))
            }

            let currentQuest = {}
            questObjs.forEach(obj => { // Finds the quest obj for the selected quest
                if (obj.mainQuest == selectedQuest) {
                    currentQuest = obj
                    return
                }
                return ctx.error("Task not found")
            })

            let reqScience = []
            currentQuest.tasks.forEach(task => {
                if (!isQuestComplete(ctx.machine.owner, getQuestObject(ctx.tile.level, task.taskId))) {
                    reqScience.push([task.science, task.taskId])
                }
            })

            let matches = [] // placeholder for matched items
            let matchedItems = [] // placeholder to avoid duplicates of packs
            reqScience.forEach(science => {
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].id == science[0] && !matchedItems.includes(science[0])) {
                        matchedItems.push(science[0])
                        matches.push(science)
                    }
                }
            })

            if (matches.length > 0) {
                matches.forEach(match => {
                    ctx.machine.removeItemFromSlot('input' + (inputs.indexOf(match[0]) + 1), 1, false)
                })
                ctx.machine.data.matches = matches

                return ctx.success()
            } else {
                return ctx.error("Missing Science")
            }

        })
        .requireFunctionOnEnd(ctx => {
            while (ctx.machine.owner == null) {
                return ctx.error("Owner not found")
            }
            let matches = ctx.machine.data.matches
            matches.forEach(match => {
                addQuestProgress(ctx.machine.owner, getQuestObject(ctx.tile.level, match[1]), 1)
            })
            return ctx.success()
        })
})