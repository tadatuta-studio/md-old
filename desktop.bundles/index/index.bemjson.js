({
    block: 'b-page',
    title: 'Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'index' },
    content:[
        {
            block: 'header',
            mods: { page: 'index' }
        },
        {
            elem: 'inner',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    block: 'chapter',
                    mix: [{ block: 'clearfix' }],
                    content: [
                        {
                            elem: 'inner',
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Partner with us!'
                                },
                                {
                                    elem: 'description',
                                    content: 'We have many different types of affiliate & partner programs that we offer, if you are a software reseller, website owner, ISP, OEM or a private person that wants to sell Magic Desktop, we have the right program for you!'
                                },
                                {
                                    block: 'button',
                                    mods: { size: '240', theme: 'blue', type: 'apply' },
                                    content: 'Apply now!'
                                }
                            ]
                        },
                        {
                            block: 'units',
                            content: [
                                {
                                    elem: 'notice',
                                    content: 'Who are you?'
                                },
                                {
                                    elem: 'inner',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Software reseller'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Software reseller'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Software reseller'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Software reseller'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Software reseller'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer'
        }
    ]
})