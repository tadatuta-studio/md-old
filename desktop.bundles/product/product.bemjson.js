({
    block: 'b-page',
    title: 'Layout — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_product.css', ie: false },
        { elem: 'css', url: '_product', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_product.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'product' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'product' }
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                       elem: 'h2',
                                       content: [
                                           'About',
                                           {
                                               tag: 'br'
                                           },
                                           'Magic Desktop'
                                        ]
                                    },
                                    {
                                        elem: 'p',
                                        content: 'Magic Desktop encourages children to learn, ensures their online safety and protects your computer.'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            content: 'wizard img'
                            // {
                            //     block: 'about-product',
                            //     elem: 'image',
                            //     url: '../../../i/about-product__image.png'
                            // }
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'about-product',
                                    elem: 'description',
                                    content: [
                                        {
                                            elem: 'description-line',
                                            content: 'All that your kids'
                                        },
                                        {
                                            elem: 'description-line', elemMods: { line: '2' },
                                            content: 'would probably need'
                                        },
                                        {
                                            elem: 'description-line', elemMods: { line: '3' },
                                            content: 'when mastering'
                                        },
                                        {
                                            elem: 'description-line', elemMods: { line: '4' },
                                            content: 'a computer!'
                                        }
                                    ]
                                },
                                {
                                    block: 'button',
                                    mods: { size: 'm', theme: 'download', position: 'right' },
                                    content: 'Get it now'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                        elem: 'h2',
                                        content: 'Encourages to learn'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'Magic Desktop is an easy playground to get into, it grows with your kids, offering various programs for them to express their creativity early on, as well as providing lots of fun and exciting new ways to learn!'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            content: 'easy learning'
                        },
                        {
                            block: 'span4',
                            content: 'rainbow'
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                        elem: 'h2',
                                        content: 'Ensures Online Safety'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'Internet safety for children is paramount. Because of this we have designed a couple of applications that will provide a worry-free experience online.'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            content: 'My First Browser'
                        },
                        {
                            block: 'span4',
                            content: 'Magic Mail'
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                        elem: 'h2',
                                        content: 'Protects your computer'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'Kids won’t be able to delete your photo album or corrupt system files. You are in charge with you Master Password!'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            content: 'Security Shield'
                        },
                        {
                            block: 'span4',
                            content: 'Easy Switch'
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                        elem: 'h2',
                                        content: 'Languages'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: 'Flags'
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span8',
                            content: 'Magic Desktop – a complete solution for your children.'
                        },
                        {
                            block: 'span4',
                            content: {
                                block: 'button',
                                mods: { size: 'm', theme: 'download', position: 'right', block: 'desktop' },
                                content: 'Get it now'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            mods: { page: 'product' }
        }
    ]
})