ServerEvents.recipes((event) => {
    event.remove({ id: 'ae2:network/cables/glass_fluix'})
    event.remove({ id: 'ae2:network/blocks/interfaces_interface'})
    event.remove({ id: 'ae2:network/parts/storage_bus'})
})