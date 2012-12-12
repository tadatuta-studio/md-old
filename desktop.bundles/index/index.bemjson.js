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
                // {
                //     block: 'b-carousel',
                //     content: [
                //         {
                //             elem: 'items',
                //             content: [
                //                 {
                //                     elem: 'item',
                //                     elemMods: { state: 'active' },
                //                     content: [
                //                         {
                //                             elem: 'title',
                //                             content: 'Play & Learn'
                //                         },
                //                         {
                //                             elem: 'description',
                //                             content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                //                         },
                //                         {
                //                             elem: 'slide',
                //                             tag: 'img', /* вынести в bemhtml */
                //                             url: 'тут-url-картинки'
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     elem: 'item',
                //                     content: [
                //                         {
                //                             elem: 'title',
                //                             content: 'Play & Learn'
                //                         },
                //                         {
                //                             elem: 'description',
                //                             content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                //                         },
                //                         {
                //                             elem: 'slide',
                //                             tag: 'img', /* вынести в bemhtml */
                //                             url: 'тут-url-картинки'
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     elem: 'item',
                //                     content: [
                //                         {
                //                             elem: 'title',
                //                             content: 'Play & Learn'
                //                         },
                //                         {
                //                             elem: 'description',
                //                             content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                //                         },
                //                         {
                //                             elem: 'slide',
                //                             tag: 'img', /* вынести в bemhtml */
                //                             url: 'тут-url-картинки'
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     elem: 'item',
                //                     content: [
                //                         {
                //                             elem: 'title',
                //                             content: 'Play & Learn'
                //                         },
                //                         {
                //                             elem: 'description',
                //                             content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                //                         },
                //                         {
                //                             elem: 'slide',
                //                             tag: 'img', /* вынести в bemhtml */
                //                             url: 'тут-url-картинки'
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     elem: 'item',
                //                     content: [
                //                         {
                //                             elem: 'title',
                //                             content: 'Play & Learn'
                //                         },
                //                         {
                //                             elem: 'description',
                //                             content: 'Magic Desktop creates a fun and safe entertainment where kids can learn to use PC at their own pace. The child-friendly design is perfect for those tiny little hands while the collection of included programs is suitable for all ages.'
                //                         },
                //                         {
                //                             elem: 'slide',
                //                             tag: 'img', /* вынести в bemhtml */
                //                             url: 'тут-url-картинки'
                //                         }
                //                     ]
                //                 }
                //             ]
                //         },
                //         {
                //             elem: 'switcher', /* позиционировать поверх слайдов */
                //             content: [
                //                 {
                //                     elem: 'button',
                //                     elemMods: { type: 'play', state: 'active' },
                //                     content: '1' /* убрать контент, когда будут иконки */
                //                 },
                //                 {
                //                     elem: 'button',
                //                     elemMods: { type: 'safe' },
                //                     content: '2'
                //                 },
                //                 {
                //                     elem: 'button',
                //                     elemMods: { type: 'control' },
                //                     content: '3'
                //                 },
                //                 {
                //                     elem: 'button',
                //                     elemMods: { type: 'entertainment' },
                //                     content: '4'
                //                 },
                //                 {
                //                     elem: 'button',
                //                     elemMods: { type: 'protection' },
                //                     content: '5'
                //                 }
                //             ]
                //         }
                //     ]
                // },
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
                                    content: 'Community'
                                },
                                {
                                    elem: 'description',
                                    content: 'There are a lot of parents who are active Magic Desktop users. We are trying to create a better place for them for sharing ideas, supporting each other, and providing feedback. Join us!'
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