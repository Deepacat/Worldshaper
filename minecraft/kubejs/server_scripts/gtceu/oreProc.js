//priority: 10
// Script for ore processing recipe building functions


function recipe(type, id) {
    ServerEvents.recipes(e => {
        // const recipe = e.recipes.gtceu[type];
        e.recipes.gtceu[type](id)
            .itemInputs('2x dirt')
            .itemOutputs('2x cobblestone')
            .EUt(1)
            .duration(100)
    })
}

recipe('forge_hammer', 'kubejs:forge_hammer/test')

// Ore block to crushed ore with macerator
var oreProcessing = {
    // Ore block to crushed ore with macerator
    oreBlockMacerating: function() {
        
    },
    // Raw ore to crushed ore with macerator
    rawOreMacerating: function() {
        
    },
    // Crushed ore to purified ore with washer
    crushedOreWashing: function() {

    },
    // Crushed ore to purified ore with chem bath
    crushedOreBathing: function() {

    },
    // Crushed ore to impure dusts with macerator
    crushedOreMacerating: function() {

    },
    // Impure dusts to purified dusts with washer, or cauldron
    impureDustWashing: function() {

    },
    // Purified ore to purified dust with macerator
    purifiedOreMacerating: function() {

    },
    // Purified dust to regular dust with centrifuge
    purifiedDustCentrifuging: function() {

    },
    // Crushed or purified ore to refined ore with thermal centrifuge
    oreThermalCentrifuging: function() {

    },
    // Refined ore to regular dust with macerator
}