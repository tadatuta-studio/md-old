({
    block: 'b-page',
    title: 'Buy',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'Buy' },
    content:[
        {
            block: 'header',
            mods: { page: 'Buy' }
        },
        {
            block: 'notice',
            content: 'You may choose the license that better suits your needs:'
        },
        {
            block: 'info-block',
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'price',
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'Monthly'
                                        },
                                        {
                                            elem: 'cost',
                                            content: [
                                                {
                                                    elem: 'cost-item',
                                                    content: '$'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'count' },
                                                    content: '49'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Not sure for how long your variant kid is going to be interested? Take this option. You can drop at any time.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: 'm', theme: 'gray', type: 'price'  },
                                            content: 'Buy'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'Monthly'
                                        },
                                        {
                                            elem: 'cost',
                                            content: [
                                                {
                                                    elem: 'cost-item',
                                                    content: '$'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'count' },
                                                    content: '49'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Not sure for how long your variant kid is going to be interested? Take this option. You can drop at any time.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: 'm', theme: 'gray', type: 'price'  },
                                            content: 'Buy'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    mods: { position: 'last' },
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'Monthly'
                                        },
                                        {
                                            elem: 'cost',
                                            content: [
                                                {
                                                    elem: 'cost-item',
                                                    content: '$'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'count' },
                                                    content: '49'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Not sure for how long your variant kid is going to be interested? Take this option. You can drop at any time.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: 'm', theme: 'gray', type: 'price' },
                                            content: 'Buy'
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
            block: 'or',
            content: 'or'
        },
        {
            elem: 'inner',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    block: 'main',
                    content: [
                        {
                            block: 'try-free',
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Try it Free'
                                },
                                {
                                    elem: 'description',
                                    content: 'Try Magic Desktop 8 full version and when you’re ready to buy, you can choose from any of the plans above.'
                                },
                                {
                                    block: 'button',
                                    mods: { size: 'm', theme: 'gray', align: 'right' },
                                    content: 'Download'
                                }
                            ]
                        },
                        {
                            block: 'info',
                            mix: [{ block: 'clearfix' }],
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Special offers'
                                },
                                {
                                    elem: 'list',
                                    content: [
                                        {
                                            elem: 'item',
                                            mods: { color: 'blue' },
                                            content: [
                                                {
                                                    elem: 'title-item',
                                                    content: 'Already own Magic Desktop?'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: [
                                                    'Get 50% off the regular price! To upgrade to Magic Desktop 8 login to your ',
                                                        {
                                                            block: 'b-link',
                                                            url: '#community-portal',
                                                            content: 'community portal'
                                                        }, '.'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { color: 'red' },
                                            content: [
                                                {
                                                    elem: 'title-item',
                                                    content: 'For senior sitizens'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'If you are a senior citizen buying Magic Desktop for your grandchild, be sure to get our special discount on the order page.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { color: 'pink' },
                                            content: [
                                                {
                                                    elem: 'title-item',
                                                    content: 'For Schools & Kindergardens'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'We have a special program for schools and kindergardens. If you represent an educational institution and would like to get a number of Magic Desktop licenses, please, get in touch.'
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
            block: 'info',
            mods: { type: 'faq' },
            mix: [{ block: 'clearfix' }, { block: 'shadow' }],
            content: [
                {
                    elem: 'inner',
                    content: [
                       {
                            elem: 'title',
                            content: 'Questions and Answers'
                        },
                        {
                            elem: 'list',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title-item',
                                            content: 'Do you sell through resellers? How do I become a reseller?'
                                        },
                                        {
                                            elem: 'description',
                                            content: [
                                            'Magic Desktop is distributed through various resellers all over the world. If you are interested in becoming a reseller, please send ',
                                                {
                                                    block: 'b-link',
                                                    url: '#contact-us-here',
                                                    content: 'contact us here'
                                                }, '.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title-item',
                                            content: 'Can I install Magic Desktop on more than one computer?'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Normally, Magic Desktop license can be installed only on one computer. You can purchase additional licenses at special prices. Please, also contact us in case you need a special type of license.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title-item',
                                            content: 'How do I redeem my eCoupon?'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Please, proceed with the chosen type of the license and enter your eCoupon on ther order page.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title-item',
                                            content: 'Am I eligible for any discounts?'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'If the regular price is too high for your family, please, contact us to get a special offer.'
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