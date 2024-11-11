//priority: 999
ServerEvents.recipes(e => {
    // The beginning of suffering.
    e.remove({
        mod: "gtceu",
        not: [
            { output: /#forge:tools.*/ },
            { type: "gtceu:bender" },
            { type: "gtceu:extruder" },
            { type: "gtceu:forge_hammer" },
            { type: "gtceu:packer" },
            { type: "gtceu:alloy_smelter" },
            { type: "gtceu:compressor" },
            { type: "gtceu:extractor" },
            { type: "gtceu:compressor" },
            { type: "gtceu:wiremill" },
            { type: "gtceu:lathe" },
            { type: "gtceu:compressor" }
        ]
    })

    // Remove recipes for all the things added to nukelist
    global.nukeList.forEach((item) => {
        // console.log(item)
        e.remove({ output: item })
    })

})