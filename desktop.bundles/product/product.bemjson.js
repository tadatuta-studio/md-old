({
    block: 'b-page',
    title: 'Product — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
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
                    mods: { type: 'product' },
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                mods: { type: 'product' },
                                content: [
                                    {
                                       elem: 'h1',
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
                            // mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'about-product',
                                    elem: 'image',
                                    url: '../../../i/about-product__image.png'
                                }
                            ]
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
                                            content: 'will probably need'
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
                                    url: '/desktop.bundles/download/download.html',
                                    content: 'Get it now!'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'learn',
                    mix: [{ block: 'shadow' }, { block: 'clearfix' }],
                    content: [
                        {
                            block: 'row-fluid',
                            content: [
                                {
                                    block: 'span3',
                                    content: {
                                        block: 'block',
                                        mods: { type: 'learn' },
                                        content: [
                                            {
                                                elem: 'h1',
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
                                    // mods: { position: 'right' },
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '1' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Easy Learning'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Math & Spelling'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Loads of educational exercises'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Have fun while learning'
                                                    }
                                                ]
                                            }
                                        ]
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
                                                    elemMods: { type: 'product', pos: '2' }
                                                },
                                                {
                                                    elem: 'title',
                                                    content: 'Rainbow'
                                                },
                                                {
                                                    block: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: 'Take a snapshot'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Apply cool effects to pictures'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Share with friends and family'
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
                                    block: 'span3'
                                },
                                {
                                    block: 'span4',
                                    mix: [{ block: 'offset1' }],
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '7' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Easy Paint'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Paint by free hand'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Combine colors'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Apply effects and text to your own pictures'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    block: 'span4',
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '8' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Talking Parrot'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Record your voice'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Play your recordings fast or slow'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Send a voice mail'
                                                    }
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
                                    block: 'span3'
                                },
                                {
                                    block: 'span4',
                                    mix: [{ block: 'offset1' }],
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '9' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Easy Write'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Learn typing'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Format text'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Share a story with Grandparents'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    block: 'span4',
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '10' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Gamepad'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Includes 28 games for all ages'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Games with educational touch'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Hours of entertainment'
                                                    }
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
                                    block: 'span3'
                                },
                                {
                                    block: 'span4',
                                    mix: [{ block: 'offset1' }],
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '11' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'No Homework No Play'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Set your own rules'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Motivate your children'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Reward worthily'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    block: 'span4',
                                    content: {
                                        block: 'unit',
                                        content: [
                                            {
                                                elem: 'picture',
                                                elemMods: { type: 'product', pos: '12' }
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Detective Bob'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'A quick eye'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Patience'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Concentration'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { border: 'yes', type: 'safety' },
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
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
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'product', pos: '3' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'My first Browser'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'A browser that keeps kids inside the safe boundaries of the www experience by using content advisors such as EasySearch and parental control features to allow parents to search and approve websites.'
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
                                            elemMods: { type: 'product', pos: '4' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Magic Mail'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'The easiest and completely secure e-mail client that hides away spam and phishing messages while allowing parents to supervise contacts to ensure their kids do not start conversations with strangers online.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { border: 'yes', type: 'protects' },
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
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
                            mods: { position: 'right', type: 'protects' },
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'product', pos: '5' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Security Shield'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Magic Desktop Security Shield will lock Windows away and create a protective environment specially designed for children, easy to use and visually appealing.'
                                        }
                                    ]
                                },
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'picture',
                                            elemMods: { type: 'product', pos: '13' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Run at startup'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'If your kid has his own computer, you can setup Magic Desktop to create complete safety and seamless user experience.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span4',
                            content: {
                                block: 'unit',
                                content: [
                                    {
                                        elem: 'picture',
                                        elemMods: { type: 'product', pos: '6' }
                                    },
                                    {
                                        elem: 'title',
                                        content: 'Easy Switch'
                                    },
                                    {
                                        elem: 'description',
                                        content: 'If you share your computer with kids, you can easily switch between Magic Desktop and Windows.'
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
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        content: 'Languages'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'Magic Desktop is available in all the following languages:'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'languages',
                                    content: [
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'danish' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Danish'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'english' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'English'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'french' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'French'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'greek' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Greek'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'italian' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Italian'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'norwegian' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Norwegian'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'portuguese' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Portuguese'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'russian' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Russian'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'swedish' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Swedish'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'nederlands' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Nederlands'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'finnish' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Finnish'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'german' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'German'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'hungarian' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Hungarian'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'japanese' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Japanese'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'polish' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Polish'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'romanian' },
                                            content: {
                                                elem: 'name',
                                                content: {
                                                    elem: 'inner',
                                                    content: 'Romanian'
                                                }
                                            }
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 's-panish' },
                                            content: [
                                                {
                                                    elem: 'name',
                                                    content: {
                                                        elem: 'inner',
                                                        content: 'Spanish'
                                                    }
                                                }
                                            ]
                                        }, ' ',
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'turkish' },
                                            content: [
                                                {
                                                    elem: 'name',
                                                    content: {
                                                        elem: 'inner',
                                                        content: 'Turkish'
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
                    block: 'row-fluid',
                    mix: [{ block: 'solution' }, { block: 'clearfix' }, { block: 'shadow' }],
                    content: [
                        {
                            block: 'span8',
                            content: [
                                {
                                    block: 'b-text',
                                    mods: { position: 'left' },
                                    content: [
                                        {
                                            elem: 'h2',
                                            content: 'Magic Desktop –'
                                        },
                                        {
                                            elem: 'h3',
                                            content: 'a complete solution for your children.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span4',
                            content: {
                                block: 'button',
                                mods: { size: 'm', theme: 'download', position: 'right', block: 'desktop' },
                                url: '/desktop.bundles/download/download.html',
                                content: 'Get it now!'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            page: 'product'
        }
    ]
})