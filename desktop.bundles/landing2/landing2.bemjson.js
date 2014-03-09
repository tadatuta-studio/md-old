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
    mods: { page: 'landing2' },
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
            block: 'section',
            content: {
                block: 'container',
                mods: { type: 'landing' },
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            { block: 'span8' },
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'Make a computer kid-friendly!'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Install Magic Desktop to give your children a fantastic and safe experience while mastering a computer.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: 'm', theme: 'download' },
                                            url: '/desktop.bundles/download/download.html',
                                            content: 'Try it Free!'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '240', theme: 'blue' },
                                            url: '/desktop.bundles/support/support.html',
                                            content: 'How it works'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
        },
        {
            block: 'section',
            mods: { step: 'first' },
            content: {
                block: 'container',
                mods: { type: 'landing-first-step' },
                content: [
                    {
                        block: 'row-fluid',
                        mix: { block: 'shadow' },
                        content: [
                            {
                                block: 'span8',
                                content: [
                                    {
                                        block: 'block',
                                        content: {
                                            elem: 'h1',
                                            content: 'Once started, Magic Desktop creates the Environment.'
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'p',
                                            content: 'Magic Desktop locks Windows away and creates a protective environment that has been exclusively designed for children. It\'s safe, educational and fun!'
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        tag: 'img',
                        attrs: { src: '/i/landing2-demo.png' }
                    }
                ]
            }
        },
        {
            block: 'section',
            mods: { step: 'second' },
            content: {
                block: 'container',
                mods: { type: 'landing-second-step' },
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            { block: 'span8' },
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'Learn through play.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Ge Academy - is an educational center that included almost 100 exercises in colors, numbers, shapes, logic, mathematics, geography, languages, etc. Encourage and reward learning!'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'section',
            mods: { step: 'third' },
            content: {
                block: 'container',
                mods: { type: 'landing-third-step' },
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'There is lots of activities included into Magic Desktop.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Magic Desktop is an age-appropriate playground that grows with your kids, offering lots of assorted programs to express creativity and exciting new ways to learn!'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: 'm', theme: 'download' },
                                            url: '/desktop.bundles/download/download.html',
                                            content: 'Try it Free!'
                                        }
                                    ]
                                }
                            },
                            {
                                block: 'span8',
                                content: 'IMG'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'section',
            mods: { step: 'fourth' },
            content: {
                block: 'container',
                mods: { type: 'landing-fourth-step' },
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            {
                                block: 'span8',
                                content: [
                                    {
                                        block: 'block',
                                        content: {
                                            elem: 'h1',
                                            content: 'No Homework – No Play!<br>Second string...'
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'p',
                                            content: 'With a "No Homework – No Play!" focus, technology becomes your new best friend.'
                                        },
                                        {
                                            block: 'list',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: 'set your own rules'
                                                },
                                                {
                                                    elem: 'item',
                                                    content: 'encourage kids to learn'
                                                },
                                                {
                                                    elem: 'item',
                                                    content: 'reward accomplishments'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        content: 'IMG'
                    }
                ]
            }
        },
        {
            block: 'section',
            mods: { step: 'fifth' },
            content: {
                block: 'container',
                mods: { type: 'landing-fifth-step' },
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            { block: 'span8' },
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'It’s an open system!'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'You may add any Windows programs and games that uoy like.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: 'm', theme: 'download' },
                                            url: '/desktop.bundles/download/download.html',
                                            content: 'Try it Free!'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'section',
            mods: { step: 'sixth' },
            content: {
                block: 'container',
                mods: { type: 'landing-sixth-step' },
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'It\'s not only friendly, but is also completely safe.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Children can’t access your files, insecure web content or exit into Windows. You’re always in charge of the Master Password.'
                                        }
                                    ]
                                }
                            },
                            {
                                block: 'span8',
                                content: 'IMG'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'section',
            mods: { step: 'seventh' },
            content: {
                block: 'container',
                mods: { type: 'landing-seventh-step' },
                content: [
                    {
                        block: 'row-fluid',
                        mix: { block: 'shadow' },
                        content: [
                            {
                                block: 'span8',
                                content: [
                                    {
                                        block: 'block',
                                        content: {
                                            elem: 'h1',
                                            content: 'Getting it work does not require any technical skills.'
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'button',
                                    mods: { size: 'm', theme: 'download' },
                                    url: '/desktop.bundles/download/download.html',
                                    content: 'Try it Free!'
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'footer',
            page: 'landing'
        }
    ]
})
