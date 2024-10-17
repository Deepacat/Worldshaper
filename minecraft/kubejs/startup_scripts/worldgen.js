WorldgenEvents.remove(event => {
  // print all features for a given biome filter
  // event.printFeatures('', 'minecraft:plains')
  event.removeFeatureById('fluid_springs', 'gtceu:raw_oil_sprout')
  event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_surface')
  event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_underground')
})  