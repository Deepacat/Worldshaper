// Recipe types
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // Steam (Do not use fluid slots)
    event.create('steam_mixer_recipes')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)

    event.create('steam_thermal_centrifuge_recipes')
        .setEUIO('in')
        .setMaxIOSize(1, 3, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

    event.create('steam_centrifuge_recipes')
        .setEUIO('in')
        .setMaxIOSize(1, 3, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

        event.create('screening_recipes')   
        .setEUIO('in')
        .setMaxIOSize(1, 6, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MOTOR)

   event.create('primary_crushing_recipes')   
        .setEUIO('in')
        .setMaxIOSize(2, 6, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.CRUSHED_ORE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_HAMMER, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.MACERATOR)

   event.create('secondary_crushing_recipes')   
        .setEUIO('in')
        .setMaxIOSize(2, 6, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.CRUSHED_ORE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
    // ULV/shoddy
    // event.create('coal_burner_recipe_type')
    //     .setEUIO('out')
    //     .setMaxIOSize(1, 0, 0, 0)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    //     .setSound(GTSoundEntries.ARC)
    //     .setMaxTooltips(6)
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Steam Machines
    event.create('steam_mixer', 'steam')
        .hasHighPressure(false)
        .definition((hp, builder) => (
            builder
                .recipeType("steam_mixer_recipes")
                .workableSteamHullRenderer(hp, 'gtceu:block/machines/mixer')
        ))
    event.create('steam_thermal_centrifuge', 'steam')
        .hasHighPressure(false)
        .definition((hp, builder) => (
            builder
                .recipeType("steam_thermal_centrifuge_recipes")
                .workableSteamHullRenderer(hp, 'gtceu:block/machines/thermal_centrifuge')
        ))
    event.create('steam_centrifuge', 'steam')
        .hasHighPressure(false)
        .definition((hp, builder) => (
            builder
                .recipeType("steam_centrifuge_recipes")
                .workableSteamHullRenderer(hp, 'gtceu:block/machines/centrifuge')
        ))


        event.create('screen', 'simple')
        .tiers(GTValues.LV)
        .definition((tier, builder) => (
            builder
                .langValue('Screener')
                .recipeType('screening_recipes')
                .workableTieredHullRenderer('gtceu:block/machines/sifter')
        ))
    event.create('primary-crusher', 'simple')
        .tiers(GTValues.LV, GTValues.MV)
        .definition((tier, builder) => (
            builder
                .langValue('Primary Crusher')
                .recipeType('primary_crushing_recipes')
                .workableTieredHullRenderer('gtceu:block/machines/macerator')
        ))
    event.create('secondary-crusher', 'simple')
        .tiers(GTValues.LV, GTValues.MV)
        .definition((tier, builder) => (
            builder
                .langValue('Secondary Crusher')
                .recipeType('secondary_crushing_recipes')
                .workableTieredHullRenderer('gtceu:block/machines/macerator')
        ))
    // ULV Machines
    // event.create('coal_burner', 'generator')
    //     .tiers(GTValues.ULV)
    //     .definition((tier, builder) => (
    //         builder
    //             .langValue("Shoddy Coal Burning Generator")
    //             .recipeType('coal_burner_recipe_type')
    //             .recipeModifier(MachineModifiers.SIMPLE_GENERATOR)
    //             .simpleGeneratorMachineRenderer('gtceu:block/generators/combustion')
    //             .tooltips(GTMachineUtils.workableTiered(tier, GTValues.V[tier], GTValues.V[tier] * 64, GTRecipeTypes.get('coal_burner_recipe_type'), 0, false))
    //     ))
})