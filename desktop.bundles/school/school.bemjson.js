({
    block: 'b-page',
    title: 'Schools — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.bemhtml.js' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'school' },
    cls: 'en-US',
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'school' }
                }
            ]
        },
        {
            block: 'container',
            content: [
                {
                    block: 'row-fluid',
                    mods : { type : 'inquiry' },
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        content: 'Special offers for Schools and Kindergartens.'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'We have an exciting program exclusively for schools and kindergartens. If you represent an educational institution and would like to acquire multiple Magic Desktop licenses, please contact us to learn more. We have an exciting program exclusively for schools and kindergartens. If you represent an educational institution and would like to acquire multiple Magic Desktop licenses, please <a href="/en-US/Support">contact us</a> to learn more.'
                                    },
                                    {
                                        block: 'button',
                                        mods: { size: '70', theme: 'blue' },
                                        url: '/desktop.bundles/support/support.html',
                                        content: 'Send inquiry'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    block : 'unit',
                                    content : {
                                        elem : 'image',
                                        attrs : { src : '/i/banner_type_school.png' }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'row-fluid',
            mix: [{ block: 'shadow' }],
            mods: { background: 'gradient' },
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block : 'block',
                            content : {
                                elem : 'h1',
                                elemMods : { level : 'h1' },
                                content : 'These organizations are already benefiting <br>from using Magic Desktop:'
                            }
                        },
                        {
                            block : 'serp',
                            js : {
                                autoLoadingPaddingBottom : 200,
                                itemsPerPage : 5,
                                maxScrollPageNumber : 3,
                                source : '/desktop.blocks/serp/data.json'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            page: 'school'
        }
    ]
})
