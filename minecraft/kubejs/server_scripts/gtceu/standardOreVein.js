
const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")


GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
/*
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
*/
    event.add('kubejs:overworld/cupric', vein => {
        vein.weight(100)
        vein.clusterSize(40)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0.5)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.get('cupric_minerals')).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.get('cupric_minerals')).size(2, 4))
                .layer(l => l.weight(5).block(() => Block.getBlock('gtceu:raw_cupric_minerals_block')).size(1, 4))
                .layer(l => l.weight(10).mat(GTMaterials.Copper).size(1, 2))
            )
        )
    })
    event.add('kubejs:overworld/ferrous', vein => {
        vein.weight(80)
        vein.clusterSize(50)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0.3)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(-10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.get('ferrous_minerals')).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.get('ferrous_minerals')).size(1, 4))
                .layer(l => l.weight(5).block(() => Block.getBlock('gtceu:raw_ferrous_minerals_block')).size(1, 4))
                .layer(l => l.weight(10).mat(GTMaterials.Iron).size(1, 2))
            )
        )
    })
    event.add('kubejs:overworld/plumbic', vein => {
        vein.weight(70)
        vein.clusterSize(30)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0.5)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.get('plumbic_minerals')).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.get('plumbic_minerals')).size(2, 4))
                .layer(l => l.weight(5).block(() => Block.getBlock('gtceu:raw_plumbic_minerals_block')).size(1, 4))
                .layer(l => l.weight(10).mat(GTMaterials.Lead).size(1, 2))
            )
        )
    })
    event.add('kubejs:overworld/stannic', vein => {
        vein.weight(70)
        vein.clusterSize(35)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0.5)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(-10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.get('stannic_minerals')).size(2, 4))
                .layer(l => l.weight(50).mat(GTMaterials.get('stannic_minerals')).size(2, 4))
                .layer(l => l.weight(5).block(() => Block.getBlock('gtceu:raw_stannic_minerals_block')).size(1, 4))
                .layer(l => l.weight(10).mat(GTMaterials.Tin).size(1, 2))
            )
        )
    })
    event.add('kubejs:overworld/anthracite', vein => {
        vein.weight(75)
        vein.clusterSize(50)
        vein.density(1)
        vein.discardChanceOnAirExposure(0.1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10,50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern( pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.get('anthracite')).size(1, 2))
                .layer(l => l.weight(30).block(() => Block.getBlock('gtceu:raw_anthracite_block')).size(1, 1))
                //.withBlock(() => Block.getBlock('gtceu:raw_anthracite_block'), 7)
            )   
        )
    })
    event.add('kubejs:overworld/lignite', vein => {
        vein.weight(80)
        vein.clusterSize(75)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0.1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10,70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern( pattern => pattern
                .layer(l => l.weight(50).mat(GTMaterials.get('lignite')).size(1, 2))
                .layer(l => l.weight(30).block(() => Block.getBlock('gtceu:raw_lignite_block')).size(1, 2))
            )   
        )
    })
    event.add('kubejs:overworld/coals', vein => {
        vein.weight(55)
        vein.clusterSize(100)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(45).mat(GTMaterials.Coal).size(1, 4))
                .layer(l => l.weight(35).mat(GTMaterials.get('bituminous_coal')).size(2, 4))
                .layer(l => l.weight(10).block(() => Block.getBlock('gtceu:raw_coal_block')).size(1, 2))
                .layer(l => l.weight(10).block(() => Block.getBlock('gtceu:raw_bituminous_coal_block')).size(1, 2))
            )
        )
    })
})