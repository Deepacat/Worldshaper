// Recipe Types
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('science')
        .category('science')
        .setEUIO('in')
        .setMaxIOSize(6, 0, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.TURBINE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.METAL_PIPE)
})

// Machines
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('sciencestation', 'simple', GTValues.LV)
        .langValue("science station")
        .recipeType('science', true, true)
        .afterWorking(machine => {
            
        })
})