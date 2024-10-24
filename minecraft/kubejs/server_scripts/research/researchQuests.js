ServerEvents.recipes(event => {
    // lock crafting table recipe id behind the 'table' gamestage
    // requires the gamestage recipes addon!
    event.stage('minecraft:crafting_table', 'table')
    
    // lock new shapeless recipe behind gamestage 'stone"
    // works with base kjs and gamestages
    event.shaped(
        Item.of('minecraft:stone', 3),
        [
          'A B',
          ' C ', 
          'B A'
        ],
        {
          A: 'minecraft:andesite',
          B: 'minecraft:diorite',  
          C: 'minecraft:granite'
        }
    ).stage('stone') 
})

let selectedQuest = '6161FE4CC69F1EB5'
let questPacks = []
let researchNum = 0

function createResearchTask(itemIcon, questName, taskid, scienceList, amount) {
    let quest = [taskid, scienceList]
    questPacks.push(quest)
    
    FTBQuestsEvents.customTask(taskid, event => {
        event.maxProgress = amount
    })

    researchMenu.addSlot({
        page: 0, 
        x: researchNum, 
        y: 0,
        label: questName, 
        item: itemIcon, 
        tooltip: "questid: " + taskid,
        onLeftClicked: (player) =>{
            player.sendSystemMessage("Selected quest: " + questName + " (" + taskid + ")");
            selectedQuest = taskid
        }});

    researchNum++
}

// createResearchTask('test1', '1', ['red', 'green', 'blue'], 100)
// createResearchTask('test2', '2', ['red', 'green', 'blue', 'yellow'], 100)
createResearchTask('gtceu:steam_grinder' , 'Grinder', '6161FE4CC69F1EB5', ['red', 'green'], 100)  //grinder
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler
createResearchTask('gtceu:bronze_large_boiler' , 'Boiler', '449284A79D58CE0A', ['red', 'green'], 100)  //boiler

// WORKING
// function breakBlockQuest(taskID, playerData, amount, silkTouchAllowed, blockList) {
//     FTBQuestsEvents.customTask(taskID, quest => {
//         quest.setMaxProgress(amount) // Sets How many blocks have to be broken.
//         quest.setCheckTimer(20)
//         quest.setCheck((task, player) => {
//             // Check for the player data if they broke requiered blocks and apply them to the quest
//             // Also make sure the var is initalized
//             if (isNaN(eval(`player.persistentData.${playerData}`))) {
//                 eval(`player.persistentData.${playerData} = 0`)
//             }
//             eval(`task.progress += player.persistentData.${playerData}`)
//             eval(`player.persistentData.${playerData} = 0`)
//         })
//     })
//     BlockEvents.broken(ev => {
//         let brokenBlock = ev.getBlock()
//         let player = ev.getPlayer()

//         for (const block of blockList) {
//             block = block.toString()
//             let isTag = block.charAt(0) == '#' // Check if ID is tag
//             if (isTag) block = block.substring(1); // if tag, remove "#"
//             if (isTag && brokenBlock.getTags().toString().includes(block) || !isTag && brokenBlock.toString().includes(block)) {
//                 // Test if the block correspond to the "tag or ID
//                 if (isNaN(eval(`player.persistentData.${playerData}`))) {
//                     eval(`player.persistentData.${playerData}`) = 0
//                 }
//                 if (silkTouchAllowed || !player.mainHandItem.hasEnchantment('silk_touch', 1)) {
//                     eval(`player.persistentData.${playerData} = player.persistentData.${playerData} + 1`)
//                     break;
//                 }
//             }
//         }
//     })
// }
// breakBlockQuest('072057E2D09AB51B', "coal_mined", 50, false, ["#forge:ores/coal"])

// WORKING
// FTBQuestsEvents.customTask('5B5BEA3F80456C54', event => {
//     event.maxProgress = 100 // Sets the Progress Count.
//     event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
//     event.setCheck((task, player) => {
//         if(player.level.thundering) { //Checks if it is Thundering at a player.
//             task.progress++ // Adds progress to the quest.
//             console.log('thunder progressed')
//         }else{
//             console.log('thunder not progressed')
//         }
//     })
// })

// working
// FTBQuestsEvents.customTask('2A6351F8FC58FB59', event => {
//     event.maxProgress = 100 // Sets the Progress Count.
//     event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
//     event.setCheck((task, player) => {
//         console.log(player.y)
//         if(player.y < 0) {
//             console.log('progress')
//             task.progress++ 
//         }
//     })
// })

//working
// ItemEvents.rightClicked((event) => {
//     if(event.item.id == 'minecraft:shears') {
//         console.log(getQuestProgress(event.player, getQuestObject(event.player.level, '6161FE4CC69F1EB5')))
//         addQuestProgress(event.player, getQuestObject(event.player.level, '6161FE4CC69F1EB5'), 1)
//     }
// })
