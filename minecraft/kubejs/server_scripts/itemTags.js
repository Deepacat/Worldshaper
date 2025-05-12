ServerEvents.tags('item', event => {

    event.add('minecraft:coals', 'gtceu:lignite_gem')
    event.add('minecraft:coals', 'gtceu:anthracite_gem')
    event.add('minecraft:coals', 'gtceu:bituminous_coal_gem')

    // #todo: dynamic function to tag appropriate minerals with ex. "primary iron mineral" for minerals that are majorly iron, etc
     
})