GTCEuServerEvents.bedrockOreVeins(event =>{
    // iron
    event.add("gtceu:iron", vein =>{
        vein.dimensions(["minecraft:overworld", "gregtorio:semiflat"])
        // gt material type, amount
        vein.material(GTMaterials.Diamond, 1.2)
        vein.material(GTMaterials.Iron, 1)
        vein.material(GTMaterials.Platinum, 2)
        // weight for vein to be chosen over others in placement?
        vein.weight(100)
        // clueless, maybe how much is mined at once
        vein.yield(2)
        // the chunk size of veins in world
        vein.size(3)
        // how much is mined at once once vein enters depleted state?
        vein.depletedYield(1)
        // chance of vein being depleted when drill finishes operation?
        vein.depletionChance(100)
        // amount vein is depleted by on sucessful depletion operation?
        vein.depletionAmount(50)
    })
    // // copper
    // event.add("gtceu:copper", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Copper, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
    // // tin
    // event.add("gtceu:tin", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Tin, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
    // // lead
    // event.add("gtceu:lead", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Lead, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
    // //zinc
    // event.add("gtceu:zinc", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Zinc, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
    // // gold
    // event.add("gtceu:gold", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Gold, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
    // // silver
    // event.add("gtceu:silver", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Silver, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
    // // redstone
    // event.add("gtceu:redstone", vein =>{
    //     vein.dimensions("minecraft:overworld")
    //     vein.material(GTMaterials.Redstone, 1)
    //     vein.weight(100)
    //     vein.yield(2)
    //     vein.size(3)
    //     vein.depletedYield(1)
    //     vein.depletionChance(100)
    //     vein.depletionAmount(50)
    // })
})