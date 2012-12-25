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
                                    content: 'Setup Instructions'
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
                                                                    content: 'Click the MagicDesktopSetup file in the downloads window to initiate setup.'
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
                                                                    content: 'The system will prompt you to choose an action. Click Run.'
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
                                                                    content: 'Now you may start the setup (you might want to check our license agreement and change the language here).'
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
                                                                    content: 'The setup starts and will preview many of the included features. Within a couple of minutes, it is completed.'
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
                                                                    content: 'When Magic Desktop opens, you will be prompted to start a preview session, buy a license or activate the license, once purchased.'
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
                            block: 'span4',
                            content: {
                                block: 'block',
                                content: {
                                    elem: 'h1',
                                    content: 'While you wait…'
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
                                            elemMods: { type: 'download', order: '1' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Getting started'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Here you will find a quick user guide to learn the ropes as a parent. Every key function of Magic Desktop is explained here to help you secure your computer so that your kids can start playing!'
                                        },
                                        {
                                            block: 'b-link',
                                            mods: { type: 'readmore' },
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#readmore',
                                            content: {
                                                elem: 'inner',
                                                content: 'Read more'
                                            }
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
                                            content: 'Made specifically by one of our community fans, this set of tutorials provides visual aid into configuring Magic Desktop for the first time. Please make sure to watch them before you get started!'
                                        },
                                        {
                                            block: 'b-link',
                                            mods: { type: 'readmore' },
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#readmore',
                                            content: {
                                                elem: 'inner',
                                                content: 'Read more'
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
                                            content: 'Frequently Asked Questions'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Have a question about Magic Desktop? It is likely it was already asked before. Please check this section to get the help you need.'
                                        },
                                        {
                                            block: 'b-link',
                                            mods: { type: 'readmore' },
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#readmore',
                                            content: {
                                                elem: 'inner',
                                                content: 'Read more'
                                            }
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
                                            content: 'Join community'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Magic Desktop parents from around the world are gathered here to discuss, post ideas or ask for help. Join us and you will benefit from sharing your ideas and helping us shape the product to your expectations. Welcome to the Magic Desktop Family!'
                                        },
                                        {
                                            block: 'b-link',
                                            mods: { type: 'readmore' },
                                            mix: [{ block: 'unit', elem: 'more'}],
                                            url: '#readmore',
                                            content: {
                                                elem: 'inner',
                                                content: 'Read more'
                                            }
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