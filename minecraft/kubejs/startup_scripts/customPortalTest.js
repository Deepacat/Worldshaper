const CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')


// portal registries, loaded the java class, for some reason
// my core mod needs to have the train addon implemented
// for this kjs to work with trains????
StartupEvents.postInit(e => {
    // semiflat
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('minecraft', 'stone')
        )
        .destDimID(new ResourceLocation('worldshaper', 'semiflat'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Limbo
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('dimdoors', 'solid_static')
        )
        .destDimID(new ResourceLocation('dimdoors', 'limbo'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Moon
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('ad_astra', 'desh_factory_block')
        )
        .destDimID(new ResourceLocation('ad_astra', 'moon'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Primordial Caves
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('alexscaves', 'limestone')
        )
        .destDimID(new ResourceLocation('worldshaper', 'primordial'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Mars
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('ad_astra', 'ostrum_factory_block')
        )
        .destDimID(new ResourceLocation('ad_astra', 'mars'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Magnetic Caves
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('alexscaves', 'galena')
        )
        .destDimID(new ResourceLocation('worldshaper', 'magnetic'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Candy cavity
    // CustomPortalBuilder.beginPortal()
    //     ["frameBlock(net.minecraft.resources.ResourceLocation)"](
    //         new ResourceLocation('minecraft', 'diamond_block')
    //     )
    //     .destDimID(new ResourceLocation('minecraft', 'the_end'))
    //     .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
    //     .tintColor(255, 255, 255)
    //     .registerPortal();
    // Venus
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('ad_astra', 'calorite_factory_block')
        )
        .destDimID(new ResourceLocation('ad_astra', 'venus'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Forlorn Hollows
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('alexscaves', 'coprolith')
        )
        .destDimID(new ResourceLocation('worldshaper', 'forlorn'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Abyssal Depths
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('alexscaves', 'abyssmarine')
        )
        .destDimID(new ResourceLocation('worldshaper', 'abyssal'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Glacio
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('ad_astra', 'etrium_factory_block')
        )
        .destDimID(new ResourceLocation('ad_astra', 'glacio'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
    // Toxic Caves
    CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.resources.ResourceLocation)"](
            new ResourceLocation('alexscaves', 'block_of_uranium')
        )
        .destDimID(new ResourceLocation('worldshaper', 'toxic'))
        .lightWithItem(new ResourceLocation('minecraft', 'diamond'))
        .tintColor(255, 255, 255)
        .registerPortal();
})