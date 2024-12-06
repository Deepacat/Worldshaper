PlayerEvents.loggedIn(event => {
    event.player.tell('§aWelcome to §6Worldshaper')
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('ftbquests:book')
    }
})