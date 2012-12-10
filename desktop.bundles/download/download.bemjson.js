({
    block: 'b-page',
    title: 'Download',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'download' },
    content:[
        {
            block: 'header',
            mods: { page: 'download' }
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
                            mods: { border: 'yes' },
                            mix: [{ block: 'clearfix' }],
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
                                        },
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
                        },
                        {
                            block: 'info',
                            mods: { type: 'steps' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'While you wait...'
                                },
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
                                                    mods: { slide: '1' }
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Step 2'
                                                },
                                                {
                                                    elem: 'picture',
                                                    mods: { slide: '2' }
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Step 3'
                                                },
                                                {
                                                    elem: 'picture',
                                                    mods: { slide: '3' }
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Step 4'
                                                },
                                                {
                                                    elem: 'picture',
                                                    mods: { slide: '4' }
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Step 5'
                                                },
                                                {
                                                    elem: 'picture',
                                                    mods: { slide: '5' }
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
                            block: 'info',
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    block: 'services',
                                    mods: { page: 'download' },
                                    content: [
                                        {
                                            elem: 'left',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            mods: { type: 'started' },
                                                            content: 'Getting started'
                                                        },
                                                        {
                                                            block: 'b-text',
                                                            content: [
                                                                {
                                                                    elem: 'p',
                                                                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            mix: [{ block: 'services', elem: 'more'}],
                                                            url: '#read-more',
                                                            content: 'Read more'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            mods: { type: 'faq' },
                                                            content: 'Frequently Asked Questions'
                                                        },
                                                        {
                                                            block: 'b-text',
                                                            content: [
                                                                {
                                                                    elem: 'p',
                                                                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            mix: [{ block: 'services', elem: 'more'}],
                                                            url: '#read-more',
                                                            content: 'Read more'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'right',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            mods: { type: 'tutorials' },
                                                            content: 'Video tutorials'
                                                        },
                                                        {
                                                            block: 'b-text',
                                                            content: [
                                                                {
                                                                    elem: 'p',
                                                                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            mix: [{ block: 'services', elem: 'more'}],
                                                            url: '#read-more',
                                                            content: 'Read more'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            mods: { type: 'community' },
                                                            content: 'Join community'
                                                        },
                                                        {
                                                            block: 'b-text',
                                                            content: [
                                                                {
                                                                    elem: 'p',
                                                                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            mix: [{ block: 'services', elem: 'more'}],
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