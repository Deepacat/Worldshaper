//priority: 999
ServerEvents.recipes(e => {
    // The beginning of suffering. (Nukes most gt recipes)
    e.remove({
        mod: "gtceu",
        not: [
            { type: "gtceu:coal_burner" },
            { type: "gtceu:packer" },
            { id: /gtceu:compressor\/compress.*/ },
            { id: /gtceu:extractor\/extract.*/ },
        ]
    })

    // large recipe groups for removing
    let removeTypes = [
        //Pneumaticcraft
        { type: "pneumaticcraft:explosion_crafting" },
        { type: "pneumaticcraft:etching_tank" },
        { type: "pneumaticcraft:assembly" },
        { type: "pneumaticcraft:amadron_trade" },
        { type: "pneumaticcraft:memory_essence" },
        { type: "pneumaticcraft:yeast_crafting" },
        { type: "pneumaticcraft:uv_light_box" },
        { type: "pneumaticcraft:thermo_plant" },
        { type: "pneumaticcraft:spawner_extraction" },
        { type: "pneumaticcraft:refinery" },
        { type: "pneumaticcraft:pressure_chamber" },
        { type: "pneumaticcraft:plastic_solidifying" },
        { type: "pneumaticcraft:heat_frame_cooling" },
        { type: "pneumaticcraft:fluid_mixer" },
        //AdAstra
        { type: "ad_astra:compressing" },
        { type: "ad_astra:alloying" },
        { type: "ad_astra:refining" },
        //AlexMobs
        { type: "alexsmobs:capsid" },
        { type: "alexscaves:nuclear_furnace" },
        { type: "alexscaves:spelunkery_table" },
        //Create + Addons
        { type: "createaddition:rolling" },
        { type: "create:pressing" }, 
        { output: "create:experience_nugget", type: "create:crushing" }
    ]

    removeTypes.forEach(recipeType => {
        e.remove(recipeType)
    })

    // Remove recipes for all the things added to nukelist
    global.nukeList.forEach((item) => {
        // console.log(item)
        e.remove({ output: item })
    })
})

ServerEvents.tags('item', e => {
    global.nukeList.forEach((item) => {
        e.removeAllTagsFrom(item)
    })

    // Serverside hiding through tags, to take advantage of gt registry rather than regex
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        let material = id.name
        /**
         * Removes the given material from the given tag if there are any items -
         * inside that tag that match the material. This is used to remove all GT -
         * materials that are not needed from the various material categories.
         * @param {string} material - The material to remove from the tag (e.g. "iron")
         * @param {string} tag - The tag to remove the material from (e.g. "gears")
         */
        function removeIfNotEmpty(material, tag) {
            if (Ingredient.of(`#forge:${tag}/${material}`).itemIds.length > 0) {
                e.add('c:hidden_from_recipe_viewers', `#forge:${tag}/${material}`)
            }
        }

        removeIfNotEmpty(material, 'plates')
        removeIfNotEmpty(material, 'double_plates')
        removeIfNotEmpty(material, 'dense_plates')
        removeIfNotEmpty(material, 'gears')
        removeIfNotEmpty(material, 'foils')
        removeIfNotEmpty(material, 'small_gears')
        removeIfNotEmpty(material, 'screws')
        removeIfNotEmpty(material, 'bolts')
        removeIfNotEmpty(material, 'rods')
        removeIfNotEmpty(material, 'rods/long')
        removeIfNotEmpty(material, 'rings')
        removeIfNotEmpty(material, 'springs')
        removeIfNotEmpty(material, 'small_springs')
        removeIfNotEmpty(material, 'fine_wires')
        removeIfNotEmpty(material, 'rounds')
        removeIfNotEmpty(material, 'rotors')
    })
})