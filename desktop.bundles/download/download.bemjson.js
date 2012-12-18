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
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block-info',
                                content: {
                                    elem: 'h2',
                                    content: [
                                        {
                                            content: 'Thank you'
                                        },
                                        {
                                            content: 'for downloading'
                                        },
                                        {
                                            content: 'Magic Desktop 8!'
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    content: 'We support Windows 8, 7, Vista, XP.'
                                },
                                {
                                    content: [
                                        'If your download did not start automatically, please ',
                                        {
                                            block: 'b-link',
                                            url: '#download',
                                            content: 'click here'
                                        },
                                        ' to start the download.'
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
                                block: 'block-info',
                                content: {
                                    elem: 'h2',
                                    content: 'While you wait...'
                                }
                            }
                        },
                        {
                            block: 'span8',
                            content: {
                                block: 'row-fluid',
                                content: [
                                    {
                                        block: 'span4',
                                        content: [
                                            'Step 1'
                                        ]
                                    },
                                    {
                                        block: 'span4',
                                        content: [
                                            'Step 2'
                                        ]
                                    },
                                    {
                                        block: 'span4',
                                        content: [
                                            'Step 3'
                                        ]
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
                            block: 'span4'
                        },
                        {
                            block: 'span4',
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
                            block: 'span4',
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
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span4'
                        },
                        {
                            block: 'span4',
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
                        },
                        {
                            block: 'span4',
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
        },
        {
            block: 'footer',
            mods: { page: 'download' }
        }
    ]
})