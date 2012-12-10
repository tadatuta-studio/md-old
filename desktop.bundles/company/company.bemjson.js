({
    block: 'b-page',
    title: 'Company',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'company' },
    content:[
        {
            block: 'header',
            mods: { page: 'Company' }
        },
        {
            elem: 'inner',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    block: 'main',
                    content: [
                        {
                            block: 'info',
                            mods: { border: 'yes', page: 'company' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'title',
                                    content: [
                                        {
                                            elem: 'title-line',
                                            content: 'Nice to meet you.'
                                        },
                                        {
                                            elem: 'title-line',
                                            mods: { line: '2' },
                                            content: [
                                            'We’re ',
                                                {
                                                    block: 'b-link',
                                                    content: 'Easybits',
                                                    url: '#Easybits'
                                                }, '.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'list',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title-company',
                                                    mods: { type: 'glance' },
                                                    content: 'At a glance'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: [
                                                        {
                                                            elem: 'description-item',
                                                            content: 'For years, Easybits has been developing the world’s leading family friendly products designed to enhance the computing experience for children.'
                                                        },
                                                        {
                                                            elem: 'description-item',
                                                            content: 'Our flagship product is the Award winning Magic Desktop, which was benchmarked for two years in a row as "the best software for children up to 10 years of age" by a study carried out by Deloitte & Touche for the EU’s initiative - Safer Internet Day.'
                                                        },
                                                        {
                                                            elem: 'description-item',
                                                            content: 'Magic Desktop is available in over 30 languages and is currently being shipped worldwide on over one million new computers every month.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { col: '2' },
                                            content: [
                                                {
                                                    elem: 'description-item',
                                                    content: 'Magic Desktop provides safe internet access and email for children, plus games, music, painting, and learning activities.'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: 'It keeps children protected on the internet and your family computer safe from tiny fingers.'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: 'To learn more about Magic Desktop and download the full version click here.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'info',
                            mods: { image: 'yes', page: 'company'  },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Our flagship product'
                                },
                                {
                                    elem: 'list',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title-company',
                                                    mods: { type: 'md' },
                                                    content: 'Magic Desktop – Operating System for kids!'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: [
                                                        {
                                                            elem: 'description-item',
                                                            content: "The world's best software for kids aged 2 to 10!"
                                                        },
                                                        {
                                                            elem: 'description-item',
                                                            content: 'Magic Desktop provides a safe way to share computers with children. It functions as an operating system on Windows-based PCs that is both child-proof and child-friendly.'
                                                        },
                                                        {
                                                            elem: 'description-item',
                                                            content: "Magic Desktop's key features include: Parental Control, Safe Internet and Email, No Homework No Play, Learning Applications, Music, Painting, Games, and much more."
                                                        },
                                                        {
                                                            elem: 'description-item',
                                                            content: "With the growing importance of computing in our every day lives, Magic Desktop is truly a must-have for every family!"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'image',
                                            url: '../../../i/info__image.jpg'
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
            block: 'info',
            mods: { type: 'contact' },
            mix: [{ block: 'clearfix' }, { block: 'shadow' }],
            content: [
                {
                    elem: 'inner',
                    content: [
                       {
                            elem: 'title',
                            content: 'Contact us'
                        },
                        {
                            elem: 'list',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    elem: 'description-item',
                                                    content: [
                                                    'If you need product support for Magic Desktop or want to give feedback, contact ',
                                                        {
                                                            block: 'b-link',
                                                            content: 'support@easybits.com',
                                                            url: 'mailto:support@easybits.com'
                                                        }, '.'
                                                    ]
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: [
                                                    'If you are interested in finding out how we can make a difference to your business, contact ',
                                                        {
                                                            block: 'b-link',
                                                            content: 'bizdev@easybits.com',
                                                            url: 'mailto:bizdev@easybits.com'
                                                        }, '.'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    elem: 'description-item',
                                                    content: [
                                                    'If you are writing an article about us and need to find out more, contact ',
                                                        {
                                                            block: 'b-link',
                                                            content: 'press@easybits.com',
                                                            url: 'mailto:press@easybits.com'
                                                        }, '.'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title-company',
                                            mods: { type: 'mail' },
                                            content: 'Mailing address:'
                                        },
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    block: 'description-item',
                                                    content: 'Easybits Software AS'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: 'PO Box 7218'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: 'Homansbyen'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: '0307 Oslo'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: 'Norway'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title-company',
                                            mods: { type: 'address' },
                                            content: 'Office address:'
                                        },
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    block: 'description-item',
                                                    content: 'Easybits Software AS'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: 'Sandakerveien 24C'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: '0473 Oslo'
                                                },
                                                {
                                                    block: 'description-item',
                                                    content: 'Norway'
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