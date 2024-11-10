//priority: 999
ServerEvents.recipes(e => {
    // remove recipes from 90% of gt machines/blocks/tiered items
    // global.voltageTiers.forEach(dn => {
    //     e.remove({ mod: 'gtceu', output: dn })
    // })
    // remove recipes for circuits and uses of circuits
    // e.remove({ output: '#gtceu:circuits' })
    // e.remove({ input: '#gtceu:circuits' })
    // e.remove({ mod: 'gtceu', output: '#forge:rotor', type: 'minecraft:crafting' })
    // e.remove({ mod: 'gtceu', output: '#forge:hot_ingots' })

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
})