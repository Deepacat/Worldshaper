ServerEvents.recipes(e => {
    // in world fire crafting recipe builder
    function inFire(inputs, outputs) {
        let inFireObj = {}
        inFireObj.type = "lychee:item_inside"
        inFireObj.block_in = "fire"
        inFireObj.item_in = []
        inputs.forEach(i => {
            inFireObj.item_in.push({ item: i });
        })
        inFireObj.post = []
        outputs.forEach(o => {
            inFireObj.post.push({ type: "drop_item", item: o })
        })
        e.custom(inFireObj)
    }

    // Remember to add items to fire/burn immune
    inFire(['kubejs:ceramic_ball_casting_mold', 'gtceu:glass_dust'], ['gtceu:glass_tube'])
    inFire(['minecraft:clay_ball'], ['kubejs:ceramic_ball'])
    inFire(['kubejs:clay_ball_casting_mold'], ['kubejs:ceramic_ball_casting_mold'])
    inFire(['iron_ingot'], ['gtceu:wrought_iron_ingot'])
})