ItemEvents.tooltip(e => {
    e.addAdvanced("supplementaries:key", (item, advanced, text) => {
        text.add(1, [
            Text.gray("Right click on an Automobile to park inside the key"),
        ])
        if (item.nbt) {
            text.add(2, [Text.green("Car parked")])
        } else {
            text.add(2, [Text.red("No car parked")])
        }
    })
})