({
    block: 'b-page',
    title: 'Buy — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'buy' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'buy' }
                },
                {
                    block: 'notice',
                    content: 'You may choose the license that better suits your needs:'
                }
            ]
        },
        {
            block: 'info-block',
            mods: { border: 'yes' },
            mix: [{ block: 'clearfix' }],
            content: {
                block: 'container',
                content: [
                    {
                        block: 'row-fluid',
                        content: [
                            {
                                block: 'span4',
                                content: {
                                    block: 'price',
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
                                                    content: '4'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'currency' },
                                                    content: 'USD'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Not sure for how long your variant kid is going to be interested? Take this option. You can drop at any time.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '45', theme: 'gray' },
                                            url: '#Monthly',
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'price',
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'One year'
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
                                                    content: '39'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'currency' },
                                                    content: 'USD'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: 'You feel your kid is about to grow out of Magic Desktop, and he has no younger brothers and sisters? This option is just for you.'
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '45', theme: 'gray' },
                                            url: '#Year',
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            },
                            {
                                block: 'span4',
                                content: {
                                    block: 'price',
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'time-license',
                                            content: 'Lifetime'
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
                                                    content: '79'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'trifle' },
                                                    content: '99'
                                                },
                                                {
                                                    elem: 'cost-item', elemMods: { type: 'currency' },
                                                    content: 'USD'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'description',
                                            content: "Your kid is really young and you plan to use Magic Desktop for 3-5 years? This is the best choice and investment in your kid's future."
                                        },
                                        {
                                            block: 'button',
                                            mods: { size: '45', theme: 'gray' },
                                            url: '#Lifetime',
                                            content: 'Buy'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'or',
            content: 'or'
        },
        {
            block: 'container',
            content: [
                {
                    block: 'row-fluid',
                    mods: { border: 'yes' },
                    content: [
                        {
                            block: 'span3',
                            content: [
                                {
                                    block: 'try-free',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: 'Try it <b>Free</b>'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span4',
                            content: [
                                {
                                    block: 'try-free',
                                    content: [
                                        {
                                            elem: 'description',
                                            content: 'Try Magic Desktop 8 full version and when you’re ready to buy, you can choose from any of the plans above.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span4',
                            mix: [{ block: 'offset1' }],
                            mods: { type: 'button' },
                            content: {
                                block: 'button',
                                mods: { size: '45', theme: 'gray', align: 'middle' },
                                url: '/desktop.bundles/download/download.html',
                                content: 'Download'
                            }
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { type: 'buy' },
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                content: {
                                    elem: 'h1',
                                    content: 'Special offers'
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
                                            elemMods: { type: 'buy', position: '1' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Already own Magic Desktop?'
                                        },
                                        {
                                            elem: 'description',
                                            content: [
                                                'We have a special upgrade program for our customers. Please, ',
                                                {
                                                    block: 'b-link',
                                                    url: '/desktop.bundles/support/support.html',
                                                    content: 'apply here'
                                                },
                                                '.'
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
                                            elem: 'picture',
                                            elemMods: { type: 'buy', position: '2' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'For senior sitizens'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'If you are a senior citizen buying Magic Desktop for your grandchild, be sure to get our special discount on the order page.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row-fluid',
                    mods: { type: 'buy', position: 'last' },
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
                                            elemMods: { type: 'buy', position: '3' }
                                        },
                                        {
                                            elem: 'title',
                                            content: 'For Schools & Kindergardens'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'We have a special program for schools and kindergardens. If you represent an educational institution and would like to get a number of Magic Desktop licenses, please, get in touch.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'span4'
                        }
                    ]
                }
            ]
        },
        {
            block: 'info-block',
            mix: [{ block: 'shadow' }],
            mods: { page: 'buy' },
            content: {
                block: 'container',
                content: [
                    {
                        block: 'row-fluid',
                        mods: { type: 'faq' },
                        content: [
                            {
                                block: 'span4',
                                content: {
                                    block: 'block',
                                    content: {
                                        elem: 'h1',
                                        content: 'Questions and Answers'
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
                                                elem: 'title',
                                                content: [
                                                    'Do you sell through resellers?',
                                                    {
                                                        tag: 'br'
                                                    },
                                                    'How do I become a reseller?',
                                                    {
                                                        elem: 'faq-icon'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'description',
                                                content: [
                                                    'Magic Desktop is distributed through various resellers all over the world. If you are interested in becoming a reseller, please send ',
                                                    {
                                                        block: 'b-link',
                                                        url: '/desktop.bundles/company/company.html#contact',
                                                        content: 'contact us here.'
                                                    },
                                                    {
                                                        elem: 'faq-icon',
                                                        mods: { type: 'desc' }
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
                                                elem: 'title',
                                                content: [
                                                    'Can I install Magic Desktop on more than one computer?',
                                                    {
                                                        elem: 'faq-icon'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'description',
                                                content: [
                                                    'Normally, Magic Desktop license can be installed only on one computer. You can purchase additional licenses at special prices. Please, also contact us in case you need a special type of license.',
                                                    {
                                                        elem: 'faq-icon',
                                                        mods: { type: 'desc' }
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
                        mods: { type: 'faq' },
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
                                                elem: 'title',
                                                content: [
                                                    'How do I redeem my eCoupon?',
                                                    {
                                                        elem: 'faq-icon'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'description',
                                                content: [
                                                    'Please, proceed with the chosen type of the license and enter your eCoupon on ther order page.',
                                                    {
                                                        elem: 'faq-icon',
                                                        mods: { type: 'desc' }
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
                                                elem: 'title',
                                                content: [
                                                    'Am I eligible for any discounts?',
                                                    {
                                                        elem: 'faq-icon'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'description',
                                                content: [
                                                    'If the regular price is too high for your family, please, contact us to get a special offer.',
                                                    {
                                                        elem: 'faq-icon',
                                                        mods: { type: 'desc' }
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
        },
        {
            block: 'footer',
            page: 'buy'
        }
    ]
})