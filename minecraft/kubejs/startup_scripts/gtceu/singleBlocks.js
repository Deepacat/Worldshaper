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
        
    event.create('autoclave', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Autoclave")
                .recipeType(GTRecipeTypes.AUTOCLAVE_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/autoclave')
        ))

    event.create('assembler', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Assembler")
                .recipeType(GTRecipeTypes.ASSEMBLER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/assembler')
        ))

    event.create('circuit_assembler', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Circuit Assembler")
                .recipeType(GTRecipeTypes.CIRCUIT_ASSEMBLER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/circuit_assembler')
        ))

    event.create('fermenter', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Fermenter")
                .recipeType(GTRecipeTypes.FERMENTING_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/fermenter')
        ))

    event.create('brewery', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Brewery")
                .recipeType(GTRecipeTypes.BREWING_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/brewery')
        ))

    event.create('distillery', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Distillery")
                .recipeType(GTRecipeTypes.DISTILLERY_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/distillery')
        ))

    event.create('forming_press', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Forming Press")
                .recipeType(GTRecipeTypes.FORMING_PRESS_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/forming_press')
        ))

    event.create('scanner', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Scanner")
                .recipeType(GTRecipeTypes.SCANNER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/scanner')
        ))

    event.create('canner', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Canner")
                .recipeType(GTRecipeTypes.CANNER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/canner')
        ))

    event.create('chemical_reactor', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Chemical Reactor")
                .recipeType(GTRecipeTypes.CHEMICAL_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/chemical_reactor')
        ))

    event.create('wiremill', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Wiremill")
                .recipeType(GTRecipeTypes.WIREMILL_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/wiremill')
        ))

    event.create('electrolyzer', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Electrolyzer")
                .recipeType(GTRecipeTypes.ELECTROLYZER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/electrolyzer')
        ))

    event.create('chemical_bath', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Chemical Bath")
                .recipeType(GTRecipeTypes.CHEMICAL_BATH_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/chemical_bath')
        ))

    event.create('bender', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Bender")
                .recipeType(GTRecipeTypes.BENDER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/bender')
        ))

    event.create('lathe', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Lathe")
                .recipeType(GTRecipeTypes.LATHE_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/lathe')
        ))

    event.create('extruder', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => (
            builder
                .langValue("Shoddy Extruder")
                .recipeType(GTRecipeTypes.EXTRUDER_RECIPES)
                .workableTieredHullRenderer('gtceu:block/machines/extruder')
        ))
})

