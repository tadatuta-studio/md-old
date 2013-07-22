({
    block: 'b-page',
    title: 'Landing — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'landing' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'landing' }
                }
            ]
        },
        {
            block: 'container',
            content: [
                {
                    block: 'table',
                    content: [
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: 'cell',
                                    elemMods: { pos: 1 },
                                    content: [
                                        {
                                            block: 'landing-image',
                                            content: [
                                                {
                                                    elem: 'img',
                                                    url: '../../i/landing-image.png'
                                                },
                                                {
                                                    elem: 'caption',
                                                    mix: [{ block: 'block' }],
                                                    content: [
                                                        {
                                                            elem: 'cation-line',
                                                            mix: [{ block: 'block', elem: 'h1' }],
                                                            content: [
                                                                'Works best for<br>',
                                                                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ages 2-10'
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'text',
                                                    content: [
                                                        {
                                                            elem: 'desc',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Magic Desktop is...'
                                                                },
                                                                {
                                                                    elem: 'line',
                                                                    elemMods: { pos: 1 },
                                                                    content: 'A family-oriented software suit,'
                                                                },
                                                                {
                                                                    elem: 'line',
                                                                    elemMods: { pos: 2 },
                                                                    content: 'used as Windows for kids;'
                                                                },
                                                                {
                                                                    elem: 'line',
                                                                    elemMods: { pos: 3 },
                                                                    content: 'it includes lots of features'
                                                                },
                                                                {
                                                                    elem: 'line',
                                                                    elemMods: { pos: 4 },
                                                                    content: 'for child safety, education and fun.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'features',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Core features'
                                                                },
                                                                {
                                                                    elem: 'list',
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: 'Super-kid-friendly.'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: 'Encourages kids to learn.'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'list',
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: 'Takes care of Internet and email safety.'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: 'Develops important skills.'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'list',
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: 'Protects system and parental files from damage.'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: 'Gives a lot of entertainment to kids.'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'block',
                                                    mix: { block: 'landing-image', elem: 'screenshots-title' },
                                                    content: {
                                                        elem: 'h1',
                                                        content: 'Screenshots'
                                                    }
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'cell',
                                    content: [
                                        {
                                            block: 'button',
                                            mods: { size: '26', theme: 'download', position: 'right' },
                                            url: '/desktop.bundles/download/download.html',
                                            content: 'Get it now!'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '26', theme: 'buy', position: 'right' },
                                            url: '/desktop.bundles/buy/buy.html',
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'landing-screens',
                    mix: [{ block: 'clearfix' }],
                    content: [1,2,3,4,5,6].map(function(i) {
                        return {
                            elem: 'item',
                            elemMods: { pos: i }
                        };
                    })
                }
            ]
        },
        {
            block: 'popupa',
            content: [
                {
                    elem: 'paranja'
                },
                {
                    elem: 'inner',
                    content: [
                        {
                            elem: 'close'
                        },
                        {
                            elem: 'content',
                            content: {
                                block: 'carousel',
                                mods: { animate: 'yes', counter: 'yes' },
                                content: [
                                    {
                                        elem: 'inner',
                                        content: [
                                            {
                                                elem: 'item',
                                                elemMods: { state: 'active' },
                                                content: {
                                                    elem: 'img',
                                                    url: '/i/landing-screens__image_pos_1.png'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'img',
                                                    url: '/i/landing-screens__image_pos_2.png'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'img',
                                                    url: '/i/landing-screens__image_pos_3.png'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'img',
                                                    url: '/i/landing-screens__image_pos_4.png'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'img',
                                                    url: '/i/landing-screens__image_pos_5.png'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'img',
                                                    url: '/i/landing-screens__image_pos_6.png'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'control',
                                        elemMods: { type: 'left', theme: 'md8' }
                                    },
                                    {
                                        elem: 'control',
                                        elemMods: { type: 'right', theme: 'md8' }
                                    },
                                    {
                                        elem: 'counter'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            page: 'landing'
        }
    ]
})