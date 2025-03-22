BlockEvents.rightClicked(e => {
    const { item, block, player } = e
    if (item.getId() !== "supplementaries:key") return
    let reward = e.player.level.createEntity("automobility:automobile")

    if (item.nbt && block) {
        item.nbt.Pos[0] = Number(block.getX())
        item.nbt.Pos[1] = Number(block.getY() + 2)
        item.nbt.Pos[2] = Number(block.getZ())
        reward.nbt = item.nbt
        reward.spawn()
        item.nbt = null
    }
})

ItemEvents.entityInteracted("supplementaries:key", e => {
    const { item, target } = e
    if (target.type !== "automobility:automobile") return

    item.nbt = target.getNbt()
    target.setRemoved("unloaded_to_chunk")
    e.cancel()
})
