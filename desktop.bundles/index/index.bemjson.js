({
    block: 'b-page',
    title: 'Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'index' },
    content:[
        {
            block: 'header',
            mods: { page: 'index' }
        },
        {
            elem: 'inner',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    block: 'b-carousel',
                    mods: { auto: 'yes' },
                    content: [
                        {
                            elem: 'play'
                        },
                        {
                            elem: 'items',
                            content: [
                                {
                                    elem: 'item',
                                    elemMods: { state: 'active', type: 'play' },
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
                                            url: '../../i/b-carousel__slide_slide_1.png'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'safe' },
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
                                                    content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/b-carousel__slide_slide_2.png'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'control' },
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
                                                    content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/b-carousel__slide_slide_3.png'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'entertainment' },
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
                                                    content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/b-carousel__slide_slide_4.png'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'protection' },
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
                                                    content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'slide',
                                            url: '../../i/b-carousel__slide_slide_5.png'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'switcher', /* позиционировать поверх слайдов */
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
                            elem: 'inner',
                            content: [
                                {
                                    elem: 'info',
                                    content: [
                                        {
                                            block: 'b-link',
                                            mix: [{ block: 'popupa', elem: 'title' }],
                                            url: 'http://www.youtube.com/embed/1ZpTwSULBh0?rel=0',
                                            target: '_blank',
                                            content: 'Magic Desktop 8 official demo'
                                        },
                                        {
                                            elem: 'close',
                                            content: 'Close'
                                        }
                                    ]
                                },
                                {
                                    elem: 'video',
                                    attrs: { src: 'http://www.youtube.com/embed/1ZpTwSULBh0?rel=0', frameborder: '0' }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'about-program',
                    content: [
                        {
                            elem: 'downloads',
                            content: [
                                {
                                    elem: 'downloads-item',
                                    content: [
                                    'Over ',
                                        {
                                            block: 'b-link',
                                            content: '70 million',
                                            url: '#70-million'
                                        },' computers'
                                    ]
                                },
                                {
                                    elem: 'downloads-item',
                                    elemMods: { line: '2' },
                                    content: 'with Magic Desktop preloaded'
                                },
                                {
                                    elem: 'downloads-item',
                                    elemMods: { line: '3' },
                                    content: 'have been sold world wide.'
                                }
                            ]
                        },
                        {
                            elem: 'downloads',
                            elemMods: { type: 'community' },
                            content: [
                                {
                                    elem: 'downloads-item',
                                    content: 'Millions of users'
                                },
                                {
                                    elem: 'downloads-item',
                                    elemMods: { line: '2' },
                                    content: 'cannot be wrong.'
                                },
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'about-program', elem: 'downloads-item', elemMods: { line: '3' } }],
                                    content: 'Join the community!',
                                    url: '#join-the-community'
                                }
                            ]
                        },
                        {
                            block: 'button',
                            mods: { size: 'm', theme: 'download', page: 'home' },
                            content: 'Get it now'
                        }
                    ]
                }
            ]
        },
        {
            block: 'info-block',
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'chapter',
                            mods: { type: 'reasons' },
                            mix: [{ block: 'clearfix' }, { block: 'shadow' }],
                            content: [
                                {
                                    elem: 'inner',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: [
                                                'Top Reasons',
                                                {
                                                    elem: 'sub-title',
                                                    content: 'why you need Magic Desktop:'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'image',
                                            url: '../../../i/chapter__image.png'
                                        }
                                    ]
                                },
                                {
                                    block: 'units',
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            mods: { count: '1' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Kids Love It'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            mods: { count: '2' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Peace Of Mind'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            mods: { count: '3' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'The Safest Web'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            mods: { count: '4' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Early Start'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            mods: { count: '5' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Unleash Their Creativity'
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Millions of kids use Magic Desktop every day. Lots of activities and applications included just for them.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            mods: { count: '6' }
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: 'Family Fun'
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
            elem: 'inner',
            mix: [{ block: 'clearfix' }, { block: 'shadow' }],
            content: [
                {
                    block: 'chapter',
                    mods: { border: 'yes', type: 'community' },
                    mix: [{ block: 'clearfix' }],
                    content: [
                        {
                            elem: 'inner',
                            mods: { type: 'community' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Community'
                                },
                                {
                                    elem: 'description',
                                    content: 'There are a lot of parents who are active Magic Desktop users. We are trying to create a better place for them for sharing ideas, supporting each other, and providing feedback. Join us!'
                                },
                                {
                                    block: 'community',
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
                        },
                        {
                            block: 'units',
                            content: [
                                {
                                    elem: 'image',
                                    url: '../../../i/units__image.png'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'chapter',
                    mods: { border: 'yes' },
                    mix: [{ block: 'clearfix' }],
                    content: [
                        {
                            elem: 'inner',
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Testimonials'
                                }
                            ]
                        },
                        {
                            block: 'units',
                            mods: { type: 'testimonials' },
                            content: [
                                {
                                    elem: 'inner',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnt believe she did it all by herself!"'
                                                },
                                                {
                                                    elem: 'adds',
                                                    content: [
                                                        {
                                                            elem: 'author-item',
                                                            content: 'Lindsay'
                                                        }, ' / ',
                                                        {
                                                            elem: 'author-item',
                                                            mods: { type: 'country' },
                                                            content: 'USA'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnt believe she did it all by herself!"'
                                                },
                                                {
                                                    elem: 'adds',
                                                    content: [
                                                        {
                                                            elem: 'author-item',
                                                            content: 'Michael'
                                                        }, ' / ',
                                                        {
                                                            elem: 'author-item',
                                                            mods: { type: 'country' },
                                                            content: 'Ukraine'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: '"My 5 year old is becoming a master at the drawing and image editing program. She created the family Christmas card this year, using her picture and adding Photoshop type effects to it. The extended family couldnt believe she did it all by herself!"'
                                                },
                                                {
                                                    elem: 'adds',
                                                    content: [
                                                        {
                                                            elem: 'author-item',
                                                            content: 'Ann'
                                                        }, ' / ',
                                                        {
                                                            elem: 'author-item',
                                                            mods: { type: 'country' },
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
                    ]
                },
                {
                    block: 'chapter',
                    mix: [{ block: 'clearfix' }],
                    content: [
                        {
                            elem: 'inner',
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Partner with us!'
                                },
                                {
                                    elem: 'description',
                                    content: 'We have many different types of affiliate & partner programs that we offer, if you are a software reseller, website owner, ISP, OEM or a private person that wants to sell Magic Desktop, we have the right program for you!'
                                },
                                {
                                    block: 'button',
                                    mods: { size: '240', theme: 'blue', type: 'apply' },
                                    content: 'Apply now!'
                                }
                            ]
                        },
                        {
                            block: 'units',
                            content: [
                                {
                                    elem: 'notice',
                                    content: 'Who are you?'
                                },
                                {
                                    elem: 'inner',
                                    content: [
                                        {
                                            elem: 'item',
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
                                        },
                                        {
                                            elem: 'item',
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
                                        },
                                        {
                                            elem: 'item',
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
                                        },
                                        {
                                            elem: 'item',
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
                                        },
                                        {
                                            elem: 'item',
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
            block: 'footer'
        }
    ]
})