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
                                            {
                                                elem: 'item',
                                                content: [
                                                'Over ',
                                                {
                                                    elem: 'item-selection',
                                                    content: '70 million'
                                                },
                                                ' computers'
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { line: '2' },
                                                content: 'with Magic Desktop preloaded'
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { line: '3' },
                                                content: 'have been sold world wide.'
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span4',
                            mods: { position: 'center' },
                            content: {
                                block: 'block-info',
                                content: [
                                    {
                                       elem: 'h2',
                                       elemMods: { type: 'italic' },
                                       content: [
                                            {
                                                elem: 'item',
                                                content: 'Millions of users'
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { line: '2' },
                                                content: 'cannot be wrong.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ elem: 'item-selection' }],
                                                elemMods: { line: '3' },
                                                content: 'Join the community!'
                                            }
                                        ]
                                    }
                                ]
                            }
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
                }
            ]
        },
        {
            block: 'row-fluid',
            mix: [{ block: 'shadow' }],
            mods: { background: 'gray' },
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        content: 'Top Reasons'
                                    },
                                    {
                                        elem: 'h2',
                                        content: 'why you need Magic Desktop:'
                                    },
                                    {
                                        elem: 'image',
                                        url: '../../../i/block__image.png'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    block: 'row-fluid',
                                    mods: { type: 'string' },
                                    content: [
                                        {
                                            block: 'span4',
                                            content: [
                                                {
                                                    block: 'unit',
                                                    content: [
                                                        {
                                                            elem: 'picture',
                                                            elemMods: { position: '1' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids love it'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
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
                                                            elemMods: { position: '2' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids love it'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
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
                                                            elemMods: { position: '3' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids love it'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
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
                                                    block: 'unit',
                                                    content: [
                                                        {
                                                            elem: 'picture',
                                                            elemMods: { position: '4' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids love it'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
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
                                                            elemMods: { position: '5' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids love it'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
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
                                                            elemMods: { position: '6' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids love it'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
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
            block: 'container',
            content: [
                {
                    block: 'row-fluid',
                    mix: [{ block: 'shadow' }],
                    mods: { border: 'yes', type: 'community' },
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        content: 'Community'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'There are a lot of parents who are active Magic Desktop users. We are trying to create a better place for them for sharing ideas, supporting each other, and providing feedback. Join us!'
                                    },
                                    {
                                        block: 'community',
                                        mix: [{ block: 'clearfix' }],
                                        content: [
                                            {
                                                elem: 'parent'
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
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'unit',
                                    content: [
                                        {
                                            elem: 'image',
                                            url: '../../../i/units__image.png'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { border: 'yes', type: 'testimonials' },
                    content: [
                        {
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        content: 'Testimonials'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'b-carousel',
                                    mods: { auto: 'yes' },
                                    content: [
                                        {
                                            elem: 'items',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    elemMods: { type: 'first-block', state: 'active' },
                                                    content: {
                                                        block: 'row-fluid',
                                                        content: [
                                                            {
                                                                block: 'span4',
                                                                content: [
                                                                    {
                                                                        block: 'unit',
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { type: 'second-block' },
                                                    content: {
                                                        block: 'row-fluid',
                                                        content: [
                                                            {
                                                                block: 'span4',
                                                                content: [
                                                                    {
                                                                        block: 'unit',
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { type: 'third-block' },
                                                    content: {
                                                        block: 'row-fluid',
                                                        content: [
                                                            {
                                                                block: 'span4',
                                                                content: [
                                                                    {
                                                                        block: 'unit',
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Lindsay'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'USA'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'switcher',
                                            content: [
                                                {
                                                    elem: 'button',
                                                    elemMods: { type: 'first-block', state: 'active' }
                                                },
                                                {
                                                    elem: 'button',
                                                    elemMods: { type: 'second-block' }
                                                },
                                                {
                                                    elem: 'button',
                                                    elemMods: { type: 'third-block' }
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
                            block: 'span3',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                        elem: 'h1',
                                        content: 'Partner with us!'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'We have many different types of affiliate & partner programs that we offer, if you are a software reseller, website owner, ISP, OEM or a private person that wants to sell Magic Desktop, we have the right program for you!'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
                            content: [
                                {
                                    block: 'unit',
                                    mods: { type: 'notice' },
                                    content: [
                                        {
                                            elem: 'notice',
                                            content: 'Who are you?'
                                        }
                                    ]
                                },
                                {
                                    block: 'row-fluid',
                                    mods: { type: 'string' },
                                    content: [
                                        {
                                            block: 'span4',
                                            content: [
                                                {
                                                    block: 'unit',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            content: 'Software reseller'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
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
                                                            elem: 'title',
                                                            content: 'Software reseller'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
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
                                                            elem: 'title',
                                                            content: 'Software reseller'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
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
                    mods: { type: 'string' },
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
                                    block: 'row-fluid',
                                    content: [
                                        {
                                            block: 'span4',
                                            content: [
                                                {
                                                    block: 'unit',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            content: 'OEM'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'You produce computers targeting the consumer market and would like to preload Magic Desktop? Please contact us today for a price quote.'
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
                                                            elem: 'title',
                                                            content: 'Magic Desktop fan'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
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
                                                            elem: 'title',
                                                            content: 'Magic Desktop fan'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'You are a software reseller and have your own online store, start making money today by selling Magic Desktop to your customers.'
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
            mods: { page: 'index' }
        }
    ]
})