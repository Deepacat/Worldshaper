ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:science_station", 60)
        .requireFunctionOnStart(ctx => {
            if (isQuestComplete(ctx.machine.owner, getQuestObject(ctx.machine.owner.level, selectedQuest))) {
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
                if (!isQuestComplete(ctx.machine.owner, getQuestObject(ctx.machine.owner.level, task.taskId))) {
                    reqScience.push([task.science, task.taskId])
                }
            })

            let matches = [] // placeholder for matched items
            reqScience.forEach(science => {
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].id == science[0]) {
                        matches.push(science)
                    }
                }
            })

            console.log(matches)

            return ctx.success()
        })
        .requireFunctionOnEnd(ctx => {
            return ctx.success()
        })
})