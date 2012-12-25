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
                                                    content: 'Learn through play'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Magic Desktop creates a safe and stimulating environment where kids can improve their computer literacy at their own pace. Child-friendly design works perfectly with tiny hands, while our complete collection of programs keep young minds excited and engaged.'
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
                                                    content: 'The safest browser'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'My First Browser is the safest kid’s Internet browser in existence! Hand-select your favorite kid-friendly websites and allow navigation on parent-approved sites only.'
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
                                                    content: 'Parental Control'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Control not only which programs your child may access but also when and how kids access approved programs. With a "No Homework-No Play!" focus, technology becomes your new best friend.'
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
                                                    content: 'Delight and Entertain'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Magic Desktop comes complete with a sensational collection of kid-friendly games, photo and drawing tools, and Web content – with new updates every month!'
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
                                                    content: 'Computer Protection'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Magic Desktop safeguards important system settings and data files from accidental interference. So your PC stays in peak working condition.'
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
                                                'More than ',
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
                                                content: 'have been sold worldwide'
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { line: '3' },
                                                content: 'with Magic Desktop preloaded.'
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
                                                content: 'Get Magic Desktop instantly'
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { line: '2' },
                                                content: 'and give your child'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ elem: 'item-selection' }],
                                                elemMods: { line: '3' },
                                                content: 'a valuable head start!'
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
                                url: '/desktop.bundles/download/download.html',
                                content: 'Get it now!'
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
                                        content: 'Why Magic Desktop?'
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
                                                            content: 'Kids love it!'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Children have fun while learning with an assortment of popular activities and applications. Millions of young Magic Desktop daily users can’t be wrong.'
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
                                                            content: 'Peace-of-mind'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Parents love the peace-of-mind Magic Desktop provides, with no more worrying about mishaps or deleted files on the family PC.'
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
                                                            content: 'The Safest Web'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Protect young, innocent eyes with parent-managed Web browsing. Magic Desktop offers fresh updates of child-friendly content every month.'
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
                                                            content: 'Early Learning'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Give your child a head start by teaching them how computers work and encouraging exploration. Magic Desktop is suitable for kids as young as toddlers.'
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
                                                            content: 'Unleash Creativity'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Provide a multitude of creation tools that help children express their creativity and share their creations with supportive friends and family.'
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
                                                            content: 'Family Fun'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Magic Desktop provides endless hours of fun – for one or all. Gather the whole family around for adventures, laughs, and excitement.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'row-fluid',
                                    content: {
                                        block: 'b-link',
                                        mods: { type: 'readmore' },
                                        url: '/desktop.bundles/product/product.html',
                                        content: {
                                            elem: 'inner',
                                            content: 'Read more'
                                        }
                                    }
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
                                        content: 'Join our active community of parents who use Magic Desktop. Share your ideas, provide and receive support, and offer valuable feedback. Sign-up today!'
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
                                                                                content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnot believe she did it all by herself!"'                                                                            },
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
                                                                                content: '"The Kid’s E-mail and Internet browser programs are great, so much better than all the other filters I have tried. My son is 9 and his parent-approved websites list is growing quickly. I add a new site in exchange for 50 bonus points. He loves it!""'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Anne-Marie'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
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
                                                                        content: [
                                                                            {
                                                                                elem: 'description',
                                                                                content: '"I love your "No Homework-No Play" technology! You should see my kids trying hard to get the bonus points in Easy Learning doing multiplication tables so that they can play games afterwards. Parental control system is so simple and effective! Fantastic!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Michelle'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'Canada'
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
                                                                                content: '"I have two kids (3 and 8 years old) and after installing Magic Desktop I have stopped worrying about my kids damaging the system or deleting my files. Thanks Easybits!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Elise'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'France'
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
                                                                                content: '"I was really surprised by how much I got for my money. My kids love your wonderful programs. We have been using MD for over a year now and they can’t get enough. This is probably the best software purchase I have ever made. Thank you!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Beth'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'UK'
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
                                                                                content: '"I am very happy I found your product. I bought a lifetime license after only trialing the demo version for 2 hrs as I could tell this was a well thought out and executed platform to keep my child safe while using his new netbook."'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Steve Wetzel'
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
                                                                                content: '"Magic Desktop has been a revolution in our household. Using the computer here was always based on a lot of supervision and neither me or my wife have the time! You came in and solved our problem. Thank you so much!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Ricardo & Helena'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'Portugal'
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
                                                                                content: '"What I love the most about Magic Desktop is that it grows as my kids grow. They never get bored and I can choose to add regular Windows programs into it, if I feel the kids are prepared. And like you said, it really is the perfect stepping stone for them using my PC as teenagers. Thank you for thinking about our kids!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Peter'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        content: 'Belgium'
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
                                                                                content: '"Magic Desktop is a perfect way to teach kids to use a PC and introduce them to Internet while enjoying the benefits of parental control. I recommend it to all parents with young kids!"'
                                                                            },
                                                                            {
                                                                                elem: 'author',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'author-item',
                                                                                        mods: { color: 'red' },
                                                                                        content: 'Inge'
                                                                                    }, ' / ',
                                                                                    {
                                                                                        elem: 'author-item',
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
                                        content: 'Share the magic! Software resellers, website owners, ISPs, OEMs and individuals looking to sell Magic Desktop may participate in a program ideal for their needs. Learn about our range of affiliate and partner programs, today.'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            mix: [{ block: 'offset1' }],
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
                                                            elem: 'title',
                                                            content: 'Software resellers'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Software resellers with their own online store can begin earning revenue through Magic Desktop sales to their existing customers.'
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
                                                            content: 'Website owners'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Webmasters serving our target audience should contact us to launch the right resale program for their needs.'
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
                                                            content: 'ISPs'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Internet Service Providers that would like to offer customers a safe, family-oriented solution can do what so many ISP’s around the globe already do – resell Magic Desktop.'
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
                    mods: { type: 'string', image: 'yes' },
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
                                                            content: 'OEMs'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Original Equipment Manufacturers that produce computers targeting our consumer market are invited to partner with us to preload Magic Desktop.'
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
                                                            content: 'Magic Desktop fans'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'If you love Magic Desktop and want to share that love with others, start earning  by selling our sought-after technology solution!'
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