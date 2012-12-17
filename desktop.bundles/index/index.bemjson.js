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
                                            url: '../../i/slider__slide_slide_1.png'
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
                                            url: '../../i/slider__slide_slide_2.png'
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
                                            url: '../../i/slider__slide_slide_3.png'
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
                                            url: '../../i/slider__slide_slide_4.png'
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
                                            url: '../../i/slider__slide_slide_5.png'
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
                                    url: 'http://www.youtube.com/embed/1ZpTwSULBh0?rel=0'
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
                                                            content: 'For parents. No more worrying about kids damaging the system or deleting files on the family PC.'
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
                                                            content: 'Smooth sailing around the Web. Plenty of child-friendly content updated monthly. Parents have full control.'
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
                                                            content: 'Suitable even for toddlers. Give your child a head start in computers and let them explore while they learn.'
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
                                                            content: [
                                                                'Unleash Their',
                                                                {
                                                                    tag: 'br'
                                                                },
                                                                ' Creativity'
                                                            ]
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Provide a multitude of creation tools for your kids to express themselves and share with their friends and family.'
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
                                                            content: 'Gather the family around the home computer - parents, grandparents and children - for endless hours of fun.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'units',
                                                    elem: 'readmore',
                                                    content: {
                                                        block: 'b-link',
                                                        mods: { type: 'readmore' },
                                                        url: '#Read-more',
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
                            block: 'b-carousel',
                            mods: { auto: 'yes' },
                            content: [
                                {
                                    elem: 'items',
                                    content: [
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'first-block', state: 'active' },
                                            content: [
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
                                                                            content: '"The Kid’s E-mail and Internet browser programs are great, so much better than all the other filters I have tried. My son is 9 and his parent-approved websites list is growing quickly. I add a new site in exchange for 50 bonus points. He loves it!""'
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
                                                                            content: '"I love your "No Homework-No Play" technology! You should see my kids trying hard to get the bonus points in Easy Learning doing multiplication tables so that they can play games afterwards. Parental control system is so simple and effective! Fantastic!"'
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
                                            elem: 'item',
                                            elemMods: { type: 'second-block' },
                                            content: [
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
                                                                            content: '"The Kid’s E-mail and Internet browser programs are great, so much better than all the other filters I have tried. My son is 9 and his parent-approved websites list is growing quickly. I add a new site in exchange for 50 bonus points. He loves it!""'
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
                                                                            content: '"I love your "No Homework-No Play" technology! You should see my kids trying hard to get the bonus points in Easy Learning doing multiplication tables so that they can play games afterwards. Parental control system is so simple and effective! Fantastic!"'
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
                                                    content: 'Website owner'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You have a popular website where you have visitors that you believe is in our target audience, take contact today and we will setup the proper program for you.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'ISP'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You are an Internet Service Provider and want to offer your customers a safe family solution? Do as many other ISP’s around the globe and offer Magic Desktop today.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
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
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Magic Desktop fan'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'You like the product and want to promote and sell it to others as a private person? Start making some extra money today; you can actually make a fortune!'
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
            block: 'footer',
            mods: { page: 'home' }
        }
    ]
})