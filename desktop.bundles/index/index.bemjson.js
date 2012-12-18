({
    block: 'b-page',
    title: 'Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'index' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'index' }
                },
                {
                    block: 'slider',
                    content: [
                        {
                            elem: 'play'
                        },
                        {
                            elem: 'items',
                            content: [
                                {
                                    elem: 'item',
                                    elemMods: { state: 'active', type: 'play', slide: '1' },
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Play & Learn'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/slider__slide_slide_1.jpg'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'safe',  slide: '2' },
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Safe internet'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'My First Browser is the safest Internet browser for kids that exists! You can pick kid-friendly websites and allow your kids to visit only those parent-approved sites.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/slider__slide_slide_2.jpg'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'control',  slide: '3' },
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Parental control'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Not only can you control which programs kids can access, you can also control when and how kids access the approved programs. "No Homework-No Play!" technology becomes your virtual babysitter.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/slider__slide_slide_3.jpg'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'entertainment',  slide: '4' },
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Entertainment'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Magic Desktop includes large collection of games, photo and drawing applications, plenty of child-friendly Web content that is updated monthly.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/slider__slide_slide_4.jpg'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'protection',  slide: '5' },
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Windows protection'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Magic Desktop protects your system settings and important data files from accidental kid-interference, ensuring your PC will always work when you return.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/slider__slide_slide_5.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'switcher',
                            content: [
                                {
                                    elem: 'button',
                                    elemMods: { type: 'play', state: 'active' }
                                },
                                {
                                    elem: 'button',
                                    elemMods: { type: 'safe' }
                                },
                                {
                                    elem: 'button',
                                    elemMods: { type: 'control' }
                                },
                                {
                                    elem: 'button',
                                    elemMods: { type: 'entertainment' }
                                },
                                {
                                    elem: 'button',
                                    elemMods: { type: 'protection' }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'popupa',
                    mods: { type: 'video-md8' },
                    content: [
                        {
                            elem: 'paranja'
                        },
                        {
                            elem: 'close'
                        },
                        {
                            elem: 'inner',
                            content: [
                                // {
                                //     elem: 'info',
                                //     content: [
                                //         {
                                //             block: 'b-link',
                                //             mix: [{ block: 'popupa', elem: 'title' }],
                                //             url: 'http://www.youtube.com/embed/1ZpTwSULBh0?rel=0',
                                //             target: '_blank',
                                //             content: 'Magic Desktop 8 official demo'
                                //         },
                                //         {
                                //             elem: 'close',
                                //             content: 'Close'
                                //         }
                                //     ]
                                // },
                                {
                                    elem: 'video',
                                    url: 'http://www.youtube.com/embed/1ZpTwSULBh0?rel=0'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                       elem: 'h2',
                                       content: [
                                           'Over 70 million computers',
                                           'with Magic Desktop preloaded ',
                                           'have been sold world wide.'
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            content: [
                                'Millions of users',
                                'cannot be wrong.',
                                'Join the community!'
                            ]
                        },
                        {
                            block: 'span4',
                            content: {
                                block: 'button',
                                mods: { size: 'm', theme: 'download', page: 'home' },
                                content: 'Get it now'
                            }
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                        elem: 'h2',
                                        content: 'Top Reasons'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'why you need Magic Desktop:'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    block: 'row-fluid',
                                    content: [
                                        {
                                            block: 'span4',
                                            content: 'Kids love it'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'Peace Of Mind'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'The Safest Web'
                                        }
                                    ]
                                },
                                {
                                    block: 'row-fluid',
                                    content: [
                                        {
                                            block: 'span4',
                                            content: 'Early Start'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'Unleash Their Creativity'
                                        },
                                        {
                                            block: 'span4',
                                            content: [
                                                'Family Fun',
                                                'Read more'
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
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                        elem: 'h2',
                                        content: 'Community'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'There are a lot of parents who are active Magic Desktop users. We are trying to create a better place for them for sharing ideas, supporting each other, and providing feedback. Join us!'
                                    },
                                    {
                                        content: 'Parent Community'
                                    },
                                    {
                                        block: 'social',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mods: { link: 'google' },
                                                    url: '#google'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mods: { link: 'twitter' },
                                                    url: '#twitter'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mods: { link: 'youtube' },
                                                    url: '#youtube'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mods: { link: 'facebook' },
                                                    url: '#facebook'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mods: { link: 'mail' },
                                                    url: '#mail'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: 'PARENT Community IMAGE GOES HERE'
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
                                content: {
                                    elem: 'h2',
                                    content: 'Testimonials'
                                }
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: { // TODO: here b-carousel should be
                                block: 'row-fluid',
                                content: [
                                    {
                                        block: 'span4',
                                        content: '1'
                                    },
                                    {
                                        block: 'span4',
                                        content: '2'
                                    },
                                    {
                                        block: 'span4',
                                        content: '3'
                                    }
                                ]
                            }
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
                                content: {
                                    elem: 'h2',
                                    content: 'Partner with us!'
                                }
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    content: 'Who are you?'
                                },
                                {
                                    block: 'row-fluid',
                                    content: [
                                        {
                                            block: 'span4',
                                            content: 'Software reseller'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'Website owner'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'ISP'
                                        }
                                    ]
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
                                block: 'button',
                                mods: { size: '240', theme: 'blue', type: 'apply' },
                                content: 'Apply now!'
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    content: 'Who are you?'
                                },
                                {
                                    block: 'row-fluid',
                                    content: [
                                        {
                                            block: 'span4',
                                            content: 'OEM'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'Magic Desktop fan'
                                        },
                                        {
                                            block: 'span4',
                                            content: 'IMAGE GOES here'
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
            mods: { page: 'index' }
        }
    ]
})