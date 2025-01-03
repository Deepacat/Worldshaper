//priority: 999
ServerEvents.recipes(e => {
    // The beginning of suffering. (Nukes most gt recipes)
    e.remove({
        mod: "gtceu",
        not: [
            { type: "gtceu:coal_burner" },
            { type: "gtceu:packer" },
            { id: /gtceu:compressor\/compress.*/ },
            { id: /gtceu:extractor\/extract.*/ },
        ]
    })

    // large recipe groups for removing
    let removeTypes = [
        { type: "pneumaticcraft:explosion_crafting" }, { type: "pneumaticcraft:etching_tank" }, { type: "pneumaticcraft:assembly" },
        { type: "pneumaticcraft:amadron_trade" }, { type: "pneumaticcraft:memory_essence" }, { type: "pneumaticcraft:yeast_crafting" },
        { type: "pneumaticcraft:uv_light_box" }, { type: "pneumaticcraft:thermo_plant" }, { type: "pneumaticcraft:spawner_extraction" },
        { type: "pneumaticcraft:refinery" }, { type: "pneumaticcraft:pressure_chamber" }, { type: "pneumaticcraft:plastic_solidifying" },
        { type: "pneumaticcraft:heat_frame_cooling" }, { type: "pneumaticcraft:fluid_mixer" }, { type: "ad_astra:compressing" },
        { type: "ad_astra:alloying" }, { type: "ad_astra:refining" }, { type: "alexsmobs:capsid" },
        { type: "alexscaves:nuclear_furnace" }, { type: "alexscaves:spelunkery_table" }, { type: "createaddition:rolling" },
        { type: "create:pressing" }, { output: "create:experience_nugget", type: "create:crushing" 
    }]

    removeTypes.forEach(recipeType => {
        e.remove(recipeType)
    })

    // Remove recipes for all the things added to nukelist
    global.nukeList.forEach((item) => {
        // console.log(item)
        e.remove({ output: item })
    })

})