const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const $FluidPipeProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
const $WireProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');

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

GTCEuStartupEvents.materialModification(() => {
    // Removing Wire properties from anything MURDERS powerlines
})