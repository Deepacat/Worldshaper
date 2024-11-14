//priority: 999
ServerEvents.recipes(e => {
    // The beginning of suffering. (Nukes most gt recipes except ones my ass is not making a builder for)
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

    e.remove({ type: "gtceu:extruder", output: /.*rod/, not: { output: /.*long.*/ } })

    e.remove({ mod: "pneumaticcraft" })

    e.remove([
        { type: "ad_astra:compressing" },
        { type: "ad_astra:alloying" },
        { type: "createaddition:rolling" },
        { type: "create:pressing" }
    ])

    // Remove recipes for all the things added to nukelist
    global.nukeList.forEach((item) => {
        // console.log(item)
        e.remove({ output: item })
    })

})