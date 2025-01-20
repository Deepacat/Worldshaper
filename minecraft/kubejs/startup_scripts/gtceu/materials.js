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


// **********************************************************
// MINERAL COMPOSITES
// **********************************************************

    event.create("ferrous_minerals") // IRON 
        .dust()
        .color(0xD8AF93).iconSet(GTMaterialIconSet.DULL)
        .ore(2,1)
    event.create("cupric_minerals") //COPPER
        .dust()
        .color(0x5F947A).iconSet(GTMaterialIconSet.DULL)
        .ore(2,1)
    event.create("plumbic_minerals") //LEAD
        .dust()
        .color(0x332A43).iconSet(GTMaterialIconSet.DULL)
        .ore(1,1)
    event.create("stannic_minerals") //TIN
        .dust()
        .color(0x808A77).iconSet(GTMaterialIconSet.DULL)
        .ore(1,1)

})

GTCEuStartupEvents.materialModification(() => {
    // Removing Wire properties from anything MURDERS powerlines
})