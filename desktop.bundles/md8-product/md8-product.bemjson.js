({
    block: 'b-page',
    title: 'md8-Product',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'md8-product' },
    content:[
        {
            elem: 'inner',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'logo',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '/',
                                    content: 'Magic Desktop 8'
                                },
                                {
                                    elem: 'tagline',
                                    content: [
                                        'is like ',
                                        {
                                            elem: 'tagline-highlight',
                                            content: 'Windows'
                                        },
                                        ' for kids.'
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'lang-switcher',
                            content: [
                                'International - ',
                                'English'
                            ]
                        },
                        {
                            block: 'b-menu-horiz',
                            mods: { layout: 'normal' },
                            js: false,
                            mix: [{ block: 'nav' }, { block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'item',
                                    // elemMods: { state: 'current' },
                                    content: {
                                        block: 'b-link',
                                        url: '/',
                                        content: 'Home'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#product',
                                        content: 'Product'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#community',
                                        content: 'Community'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#support',
                                        content: 'Support'
                                    }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { kind: 'special' },
                                    content: {
                                        block: 'b-link',
                                        url: '#download',
                                        content: 'Download'
                                    }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { kind: 'special' },
                                    content: {
                                        block: 'b-link',
                                        url: '#buy',
                                        content: 'Buy'
                                    }
                                }
                            ]
                        }

                    ]
                },
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
                                            content: 'About Magic Desktop'
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
                            elem: 'right',
                            content: [
                                {
                                    elem: 'h3',
                                    content: 'All that your kids would probably need when mastering a computer!'
                                }
                                // {
                                //     block: 'button'
                                // }
                            ]
                        },
                        {
                            elem: 'shadow'
                        }
                    ]
                },
                {
                    block: 'main',
                    content: [
                        {
                            block: 'block',
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
            block: 'footer',
            content: [
                {
                    block: 'copyright',
                    content: [
                        {
                            elem: 'logo'
                        },
                        '© 2013 EasyBits Software. All Rights Reserved.'
                    ]
                },
                {
                    block: 'social',
                    content: [
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#google'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#twitter'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#youtube'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#facebook'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#facebook'
                            }
                        }
                    ]
                },
                {
                    block: 'b-menu-horiz',
                    mods: { layout: 'normal' },
                    js: false,
                    mix: [{ block: 'footer-nav' }],
                    content: [
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#company',
                                content: 'Company'
                            }
                        },
                        {
                            elem: 'item',
                            elemMods: { state: 'current' },
                            content: 'License Agreement'
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#privacy-policy',
                                content: 'Privacy Policy'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#contact-us',
                                content: 'Contact Us'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})