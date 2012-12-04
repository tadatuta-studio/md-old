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
                                        content: 'Ownership of copyrights and intellectual property'
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
                        },
                        {
                            elem: 'h3',
                            content: 'Consent to use of data.'
                        },
                        {
                            elem: 'p',
                            content: 'You agree that EasyBits and its subsidiaries may collect and use technical and related information, including but not limited to technical information about your computer, system and application software, and peripherals, that is gathered periodically to facilitate the provision of software updates, product support and other services to you (if any) related to the Software and to verify compliance with the terms of this License. EasyBits may use this information, as long as it is in a form that does not personally identify you, to improve our products or to provide services or technologies to you.'
                        },
                        {
                            elem: 'h3',
                            content: 'Other services.'
                        },
                        {
                            elem: 'p',
                            content: 'This Software enables access to EasyBits’ or third party stores which offer downloads of music, games and other content for sale and other services (collectively and individually, "Services"). You understand that by using any of the Services, you may encounter content that may be deemed offensive, indecent, or objectionable, which content may or may not be identified as having such language. Nevertheless, you agree to use the Services at your sole risk and that EasyBits has no liability to you for content that may be found to be offensive, indecent, or objectionable. Content types and descriptions are provided for convenience, and you acknowledge and agree that EasyBits does not guarantee their accuracy. Certain Services may include materials from third parties or links to certain third party web sites. You acknowledge and agree that EasyBits is not responsible for examining or evaluating the content or accuracy of any such third-party material or web sites. EasyBits does not warrant or endorse and does not assume and will not have any liability or responsibility for any third-party materials or web sites, or for products, or services of third parties. Links to other web sites are provided solely as a convenience to you. You agree that you will not use any third-party products or services in a manner that would infringe or violate the rights of any other party, and that EasyBits is not in any way responsible for any such use by you.'
                        },
                        {
                            elem: 'h3',
                            content: 'Limited media warranty.'
                        },
                        {
                            elem: 'p',
                            content: 'IF THE SOFTWARE HAS BEEN DELIVERED BY EASYBITS ON PHYSICAL MEDIA, EASYBITS WARRANTS THE MEDIA TO BE FREE FROM MATERIAL PHYSICAL DEFECTS FOR A PERIOD OF NINETY (90) DAYS AFTER DELIVERY BY EASYBITS. IF SUCH A DEFECT IS FOUND, RETURN THE MEDIA TO EASYBITS FOR REPLACEMENT OR ALTERNATE DELIVERY OF THE SOFTWARE AS EASYBITS MAY SELECT. THIS LIMITED WARRANTY AND ANY IMPLIED WARRANTIES ON THE MEDIA ARE LIMITED IN DURATION TO NINETY (90) DAYS FROM THE DATE OF ORIGINAL RETAIL PURCHASE. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. THE LIMITED WARRANTY SET FORTH HEREIN IS THE ONLY WARRANTY MADE TO YOU AND IS PROVIDED IN LIEU OF ANY OTHER WARRANTIES (IF ANY) CREATED BY ANY DOCUMENTATION OR PACKAGING. THIS LIMITED WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY BY JURISDICTION.'
                        },
                        {
                            elem: 'h3',
                            content: 'Exclusion of other warranties.'
                        },
                        {
                            elem: 'p',
                            content: 'EXCEPT AS PROVIDED ABOVE, THE SOFTWARE IS PROVIDED "AS IS" WITHOUT ANY EXPRESS OR IMPLIED WARRANTY OF ANY KIND INCLUDING WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A PARTICULAR PURPOSE. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, EASYBITS DOES NOT WARRANT OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR COMPLETENESS OF ANY INFORMATION, TEXT, GRAPHICS, LINKS OR OTHER ITEMS CONTAINED WITHIN OR LINKED TO BY THE SOFTWARE.'
                        },
                        {
                            elem: 'h3',
                            content: 'Limitation of liability.'
                        },
                        {
                            elem: 'p',
                            content: 'TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL EASYBITS BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SOFTWARE OR SERVICES, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF EASYBITS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. IN NO EVENT SHALL EASYBITS’ TOTAL LIABILITY TO YOU FOR ALL DAMAGES (OTHER THAN AS MAY BE REQUIRED BY APPLICABLE LAW IN CASES INVOLVING PERSONAL INJURY) EXCEED THE AMOUNT YOU PAID TO PURCHASE THE SOFTWARE. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDIES FAIL THEIR ESSENTIAL PURPOSE.'
                        },
                        {
                            elem: 'title',
                            content: 'User submissions.'
                        },
                        {
                            elem: 'p',
                            content: [
                                'With the exception of ',
                                {
                                    block: 'b-link',
                                    url: '#EasyBits-privacy-statement',
                                    content: 'EasyBits privacy statement'
                                },
                                ', you agree that any material, information or other communication you transmit or post to an EasyBits website or provide to EasyBits will be considered non-confidential and non-proprietary ("Communications"). EasyBits will have no obligations with respect to the Communications and you agree that title to any such Communications will be shared with EasyBits. You agree that EasyBits and its designees are free to copy, modify, create derivative works, publicly display, disclose, distribute, license and sublicense through multiple tiers of distribution and licensees, incorporate and otherwise use the Communications and all data, images, sounds, text, and other things embodied therein, including derivative works, for any and all commercial or non-commercial purposes.'
                            ]
                        },
                        {
                            elem: 'h3',
                            content: 'Termination.'
                        },
                        {
                            elem: 'p',
                            content: 'EasyBits may terminate this Agreement at any time if you violate its terms. Upon termination, you will immediately cease using and destroy the Software or return all copies of the Software to EasyBits.'
                        },
                        {
                            elem: 'h3',
                            content: 'Applicable laws and general provisions.'
                        },
                        {
                            elem: 'p',
                            content: 'This license is governed by and shall be interpreted in accordance with the laws of Norway, excluding its principles of conflict of laws and the United Nations Convention on Contracts for the International Sale of Goods, which is expressly excluded. All disputes and claims of whatever nature shall be adjudicated by a court of competent jurisdiction in Norway. You may not export the Software in violation of applicable export laws and regulations. EasyBits is not obligated under any other agreements unless they are in writing and signed by an authorized representative of EasyBits. This License constitutes the entire agreement between the parties with respect to the use of the Software and supersedes all prior or contemporaneous understandings regarding such subject matter. Any translation of this License is done for local requirements and in the event of a dispute between the English and any non-English versions, the English version of this License shall govern.'
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