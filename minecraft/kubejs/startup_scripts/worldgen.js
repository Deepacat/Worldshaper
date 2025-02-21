WorldgenEvents.remove(event => {
	// print all features for a given biome filter
	// event.printFeatures('', 'minecraft:plains')
	// event.printFeatures('underground_ores', '#minecraft:is_overworld')
	event.removeFeatureById('fluid_springs', 'gtceu:raw_oil_sprout')
	event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_surface')
	event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_underground')
})