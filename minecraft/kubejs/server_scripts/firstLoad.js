PlayerEvents.loggedIn(event => {
    event.player.tell('§aWelcome to §6Worldshaper')
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('ftbquests:book')
        event.player.give(Item.of('gtceu:neutronium_mining_hammer', '{DisallowContainerItem:0b,GT.Behaviours:{AoEColumn:1,AoELayer:0,AoERow:1,MaxAoEColumn:1,MaxAoELayer:0,MaxAoERow:1,RelocateMinedBlocks:1b,RelocateMobDrops:1b,TorchPlacing:1b},GT.Tool:{AttackDamage:101.5f,AttackSpeed:-2.7f,Damage:0,HarvestLevel:6,MaxDamage:196604,ToolSpeed:76.0f},HideFlags:2,Unbreakable:1b}'))
        event.player.give('gtceu:prospector.luv')
    }
})