//Creates Raw Ore for non-Vanilla and non-Alloy materials.
const ore_properties = {
    tin: { color: tin },
    silver: { color: silver },
    lead: { color: lead },
    nickel: { color: nickel },
    aluminum: { color: aluminum },
    zinc: { color: zinc },
  };
  
  global.minerals = [
    "tin",
    "silver",
    "lead",
    "nickel",
    "aluminum",
    "zinc",
  ];
  global.mineral_shapes = [
    "crushed",
    "dirty_crushed",
    "ground",
    "dirty_ground",
    "powdered",
    "dirty_powdered"
  ]
  
  StartupEvents.registry("item", (event) => {

    for (const shape of global.mineral_shapes) {
        for (const mineral of global.minerals) {
            event
                .create(`${shape}_${mineral}`)
                .texture("layer0", `kubejs:item/rock/${shape}`)
                .color(0, ore_properties[mineral].color)
                .tag(`forge:${shape}_minerals`)
                .tag(`forge:${shape}_minerals/${mineral}`)
        }
    }
  });
  