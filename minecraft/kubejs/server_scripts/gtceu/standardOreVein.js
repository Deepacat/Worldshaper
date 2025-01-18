GTCEuServerEvents.oreVeins(event => {
    event.removeAll()

    event.add('kubejs:overworld/iron', vein => {
        vein.weight(70)
        vein.clusterSize(85)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.Iron).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.Iron).size(2, 4))

                // .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:raw_iron_block')).size(1, 1))
            )
        )
    })
    event.add('kubejs:overworld/copper', vein => {
        vein.weight(75)
        vein.clusterSize(90)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.Copper).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.Copper).size(2, 4))

                // .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:raw_copper_block')).size(1, 1))
            )
        )
    })
    event.add('kubejs:overworld/tin', vein => {
        vein.weight(60)
        vein.clusterSize(85)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.Tin).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.Tin).size(2, 4))
                // .layer(l => l.weight(1).block(() => Block.getBlock('gtceu:raw_tin_block')).size(1, 1))
            )
        )
    })
    event.add('kubejs:overworld/lead', vein => {
        vein.weight(55)
        vein.clusterSize(70)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(GTMaterials.Lead).size(2, 4))
                .layer(l => l.weight(35).mat(GTMaterials.Lead).size(2, 4))
                // .layer(l => l.weight(1).block(() => Block.getBlock('gtceu:raw_lead_block')).size(1, 1))
            )
        )
    })
    event.add('kubejs:overworld/coal', vein => {
        vein.weight(55)
        vein.clusterSize(100)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(GTMaterials.Coal).size(2, 4))
                .layer(l => l.weight(35).mat(GTMaterials.Coal).size(2, 4))
                // .layer(l => l.weight(1).block(() => Block.getBlock('gtceu:raw_lead_block')).size(1, 1))
            )
        )
    })
})