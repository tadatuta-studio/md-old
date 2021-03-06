({
    shouldDeps: [
        {
            elems: ['inner']
        },
        {
            block: 'b-link'
        },
        {
            block: 'logo',
            elems: ['link', 'pic', 'tagline', 'tagline-highlight']
        },
        {
            block: 'lang-switcher'
        },
        {
            block: 'dropdown',
            elems: ['item']
        },
        {
            block: 'b-menu-horiz',
            mods: { layout: 'normal' },
            elems: ['item', { elem: 'item', elemMods: { kind: 'special' } }]
        },
        {
            block: 'nav'
        },
        {
            block: 'clearfix'
        }
    ]
})