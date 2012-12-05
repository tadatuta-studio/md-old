({
    block: 'b-page',
    title: 'Product',
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
    content:[
        {
            block: 'header',
            mods: { page: 'product' }
        },
        {
            elem: 'inner',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    block: 'about-product',
                    mix: [{ block: 'clearfix' }],
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
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
                            ]
                        },
                        {
                            elem: 'image',
                            url: '../../../i/about-product__image.png'
                        },
                        {
                            elem: 'right',
                            content: [
                                {
                                    block: 'b-text',
                                    mix: [{ block: 'about-product', elem: 'description' }],
                                    content: [
                                        {
                                            elem: 'ul',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'All that your kids'
                                                },
                                                {
                                                    elem: 'li',
                                                    mix: [{ block: 'about-product', elem: 'description-line', elemMods: { line: '2' } }],
                                                    content: 'would probably need'
                                                },
                                                {
                                                    elem: 'li',
                                                    mix: [{ block: 'about-product', elem: 'description-line', elemMods: { line: '3' } }],
                                                    content: 'when mastering '
                                                },
                                                {
                                                    elem: 'li',
                                                    mix: [{ block: 'about-product', elem: 'description-line', elemMods: { line: '4' } }],
                                                    content: 'a computer!'
                                                }
                                            ]
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
                    block: 'main',
                    mix: [{ block: 'shadow' }],
                    content: [
                        {
                            block: 'block',
                            mods: { type: 'learn', border: 'yes' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'left',
                                    content: [
                                        {
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
                                    ]
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            block: 'services',
                                            content: [
                                                {
                                                    elem: 'left',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mods: { type: 'learning' },
                                                                    content: 'Easy Learning'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Have fun while learning'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Loads of educational exercises'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Math & Spelling'
                                                                                }
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
                                                                    elem: 'title',
                                                                    mods: { type: 'paint' },
                                                                    content: 'Easy Paint'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Paint by free hand'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Large collection of images to color up'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Apply effects and text to your own pictures'
                                                                                }
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
                                                                    elem: 'title',
                                                                    mods: { type: 'write' },
                                                                    content: 'Easy Write'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Learn to write'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Many fonts and colors'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Send your story to Grandparents'
                                                                                }
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
                                                                    elem: 'title',
                                                                    mods: { type: 'homework' },
                                                                    content: 'No Homework No Play'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Set your own rules'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Motivate your children'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Reward worthily'
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
                                                    elem: 'right',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mods: { type: 'rainbow' },
                                                                    content: 'Rainbow'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Take a snapshot'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Apply cool effects to pictures'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Send to friends and family'
                                                                                }
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
                                                                    elem: 'title',
                                                                    mods: { type: 'talking' },
                                                                    content: 'Talking Parrot'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Record your voice'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Play your recordings fast or slow'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Send a voice mail'
                                                                                }
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
                                                                    elem: 'title',
                                                                    mods: { type: 'gamepad' },
                                                                    content: 'Gamepad'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Hours of entertainment'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Includes 28 games for all ages'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Games with educational touch'
                                                                                }
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
                                                                    elem: 'title',
                                                                    mods: { type: 'detective' },
                                                                    content: 'Detective Bob'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            content:[
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Hours of entertainment'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Includes 28 games for all ages'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Games with educational touch'
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
                                }
                            ]
                        },
                        {
                            block: 'block',
                            mods: { type: 'safety', border: 'yes' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'left',
                                    content: [
                                        {
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
                                    ]
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            block: 'services',
                                            content: [
                                                {
                                                    elem: 'left',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mods: { type: 'browser' },
                                                                    content: 'My First Browser'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'A browser that keeps kids inside the safe boundaries of the www experience by using content advisors such as EasySearch and parental control features to allow parents to search and approve websites.'
                                                                        }
                                                                    ]
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
                                                                    mods: { type: 'mail' },
                                                                    content: 'Magic Mail'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'The easiest, and completely secure e-mail client that hides away spam and phishing messages while allowing parents to supervise contacts to ensure their kids do not start conversations with strangers online.'
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
                            block: 'block',
                            mods: { type: 'computer', border: 'yes' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'left',
                                    content: [
                                        {
                                            block: 'block-info',
                                            content: [
                                                {
                                                    elem: 'h2',
                                                    content: 'Protects your computer'
                                                },
                                                {
                                                    elem: 'p',
                                                    content: "Kids won't be able to delete your photo album or corrupt system files. You are in charge with you Master Password!"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            block: 'services',
                                            content: [
                                                {
                                                    elem: 'left',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mods: { type: 'security' },
                                                                    content: 'Security Shield'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'Magic Desktop Security Shield will lock Windows away and create a protective environment specially designed for children, easy to use and visually appealing.'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mods: { type: 'startup' },
                                                                    content: 'Run at startup'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'If your kid has his own computer, you can setup Magic Desktop to create complete safety and seamless user experience.'
                                                                        }
                                                                    ]
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
                                                                    mods: { type: 'switch' },
                                                                    content: 'Easy Switch'
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'If you share your computer with kids, you can easily switch between Magic Desktop and Windows.'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            mods: { image: 'yes' }
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
                            block: 'block',
                            mods: { type: 'languages' },
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'left',
                                    content: [
                                        {
                                            block: 'block-info',
                                            content: [
                                                {
                                                    elem: 'h2',
                                                    content: 'Languages'
                                                },
                                                {
                                                    elem: 'p',
                                                    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            block: 'b-layout-table',
                                            mods: { type: 'languages' },
                                            content: [
                                                {
                                                    elem: 'row',
                                                    content: [
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'danish'} },
                                                                    content: 'Danish',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'english'  }},
                                                                    content: 'English',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'french'  }},
                                                                    content: 'French',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'greek'  }},
                                                                    content: 'Greek',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'italian'  }},
                                                                    content: 'Italian',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'norwegian'  }},
                                                                    content: 'Norwegian',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'portuguese'  }},
                                                                    content: 'Portuguese',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'russian'  }},
                                                                    content: 'Russian',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'portuguese'  }},
                                                                    content: 'Portuguese',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'row',
                                                    content: [
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'nederlands'  }},
                                                                    content: 'Nederlands',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'finnish'  }},
                                                                    content: 'Finnish',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'german'  }},
                                                                    content: 'German',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'hungarian'  }},
                                                                    content: 'Hungarian',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'japanese'  }},
                                                                    content: 'Japanese',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'polish'  }},
                                                                    content: 'Polish',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'romanian'  }},
                                                                    content: 'Romanian',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'spanish'  }},
                                                                    content: 'Spanish',
                                                                    url: '#'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'cell',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    mix: { block: 'languages', elem: 'item', elemMods: { type: 'turkish'  }},
                                                                    content: 'Turkish',
                                                                    url: '#'
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
                            block: 'block',
                            mods: { type: 'magic-desktop' },
                            mix: [{ block: 'clearfix' }, { block: 'shadow' }],
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
                                },
                                {
                                    block: 'button',
                                    mods: { size: 'm', theme: 'download', position: 'right', block: 'desktop' },
                                    content: 'Get it now'
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