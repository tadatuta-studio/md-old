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
                    block: 'button',
                    mods: { size: '26', theme: 'download', position: 'right' },
                    url: '/desktop.bundles/download/download.html',
                    content: 'Get it now!'
                },
                {
                    block: 'button',
                    mods: { size: '26', theme: 'buy', position: 'right' },
                    url: '/desktop.bundles/download/download.html',
                    content: 'Buy'
                },
                {
                    block: 'landing-image',
                    content: [
                        {
                            elem: 'img',
                            url: '../../i/landing-image.png'
                        },
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
                    content: {
                        elem: 'h1',
                        content: 'Screenshots'
                    }
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
            block: 'footer',
            page: 'landing'
        }
    ]
})