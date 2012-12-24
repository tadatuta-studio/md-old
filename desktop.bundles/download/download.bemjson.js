({
    block: 'b-page',
    title: 'Download — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_download.css', ie: false },
        { elem: 'css', url: '_download', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_download.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'download' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'download' }
                },
                {
                    block: 'row-fluid',
                    mods: { border: 'yes' },
                    content: [
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'download',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: [
                                                {
                                                    elem: 'title-line',
                                                    content: 'Thank you'
                                                },
                                                {
                                                    elem: 'title-line',
                                                    mods: { line: '2' },
                                                    content: 'for downloading'
                                                },
                                                {
                                                    elem: 'title-line',
                                                    mods: { line: '3' },
                                                    content: 'Magic Desktop 8!'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    block: 'download',
                                    content: [
                                        {
                                            elem: 'description',
                                            content: [
                                                {
                                                    elem: 'support',
                                                    content: 'We support Windows 8, 7, Vista, XP.'
                                                },
                                                'If your download did not start automatically, please ',
                                                {
                                                    block: 'b-link',
                                                    content: 'click here',
                                                    url: '#click-here'
                                                }, ' to start the download.'
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
                            block: 'span4',
                            content: {
                                block: 'block',
                                content: {
                                    elem: 'h1',
                                    content: 'While you wait...'
                                }
                            }
                        },
                        {
                            block: 'span8',
                            mods: { border: 'yes' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    block: 'row-fluid',
                                    content: [
                                        {
                                            block: 'span4',
                                            content: [
                                                {
                                                    block: 'steps',
                                                    mix: [{ block: 'clearfix' }],
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Step 1'
                                                                },
                                                                {
                                                                    elem: 'picture',
                                                                    url: '../../i/steps__picture_slide_1.png'
                                                                },
                                                                {
                                                                    elem: 'description',
                                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
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
                                                    block: 'steps',
                                                    mix: [{ block: 'clearfix' }],
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Step 2'
                                                                },
                                                                {
                                                                    elem: 'picture',
                                                                    url: '../../i/steps__picture_slide_2.png'
                                                                },
                                                                {
                                                                    elem: 'description',
                                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
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
                                                    block: 'steps',
                                                    mix: [{ block: 'clearfix' }],
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            elemMods: { position: 'last' },
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Step 3'
                                                                },
                                                                {
                                                                    elem: 'picture',
                                                                    url: '../../i/steps__picture_slide_3.png'
                                                                },
                                                                {
                                                                    elem: 'description',
                                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
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
                                    content: [
                                        {
                                            block: 'span4',
                                            content: [
                                                {
                                                    block: 'steps',
                                                    mix: [{ block: 'clearfix' }],
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Step 4'
                                                                },
                                                                {
                                                                    elem: 'picture',
                                                                    url: '../../i/steps__picture_slide_4.png'
                                                                },
                                                                {
                                                                    elem: 'description',
                                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
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
                                                    block: 'steps',
                                                    mix: [{ block: 'clearfix' }],
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    content: 'Step 5'
                                                                },
                                                                {
                                                                    elem: 'picture',
                                                                    url: '../../i/steps__picture_slide_5.png'
                                                                },
                                                                {
                                                                    elem: 'description',
                                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
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
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { type: 'download' },
                    content: [
                        {
                            block: 'span4'
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'download', order: '1' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Getting started'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                                        },
                                        {
                                            block: 'b-link',
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#read-more',
                                            content: 'Read more'
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
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'download', order: '2' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Video tutorials'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'The easiest, and completely secure e-mail client that hides away spam and phishing messages while allowing parents to supervise contacts to ensure their kids do not start conversations with strangers online.'
                                        },
                                        {
                                            block: 'b-link',
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#read-more',
                                            content: 'Read more'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { type: 'download' },
                    content: [
                        {
                            block: 'span4'
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'download', order: '3' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Easy Learning'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'A browser that keeps kids inside the safe boundaries of the www experience by using content advisors such as EasySearch and parental control features to allow parents to search and approve websites.'
                                        },
                                        {
                                            block: 'b-link',
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#read-more',
                                            content: 'Read more'
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
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'download', order: '4' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Magic Mail'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'The easiest, and completely secure e-mail client that hides away spam and phishing messages while allowing parents to supervise contacts to ensure their kids do not start conversations with strangers online.'
                                        },
                                        {
                                            block: 'b-link',
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#read-more',
                                            content: 'Read more'
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
            mods: { page: 'download' }
        }
    ]
})