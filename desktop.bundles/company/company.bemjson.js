({
    block: 'b-page',
    title: 'Company — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_company.css', ie: false },
        { elem: 'css', url: '_company', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_company.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'company' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'company' }
                },
                {
                    block: 'row-fluid',
                    mods: { border: 'yes' },
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                mods: { type: 'company' },
                                content: {
                                    elem: 'h1',
                                    content: [
                                        {
                                            content: 'Nice to meet you.'
                                        },
                                        {
                                            elem: 'tagline',
                                            elemMods: { line: '2' },
                                            content: [
                                            'We’re ',
                                                {
                                                    elem: 'tagline',
                                                    elemMods: { color: 'blue'},
                                                    content: 'Easybits.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'company', position: '1' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'At a glance'
                                        },
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
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    mods: { col: 'last' },
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
                                            content: [
                                            'To learn more about Magic Desktop and download the full version click ',
                                                {
                                                    block: 'b-link',
                                                    content: 'here',
                                                    url: '#'
                                                }, '.'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { picture: 'yes' },
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                content: {
                                    elem: 'h1',
                                    content: 'Our flagship product'
                                }
                            }
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'company', position: '2' }
                                        },
                                        {
                                            elem: 'title',
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
                                }
                            ]
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    mods: { type: 'image' },
                                    content: [
                                        {
                                            elem: 'image',
                                            elemMods: { type: 'company' },
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
            block: 'row-fluid',
            mods: { background: 'gray', type: 'contact-us' },
            mix: [{ block: 'shadow' }],
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        attrs: { id: 'contact' },
                                        content: {
                                            content: 'Contact us'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'unit',
                                    mods: { type: 'contact-us' },
                                    content: [
                                        {
                                            elem: 'description',
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
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    mods: { type: 'contact-us' },
                                    content: [
                                        {
                                            elem: 'description',
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
                        }
                    ]
                }
            ]
        },
        {
            block: 'row-fluid',
            mods: { background: 'gray', type: 'contact-us', block: 'address' },
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'span3'
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'unit',
                                    mods: { type: 'contact-us' },
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'company', position: '3' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Mailing address:'
                                        },
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    elem: 'description-item',
                                                    content: 'Easybits Software AS'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: 'PO Box 7218'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: 'Homansbyen'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: '0307 Oslo'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: 'Norway'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    mods: { type: 'contact-us' },
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'company', position: '4' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Office address:'
                                        },
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    elem: 'description-item',
                                                    content: 'Easybits Software AS'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: 'Sandakerveien 24C'
                                                },
                                                {
                                                    elem: 'description-item',
                                                    content: '0473 Oslo'
                                                },
                                                {
                                                    elem: 'description-item',
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
            block: 'footer',
            page: 'company'
        }
    ]
})