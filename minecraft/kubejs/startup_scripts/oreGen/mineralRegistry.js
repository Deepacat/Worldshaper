//Creates Raw Ore for non-Vanilla and non-Alloy materials.
const ore_properties = {
    tin: { color: tin },
    silver: { color: silver },
    lead: { color: lead },
    nickel: { color: nickel },
    aluminum: { color: aluminum },
    zinc: { color: zinc },
  };
  
  global.raw_ores = [
    "tin",
    "silver",
    "lead",
    "nickel",
    "aluminum",
    "zinc",
  ];
  
  StartupEvents.registry("item", (event) => {
    for (const mat of global.raw_ores) {
      event
        .create(`crushed_${mat}`)
        .texture("layer0", "kubejs:item/rock/dirty_crushed_ore")
        .color(0, ore_properties[mat].color)
        //.tag("forge:crushed_materials")
        //.tag(`forge:crushed_materials/${mat}`);
    }
    for (const mat of global.raw_ores) {
        event
          .create(`ground_${mat}`)
          .texture("layer0", "kubejs:item/grit")
          .color(0, ore_properties[mat].color)
          //.tag("forge:ground_materials")
          //.tag(`forge:ground_materials/${mat}`);
      }
  });
  