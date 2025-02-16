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

    // ULV/shoddy
    event.create('coal_burner_recipe_type')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .setMaxTooltips(6)
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

    // ULV Machines
    event.create('coal_burner', 'generator')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Coal Burning Generator")
                .recipeType('coal_burner_recipe_type')
                .recipeModifier(MachineModifiers.SIMPLE_GENERATOR)
                .simpleGeneratorMachineRenderer('gtceu:block/generators/combustion')
        ))
})

