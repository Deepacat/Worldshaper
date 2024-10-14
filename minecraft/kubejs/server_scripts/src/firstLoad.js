PlayerEvents.loggedIn(event => {
    event.player.tell('§aWelcome to §6worldshaper')
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('ftbquests:book')
        event.player.tell('§bOpen your questbook to claim starter items')
    }
})