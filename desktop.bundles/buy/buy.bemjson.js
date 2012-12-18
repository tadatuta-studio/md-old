({
    block: 'b-page',
    title: 'Buy — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_buy.css', ie: false },
        { elem: 'css', url: '_buy', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_buy.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'buy' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'buy' }
                },
                {
                    block: 'notice',
                    content: 'You may choose the license that better suits your needs:'
                }
            ]
        },
        {
            block: 'info-block',
            content: {
                block: 'container',
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            {
                                block: 'span4',
                                content: {
                                    block: 'price',
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'Monthly'
                                        },
                                        {
                                            elem: 'cost',
                                            mix: [{ block: 'i-font', mods: { face: 'univers' } }],
                                            content: [
                                                {
                                                    elem: 'cost-item',
                                                    content: '$'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'count' },
                                                    content: '4'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Not sure for how long your variant kid is going to be interested? Take this option. You can drop at any time.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '45', theme: 'gray' },
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'price',
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'One year'
                                        },
                                        {
                                            elem: 'cost',
                                            mix: [{ block: 'i-font', mods: { face: 'univers' } }],
                                            content: [
                                                {
                                                    elem: 'cost-item',
                                                    content: '$'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'count' },
                                                    content: '39'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'You feel your kid is about to grow out of Magic Desktop, and he has no younger brothers and sisters? This option is just for you.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '45', theme: 'gray' },
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'price',
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'Monthly'
                                        },
                                        {
                                            elem: 'cost',
                                            mix: [{ block: 'i-font', mods: { face: 'univers' } }],
                                            content: [
                                                {
                                                    elem: 'cost-item',
                                                    content: '$'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'count' },
                                                    content: '79'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: "Your kid is really young and you plan to use Magic Desktop for 3-5 years? This is the best choice and investment in your kid's future."
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '45', theme: 'gray' },
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        block: 'or',
                        content: 'or'
                    }
                ]
            }
        },
        {
            block: 'footer',
            mods: { page: 'buy' }
        }
    ]
})