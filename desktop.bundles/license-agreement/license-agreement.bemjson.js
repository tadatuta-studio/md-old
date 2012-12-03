({
    block: 'b-page',
    title: 'License Agreement — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'license-agreement' },
    content:[
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
                                'is like' ,
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
            block: 'sidebar',
            content: [
                {
                    block: 'title',
                    content: 'Easybits Kids end user License Agreement'
                },
                {
                    block: 'list',
                    content: [
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Permited-License-uses-and-restrictions',
                                content: 'Permited License uses and restrictions'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Ownership-of-copyrights-and-intellectual-property',
                                conent: 'Ownership of copyrights and intellectual property'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Consent-to-use-of-data',
                                content: 'Consent to use of data'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Other-services',
                                content: 'Other services'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Limited-media-warranty',
                                content: 'Limited media warranty'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Exclusion-of-other-warranties',
                                content: 'Exclusion of other warranties'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Limitation-of-liability',
                                content: 'Limitation of liability'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#User-submissions',
                                content: 'User submissions'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Termination',
                                content: 'Termination'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '#Applicable-laws-and-general-provisions',
                                content: 'Applicable laws and general provisions'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'p',
                    content: 'DO NOT USE, INSTALL OR LOAD THIS SOFTWARE AND ANY ASSOCIATED MATERIALS (COLLECTIVELY, THE “SOFTWARE”) UNTIL YOU HAVE CAREFULLY READ THE FOLLOWING TERMS AND CONDITIONS. BY LOADING, INSTALLING OR USING THE SOFTWARE, YOU AGREE TO THE TERMS OF THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT USE, INSTALL OR LOAD THE SOFTWARE.'
                },
                {
                    elem: 'p',
                    content: 'IMPORTANT NOTE: This Software may be used to reproduce materials. It is licensed to you only for reproduction of materials you are authorized or legally permitted to reproduce. Remote access of copyrighted content is only provided for lawful personal use or as otherwise legally permitted. If you are uncertain about your right to copy or permit access to any material you should contact your legal advisor.'
                },
                {
                    elem: 'h3',
                    content: 'Permited License uses and restrictions.'
                },
                {
                    elem: 'p',
                    content: 'This Software is licensed for your personal use and the personal use of your family members residing at your residential address. You may install and use the Software on any computer located at your residential address that is used by your children, and you may make a reasonable number of back-up copies of the Software. Your rights to use the Software are also subject to the terms on which you acquired it, such as the terms of any subscription plan.'
                },
                {
                    elem: 'p',
                    content: 'You may not copy, modify, rent, sell, distribute or transfer any part of the Software except as provided in this Agreement, and you agree to prevent unauthorized copying of the Software. You may not reverse engineer, decompile, or disassemble the Software. The Software may include portions offered on terms in addition to those set out here, as set out in a license accompanying those portions. You may not rent, lease, lend, redistribute or sublicense the Software. You may, however, make a one-time permanent transfer of all of your license rights to the Software to another party, provided that: (a) the transfer must include all of the Software, including all its component parts, original media, printed materials and this License; (b) you do not retain any copies of the Software, full or partial, including copies stored on a computer or other storage device; and (c) the party receiving the Software reads and agrees to accept the terms and conditions of this License.'
                },
                {
                    elem: 'h3',
                    content: 'Ownership of copyrights and intellectual property.'
                },
                {
                    elem: 'p',
                    content: 'Title to all copies of the Software remains with EasyBits or its suppliers. The Software is copyrighted and protected by the laws of your country and by international treaty provisions. You may not remove any copyright notices from the Software. EasyBits may make changes to the Software at any time without notice, and is not obligated to support or update the Software. Except as otherwise expressly provided, EasyBits grants no express or implied right under EasyBits patents, copyrights, trademarks, or other EasyBits intellectual property rights.'
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
                                url: '#google'
                            }
                        },
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
                                url: '#google'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
