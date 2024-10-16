GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("fluix")
        .dust()
        .components("1x nether_quartz", "1x certus_quartz", "1x redstone")
        .color(0x8f5ccb)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR);

    event.create('charged_certus_quartz')
        .gem()
        .dust()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.QUARTZ)
})