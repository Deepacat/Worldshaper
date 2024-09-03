GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((veinId, vein) => {
        vein.surfaceIndicatorGenerator(indicator => indicator
            .block(Block.getBlock("minecraft:air"))
            .placement("above")
            .density(0.4)
            .radius(5))
    })
})