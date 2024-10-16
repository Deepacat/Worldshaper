ServerEvents.recipes(e => {
    // Pattern related things, maybe disabled entirely
    let patternRecipes = [
        'ae2:network/blocks/pattern_providers_interface',
        'ae2:network/blocks/pattern_providers_interface_part',
        'ae2:network/crafting/patterns_blank',
        'ae2:network/parts/terminals_pattern_encoding',
        'ae2:network/parts/terminals_pattern_accessor',
        
        'expatternprovider:epp',
        'expatternprovider:epp_part',
        'expatternprovider:epp_upgrade',
        'expatternprovider:epa_upgrade',

        // 'fulleng:terminals/block_pattern_encoding_terminal_from_part',
        // 'fulleng:terminals/block_pattern_access_terminal_from_part'
    ]

    patternRecipes.forEach((recipe) => { e.remove({ id: recipe }) })

    e.remove({ id: 'ae2:network/blocks/quantum_ring' })
    e.remove({ id: 'ae2:network/blocks/quantum_link' })

})